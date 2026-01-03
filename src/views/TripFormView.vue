<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <v-card class="pa-4">
          <v-card-title class="text-h5 text-primary mb-4">Plan a New Trip</v-card-title>
          
          <v-form @submit.prevent="saveTrip">
            <v-row>
              <v-col cols="12" md="6">
                <v-autocomplete
                  v-model="form.destination"
                  :items="destinations"
                  label="Destination"
                  prepend-inner-icon="mdi-map-marker"
                  :rules="destinationRules"
                  required
                  variant="outlined"
                ></v-autocomplete>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model.number="form.budget"
                  label="Budget ($)"
                  type="number"
                  prepend-inner-icon="mdi-currency-usd"
                  variant="outlined"
                  min="0"
                  :rules="budgetRules"
                ></v-text-field>
              </v-col>
                          
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="form.dates.start"
                  label="Start Date"
                  type="date"
                  prepend-inner-icon="mdi-calendar-start"
                  variant="outlined"
                  :min="today"
                  :rules="startDateRules"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="form.dates.end"
                  label="End Date"
                  type="date"
                  prepend-inner-icon="mdi-calendar-end"
                  variant="outlined"
                  :min="form.dates.start"
                  :rules="endDateRules"
                ></v-text-field>
              </v-col>
            </v-row>

            <div class="d-flex justify-center my-4">
              <v-btn color="secondary" variant="tonal" @click="generateDays" :disabled="!form.dates.start || !form.dates.end">
                Generate Itinerary Days
              </v-btn>
            </div>

            <v-expand-transition>
              <div v-if="form.itinerary.length > 0">
                <h3 class="text-h6 mb-2">Itinerary</h3>
                
                <v-card v-for="(day, dayIndex) in form.itinerary" :key="day.dayNumber" class="mb-4" variant="outlined">
                  <v-card-title class="d-flex justify-space-between bg-grey-lighten-4 py-2 text-subtitle-1">
                    <span>Day {{ day.dayNumber }} - {{ day.date }}</span>
                    <v-btn size="small" color="primary" variant="text" @click="addActivity(dayIndex)" prepend-icon="mdi-plus">Add Activity</v-btn>
                  </v-card-title>
                  
                  <v-card-text class="pa-2">
                    <div v-if="day.activities.length === 0" class="text-center pa-2 text-grey">No activities</div>
                    
                    <div v-for="(activity, actIndex) in day.activities" :key="activity.id" class="d-flex align-center gap-2 mb-2 ga-2">
                      <v-select
                        v-model="activity.time"
                        :items="timeSlots"
                        density="compact"
                        hide-details
                        style="max-width: 120px"
                      ></v-select>
                      
                      <v-select 
                        v-model="activity.type" 
                        :items="activityTypes" 
                        density="compact" 
                        hide-details 
                        style="max-width: 140px"
                        @update:modelValue="activity.description = ''; activity.cost = 0"
                      ></v-select>
                      
                      <v-select
                        v-model="activity.description"
                        :items="getAvailableActivities(activity.type)"
                        item-title="description"
                        item-value="description"
                        placeholder="Select Activity"
                        density="compact"
                        hide-details
                        return-object
                        @update:modelValue="(val) => handleActivitySelect(val, dayIndex, actIndex)"
                      ></v-select>
                      
                      <v-text-field 
                        v-model.number="activity.cost" 
                        type="number" 
                        prefix="$" 
                        density="compact" 
                        hide-details 
                        style="max-width: 100px"
                        readonly
                        disabled
                      ></v-text-field>
                      
                      <v-btn icon="mdi-delete" size="small" color="error" variant="text" @click="removeActivity(dayIndex, actIndex)"></v-btn>
                    </div>
                  </v-card-text>
                </v-card>
              </div>
            </v-expand-transition>

            <v-divider class="my-4"></v-divider>
            
            <div class="d-flex justify-end align-center gap-2 ga-2">
               <div v-if="form.itinerary.length > 0" class="mr-4 text-subtitle-1">
                Estimated Cost: 
                <span :class="{'text-error': totalItineraryCost > form.budget, 'text-success': totalItineraryCost <= form.budget}">
                  ${{ totalItineraryCost }}
                </span>
                <span class="text-grey"> / ${{ form.budget }}</span>
              </div>
              <v-btn to="/" variant="plain">Cancel</v-btn>
              <v-btn type="submit" color="primary" size="large" :disabled="!isDestinationValid || form.budget <= 200 || !form.dates.start || !form.dates.end || form.itinerary.length === 0 || totalItineraryCost > form.budget">Save Trip</v-btn>
            </div>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useTripsStore } from '../stores/trips'
import { storeToRefs } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

const store = useTripsStore()
const { getDestinations: destinations, getTripActivities, getDestinationImage } = storeToRefs(store)
const router = useRouter()

const form = ref({
  destination: '',
  coverImage: '',
  dates: { start: '', end: '' },
  budget: 0,
  itinerary: []
})

const destinationRules = [
  v => !!v || 'Destination is required',
  v => destinations.value.includes(v) || 'Please select a valid destination from the list'
]

const isDestinationValid = computed(() => {
  return form.value.destination && destinations.value.includes(form.value.destination)
})

watch(() => form.value.destination, (newDest) => {
  if (newDest) {
    const imageUrl = getDestinationImage.value(newDest)
    if (imageUrl) {
      form.value.coverImage = imageUrl
    }
  }
})

const today = new Date().toISOString().split('T')[0]

const budgetRules = [
  v => v >= 0 || 'Budget cannot be negative',
  v => v > 200 || 'Budget must be over $200'
]

const startDateRules = [
  v => !!v || 'Start Date is required',
  v => v >= today || 'Start date cannot be in the past'
]

const endDateRules = [
  v => !!v || 'End Date is required',
  v => !form.value.dates.start || v >= form.value.dates.start || 'End date must be after start date'
]



const totalItineraryCost = computed(() => {
  return form.value.itinerary.reduce((total, day) => {
    return total + day.activities.reduce((dayTotal, activity) => dayTotal + (activity.cost || 0), 0)
  }, 0)
})

const activityTypes = ['Sightseeing', 'Food', 'Transport', 'Accommodation', 'Shopping', 'Other']

const generateDays = () => {
  if (!form.value.dates.start || !form.value.dates.end) return
  
  const start = new Date(form.value.dates.start)
  const end = new Date(form.value.dates.end)
  const days = []
  let current = new Date(start)
  let dayNum = 1

  // Safety check to prevent infinite loop
  let safety = 0
  while (current <= end && safety < 365) {
    days.push({
      dayNumber: dayNum++,
      date: current.toISOString().split('T')[0],
      activities: []
    })
    current.setDate(current.getDate() + 1)
    safety++
  }
  form.value.itinerary = days
}



// Generate Time Slots (08:00 - 23:30)
const timeSlots = []
for (let i = 8; i < 24; i++) {
  const hour = i.toString().padStart(2, '0')
  timeSlots.push(`${hour}:00`)
  timeSlots.push(`${hour}:30`)
}

// Get available activities for the selected destination and type
const availableActivities = computed(() => {
  if (!form.value.destination) return {}
  return getTripActivities.value(form.value.destination)
})

const getAvailableActivities = (type) => {
  return availableActivities.value[type] || []
}

const handleActivitySelect = (selection, dayIndex, actIndex) => {
  // Selection is the object { description, cost } because return-object is true
  if (selection) {
    const activity = form.value.itinerary[dayIndex].activities[actIndex]
    activity.description = selection.description
    activity.cost = selection.cost
  }
}

const addActivity = (dayIndex) => {
  form.value.itinerary[dayIndex].activities.push({
    id: uuidv4(),
    time: '10:00',
    type: 'Sightseeing',
    description: '',
    cost: 0
  })
}

const removeActivity = (dayIndex, actIndex) => {
  form.value.itinerary[dayIndex].activities.splice(actIndex, 1)
}

const saveTrip = async () => {
  try {
    await store.addTrip(form.value)
    router.push('/')
  } catch (error) {
    console.error("Failed to save trip:", error)
    alert("Failed to save trip. Please try again.")
  }
}
</script>
