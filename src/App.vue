<template>
  <v-app>
    <v-app-bar color="primary" density="compact" elevation="2">
      <v-btn icon="mdi-home" to="/" variant="text" class="ml-2"></v-btn>
      <v-toolbar-title class="text-uppercase font-weight-bold ml-2">
        Travel Planner
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-if="!isLoggedIn">
        <v-btn
          to="/login"
          variant="outlined"
          rounded="pill"
          class="mr-2"
        >
          Login
        </v-btn>
        <v-btn
          to="/register"
          variant="outlined"
          rounded="pill"
          class="mr-4"
        >
          Register
        </v-btn>
      </template>
      <v-btn
        v-else
        variant="text"
        prepend-icon="mdi-logout"
        @click="handleSignOut"
      >
        Sign Out
      </v-btn>
    </v-app-bar>

    <v-main class="app-background">
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from './firebase'
import { useAuthStore } from './stores/auth'
import { useTripsStore } from './stores/trips'

const router = useRouter()
const authStore = useAuthStore()
const isLoggedIn = ref(false)

onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    isLoggedIn.value = !!user
    if (user) {
      authStore.setUser({
        uid: user.uid,
        email: user.email
      })
      const tripsStore = useTripsStore()
      tripsStore.fetchUserTrips()
      tripsStore.fetchPublicTrips()
    } else {
      authStore.clearUser()
    }
  })
})

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push('/login')
  })
}
</script>

<style>
.app-background {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d3436 100%);
  min-height: 100vh;
}
</style>
