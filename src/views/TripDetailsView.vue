<template>
  <v-container v-if="trip">
    <!-- Header -->
    <v-card class="mb-6 rounded-lg" elevation="3">
      <v-img :src="trip.coverImage" height="300" cover class="align-end gradient-overlay">
        <v-card-title class="text-white text-h3 font-weight-bold text-shadow mb-2">
          {{ trip.destination }}
        </v-card-title>
        <v-card-subtitle class="text-white text-h6 font-weight-medium mb-4 d-flex align-center">
          <v-icon icon="mdi-calendar" start></v-icon>
          {{ formatDate(trip.dates.start) }} - {{ formatDate(trip.dates.end) }}
        </v-card-subtitle>
      </v-img>
      <v-card-text class="d-flex justify-space-between align-center py-4">
        <div>
           <div class="text-h6">Budget: ${{ trip.budget }}</div>
           <div class="text-h6" :class="budgetColor">Spent: ${{ totalCost }}</div>
        </div>
        <v-btn color="error" variant="text" prepend-icon="mdi-delete" @click="deleteTrip">Delete Trip</v-btn>
      </v-card-text>
      <v-progress-linear :model-value="(totalCost / trip.budget) * 100" :color="progressColor" height="8"></v-progress-linear>
    </v-card>

    <!-- Itinerary -->
    <div class="text-h5 mb-4 text-primary font-weight-bold">Itinerary</div>
    
    <v-timeline density="compact" side="end">
      <v-timeline-item v-for="day in trip.itinerary" :key="day.dayNumber" dot-color="primary" size="small">
        <template v-slot:opposite>
          <div class="text-subtitle-1 font-weight-bold">Day {{ day.dayNumber }}</div>
          <div class="text-caption">{{ formatDate(day.date) }}</div>
        </template>
        
        <v-card variant="outlined" class="mb-2" width="100%" style="min-width: 600px">
          <v-card-title class="text-subtitle-2 bg-grey-lighten-4 py-1">
             Activities - Day: {{ day.dayNumber }}
          </v-card-title>
          <v-card-text class="pa-0">
            <v-list lines="two">
              <v-list-item v-for="activity in day.activities" :key="activity.id">
                <template v-slot:prepend>
                  <div class="text-caption font-weight-bold mr-4" style="min-width: 45px">{{ activity.time }}</div>
                </template>
                <v-list-item-title class="font-weight-medium">
                  {{ activity.description }}
                </v-list-item-title>
                <template v-slot:append>
                  <v-chip size="x-small" color="secondary" class="mr-2">{{ activity.type }}</v-chip>
                  <div class="text-body-2 text-green font-weight-medium" >${{ activity.cost }}</div>
                </template>
              </v-list-item>
              
              <v-list-item v-if="day.activities.length === 0">
                 <v-list-item-title class="text-grey font-italic text-caption">No activities planned</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>

  </v-container>
  <v-container v-else class="fill-height d-flex justify-center align-center">
    <v-progress-circular indeterminate color="primary"></v-progress-circular>
  </v-container>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useTripsStore } from '../stores/trips'
import { computed } from 'vue'

const route = useRoute()
const router = useRouter()
const store = useTripsStore()

const trip = computed(() => store.getTripById(route.params.id))

const totalCost = computed(() => {
  if (!trip.value) return 0
  return trip.value.itinerary.reduce((acc, day) => {
    return acc + day.activities.reduce((sum, act) => sum + (act.cost || 0), 0)
  }, 0)
})

const budgetColor = computed(() => {
  if (!trip.value) return ''
  return totalCost.value > trip.value.budget ? 'text-error' : 'text-success'
})

const progressColor = computed(() => {
  if (!trip.value) return 'primary'
  return totalCost.value > trip.value.budget ? 'error' : 'primary'
})

const formatDate = (dateStr) => {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })
}

const deleteTrip = () => {
  if(confirm('Are you sure you want to delete this trip?')) {
      store.deleteTrip(trip.value.id)
      router.push('/')
  }
}
</script>

<style scoped>
.text-shadow {
  text-shadow: 1px 1px 3px rgba(0,0,0,0.8);
}
.gradient-overlay {
  background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%);
}
:deep(.v-timeline-divider__before) {
  background: linear-gradient(to bottom, transparent, white, transparent) !important;
}
:deep(.v-timeline-divider__after) {
  background: linear-gradient(to bottom, transparent, white, transparent) !important;
}
</style>
