import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TripDetailsView from '../views/TripDetailsView.vue'
import TripFormView from '../views/TripFormView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/trip/:id',
            name: 'trip-details',
            component: TripDetailsView
        },
        {
            path: '/plan',
            name: 'trip-form',
            component: TripFormView
        }
    ]
})

export default router
