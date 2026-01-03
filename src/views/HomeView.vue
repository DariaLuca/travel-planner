<template>
  <v-container>
    <!-- Authenticated User View -->
    <template v-if="user">
      <v-row class="mb-4">
        <v-col cols="12" class="d-flex justify-space-between align-center">
            <div>
              <h1 class="text-h4 text-primary font-weight-bold">My Trips</h1>
              <p class="text-subtitle-1 text-grey-darken-1">Welcome, {{ user.email }}</p>
            </div>
          <v-btn color="primary" prepend-icon="mdi-plus" to="/plan" elevation="2">New Trip</v-btn>
        </v-col>
      </v-row>
  
      <v-row>
        <v-col v-if="trips.length === 0" cols="12" class="text-center">
          <v-icon icon="mdi-airplane-off" size="64" color="grey-lighten-1"></v-icon>
          <p class="text-h6 text-grey-darken-1 mt-2">No trips planned yet. Start your adventure!</p>
        </v-col>
  
        <v-col v-for="trip in trips" :key="trip.id" cols="12" sm="6" md="4">
          <v-card :to="`/trip/${trip.id}`" hover elevation="3" class="rounded-lg">
            <v-img :src="trip.coverImage" height="200" cover class="align-end gradient-overlay">
              <v-card-title class="text-white font-weight-bold text-shadow">
                {{ trip.destination }}
              </v-card-title>
            </v-img>
            <v-card-text class="pt-4">
              <div class="d-flex align-center mb-2">
                <v-icon icon="mdi-calendar-range" start color="primary" size="small"></v-icon>
                <span class="text-body-2">{{ formatDate(trip.dates.start) }} - {{ formatDate(trip.dates.end) }}</span>
              </div>
              <div class="d-flex align-center">
                <v-icon icon="mdi-currency-usd" start color="green" size="small"></v-icon>
                <span class="text-body-2 font-weight-medium">Budget: ${{ trip.budget }}</span>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </template>

    <!-- Guest Landing View -->
    <template v-else>
      <v-row class="align-center justify-center text-center py-16">
        <v-col cols="12" md="8">
          <v-icon icon="mdi-compass-outline" size="100" color="primary" class="mb-6"></v-icon>
          <h1 class="text-h2 font-weight-bold mb-4 text-primary">Travel Planner</h1>
          <p class="text-h5 text-grey-darken-1 mb-8">
            Plan your dream vacation, track your budget, and organize your itinerary all in one place.
          </p>
          <div class="d-flex justify-center ga-4">
            <v-btn
              color="primary"
              size="x-large"
              to="/login"
              variant="elevated"
              elevation="4"
              width="150"
            >
              Login
            </v-btn>
            <v-btn
              color="primary"
              size="x-large"
              to="/register"
              variant="outlined"
              width="150"
            >
              Sign Up
            </v-btn>
          </div>
        </v-col>
      </v-row>

      <!-- Public Trips Grid -->
      <v-row>
        <v-col cols="12">
            <h2 class="text-h4 text-primary font-weight-bold mb-4">Explore Destinations</h2>
        </v-col>
        <v-col v-for="trip in publicTrips" :key="trip.id" cols="12" sm="6" md="4">
          <v-card :to="`/trip/${trip.id}`" hover elevation="3" class="rounded-lg">
            <v-img :src="trip.coverImage" height="200" cover class="align-end gradient-overlay">
              <v-card-title class="text-white font-weight-bold text-shadow">
                {{ trip.destination }}
              </v-card-title>
            </v-img>
            <v-card-text class="pt-4">
              <div class="d-flex align-center mb-2">
                <v-icon icon="mdi-calendar-range" start color="primary" size="small"></v-icon>
                <span class="text-body-2">{{ formatDate(trip.dates.start) }} - {{ formatDate(trip.dates.end) }}</span>
              </div>
              <div class="d-flex align-center">
                <v-icon icon="mdi-currency-usd" start color="green" size="small"></v-icon>
                <span class="text-body-2 font-weight-medium">Budget: ${{ trip.budget }}</span>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </template>
  </v-container>
</template>

<script setup>
import { useTripsStore } from '../stores/trips'
import { useAuthStore } from '../stores/auth'
import { storeToRefs } from 'pinia'

const store = useTripsStore()
const authStore = useAuthStore()
const { getMyTrips: trips, getAllTrips: publicTrips } = storeToRefs(store)
const { user } = storeToRefs(authStore)

const formatDate = (dateStr) => {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })
}
</script>

<style scoped>
.text-shadow {
  text-shadow: 1px 1px 3px rgba(0,0,0,0.8);
}
.gradient-overlay {
  background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%);
}
</style>
