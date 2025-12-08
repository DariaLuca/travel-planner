<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <v-card class="pa-4">
          <v-card-title class="text-h5 text-primary mb-4">Plan a New Trip</v-card-title>
          
          <v-form @submit.prevent="saveTrip">
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field v-model="form.destination" label="Destination" prepend-inner-icon="mdi-map-marker" required variant="outlined"></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-model.number="form.budget" label="Budget ($)" type="number" prepend-inner-icon="mdi-currency-usd" variant="outlined"></v-text-field>
              </v-col>
                          
              <v-col cols="12" sm="6">
                <v-text-field v-model="form.dates.start" label="Start Date" type="date" prepend-inner-icon="mdi-calendar-start" variant="outlined"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field v-model="form.dates.end" label="End Date" type="date" prepend-inner-icon="mdi-calendar-end" variant="outlined"></v-text-field>
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
                      <v-text-field v-model="activity.time" type="time" density="compact" hide-details style="max-width: 100px"></v-text-field>
                      <v-select v-model="activity.type" :items="activityTypes" density="compact" hide-details style="max-width: 140px"></v-select>
                      <v-text-field v-model="activity.description" placeholder="Description" density="compact" hide-details></v-text-field>
                      <v-text-field v-model.number="activity.cost" type="number" prefix="$" density="compact" hide-details style="max-width: 100px"></v-text-field>
                      <v-btn icon="mdi-delete" size="small" color="error" variant="text" @click="removeActivity(dayIndex, actIndex)"></v-btn>
                    </div>
                  </v-card-text>
                </v-card>
              </div>
            </v-expand-transition>

            <v-divider class="my-4"></v-divider>
            
            <div class="d-flex justify-end gap-2 ga-2">
              <v-btn to="/" variant="plain">Cancel</v-btn>
              <v-btn type="submit" color="primary" size="large" :disabled="!form.destination || form.itinerary.length === 0">Save Trip</v-btn>
            </div>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useTripsStore } from '../stores/trips'
import { v4 as uuidv4 } from 'uuid'

const store = useTripsStore()
const router = useRouter()

const form = ref({
  destination: '',
  coverImage: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1000',
  dates: { start: '', end: '' },
  budget: 0,
  itinerary: []
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

const saveTrip = () => {
  store.addTrip(form.value)
  router.push('/')
}
</script>
