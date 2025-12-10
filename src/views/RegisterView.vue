<template>
    <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="6" lg="4">
                <v-card class="elevation-12 rounded-lg" color="surface">
                    <v-toolbar color="primary" dark flat class="text-center rounded-t-lg">
                        <v-toolbar-title class="text-uppercase font-weight-bold">
                            Sign Up
                        </v-toolbar-title>
                    </v-toolbar>
                    <v-card-text class="pa-6">
                        <v-form ref="form" v-model="valid">
                            <v-text-field
                                v-model="email"
                                label="Email"
                                prepend-inner-icon="mdi-email"
                                type="email"
                                variant="outlined"
                                color="primary"
                                :rules="emailRules"
                                required
                            ></v-text-field>

                            <v-text-field
                                v-model="password"
                                label="Password"
                                prepend-inner-icon="mdi-lock"
                                type="password"
                                variant="outlined"
                                color="primary"
                                :rules="passwordRules"
                                required
                            ></v-text-field>

                            <v-text-field
                                v-model="confirmPassword"
                                label="Confirm Password"
                                prepend-inner-icon="mdi-lock-check"
                                type="password"
                                variant="outlined"
                                color="primary"
                                :rules="confirmPasswordRules"
                                required
                            ></v-text-field>

                            <v-alert
                                v-if="errorMsg"
                                type="error"
                                variant="tonal"
                                dense
                                class="mb-4"
                            >
                                {{ errorMsg }}
                            </v-alert>
                        </v-form>
                    </v-card-text>
                    <v-card-actions class="pa-6 pt-0 flex-column">
                        <v-btn
                            block
                            color="primary"
                            size="large"
                            variant="elevated"
                            class="mb-4 font-weight-bold"
                            @click="handleSubmit"
                        >
                            Sign Up
                        </v-btn>
                        
                         <v-divider class="mb-4 w-100"></v-divider>

                        <div class="text-body-2 text-center">
                            Already have an account?
                            <router-link
                                to="/login"
                                class="text-primary font-weight-bold ml-1 text-decoration-none"
                            >
                                Login
                            </router-link>
                        </div>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

const router = useRouter()
const valid = ref(false)
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const errorMsg = ref('')

const emailRules = [
    v => !!v || 'Email is required',
    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
]

const passwordRules = [
    v => !!v || 'Password is required',
    v => (v && v.length >= 6) || 'Password must be at least 6 characters',
]

const confirmPasswordRules = computed(() => [
    v => !!v || 'Confirm Password is required',
    v => v === password.value || 'Passwords must match',
])

const handleSubmit = () => {
    if (!valid.value) return
    
    errorMsg.value = '' // Clear previous errors

    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((data) => {
            console.log("Successfully registered!", data);
            router.push('/')
        })
        .catch((error) => {
            console.log(error.code);
            switch (error.code) {
                case 'auth/email-already-in-use':
                    errorMsg.value = 'Email is already in use.'
                    break
                case 'auth/invalid-email':
                    errorMsg.value = 'Invalid email address.'
                    break
                case 'auth/weak-password':
                    errorMsg.value = 'Password is too weak.'
                    break
                default:
                    errorMsg.value = error.message
            }
        })
}
</script>

<style scoped>
.fill-height {
    min-height: 100vh;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}
</style>
