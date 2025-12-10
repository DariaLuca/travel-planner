<template>
  <v-app>
    <v-app-bar color="primary" density="compact" elevation="2">
      <v-toolbar-title class="text-uppercase font-weight-bold ml-4">
        Travel Planner
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-if="isLoggedIn"
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

const router = useRouter()
const isLoggedIn = ref(false)

onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    isLoggedIn.value = !!user
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
