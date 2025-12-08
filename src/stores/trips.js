import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

export const useTripsStore = defineStore('trips', {
    state: () => ({
        trips: [
            {
                id: 'uuid_1',
                destination: 'Paris, France',
                coverImage: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce7859?q=80&w=1000&auto=format&fit=crop',
                dates: { start: '2026-06-01', end: '2026-06-05' },
                budget: 2000,
                itinerary: [
                    {
                        dayNumber: 1,
                        date: '2024-06-01',
                        activities: [
                            { id: uuidv4(), time: '09:00', type: 'Food', description: 'Breakfast at Kozy Bosquet', cost: 20 },
                            { id: uuidv4(), time: '10:30', type: 'Sightseeing', description: 'Eiffel Tower', cost: 30 },
                            { id: uuidv4(), time: '13:00', type: 'Food', description: 'Lunch at Francette', cost: 30 },
                            { id: uuidv4(), time: '15:00', type: 'Sightseeing', description: 'Seine River Cruise', cost: 18 },
                            { id: uuidv4(), time: '17:00', type: 'Sightseeing', description: 'Arc de Triomphe', cost: 16 },
                            { id: uuidv4(), time: '20:00', type: 'Food', description: 'Dinner at Le Cinq', cost: 300 }
                        ]
                    },
                    {
                        dayNumber: 2,
                        date: '2024-06-02',
                        activities: [
                            { id: uuidv4(), time: '09:00', type: 'Food', description: 'Breakfast at Du Pain et des Idées', cost: 6 },
                            { id: uuidv4(), time: '10:00', type: 'Sightseeing', description: 'Louvre Museum', cost: 22 },
                            { id: uuidv4(), time: '13:30', type: 'Food', description: 'Lunch at Le Café Marly', cost: 50 },
                            { id: uuidv4(), time: '15:30', type: 'Sightseeing', description: 'Place de la Concorde', cost: 0 },
                            { id: uuidv4(), time: '19:30', type: 'Food', description: 'Dinner at Restaurant Guy Savoy', cost: 600 }
                        ]
                    },
                    {
                        dayNumber: 3,
                        date: '2024-06-03',
                        activities: [
                            { id: uuidv4(), time: '09:30', type: 'Food', description: 'Breakfast at Wild & The Moon', cost: 16 },
                            { id: uuidv4(), time: '11:00', type: 'Sightseeing', description: 'Sacré-Cœur Basilica', cost: 8 },
                            { id: uuidv4(), time: '13:00', type: 'Sightseeing', description: 'Moulin Rouge', cost: 0 },
                            { id: uuidv4(), time: '15:00', type: 'Shopping', description: 'Westfield Forum des Halles', cost: 150 },
                            { id: uuidv4(), time: '19:30', type: 'Food', description: 'Dinner at Sacrée Fleur', cost: 40 }
                        ]
                    },
                    {
                        dayNumber: 4,
                        date: '2024-06-04',
                        activities: [
                            { id: uuidv4(), time: '09:30', type: 'Food', description: 'Breakfast at Chambelland', cost: 12 },
                            { id: uuidv4(), time: '11:00', type: 'Sightseeing', description: 'Place des Vosges & Musée Carnavalet', cost: 0 },
                            { id: uuidv4(), time: '13:00', type: 'Food', description: 'Lunch at Le Ju', cost: 25 },
                            { id: uuidv4(), time: '15:00', type: 'Sightseeing', description: 'Centre Pompidou', cost: 15 },
                            { id: uuidv4(), time: '17:30', type: 'Sightseeing', description: 'Île Saint-Louis', cost: 8 },
                            { id: uuidv4(), time: '20:00', type: 'Food', description: 'Dinner at Pink Mamma', cost: 50 }
                        ]
                    },
                    {
                        dayNumber: 5,
                        date: '2024-06-05',
                        activities: [
                            { id: uuidv4(), time: '09:00', type: 'Food', description: 'Breakfast at Judy, Cantine Qualitarienne', cost: 22 },
                            { id: uuidv4(), time: '10:30', type: 'Sightseeing', description: 'Luxembourg Gardens - Toy boat rental', cost: 4 },
                            { id: uuidv4(), time: '12:30', type: 'Food', description: 'Lunch at Papilla', cost: 20 },
                            { id: uuidv4(), time: '14:30', type: 'Sightseeing', description: 'The Panthéon', cost: 13 },
                            { id: uuidv4(), time: '16:30', type: 'Sightseeing', description: 'Notre Dame', cost: 20 },
                            { id: uuidv4(), time: '19:30', type: 'Food', description: 'Dinner at Le Procope', cost: 60 }
                        ]
                    },
                ]
            },
            {
                id: 'uuid_2',
                destination: 'Barcelona, Spain',
                coverImage: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80&w=1000',
                dates: { start: '2026-02-15', end: '2026-02-20' },
                budget: 2500,
                itinerary: [
                    {
                        dayNumber: 1,
                        date: '2024-06-01',
                        activities: [
                            { id: uuidv4(), time: '09:30', type: 'Food', description: 'Breakfast at Brunch & Cake', cost: 20 },
                            { id: uuidv4(), time: '11:00', type: 'Sightseeing', description: 'Casa Batlló', cost: 35 },
                            { id: uuidv4(), time: '13:00', type: 'Food', description: 'Lunch at El Naciona', cost: 50 },
                            { id: uuidv4(), time: '15:00', type: 'Shopping', description: 'Santa Eulalia', cost: 0 },
                            { id: uuidv4(), time: '17:30', type: 'Sightseeing', description: 'Sagrada Família', cost: 36 },
                            { id: uuidv4(), time: '20:30', type: 'Food', description: 'Dinner at Lasarte', cost: 300 }
                        ]
                    },
                    {
                        dayNumber: 2,
                        date: '2024-06-02',
                        activities: [
                            { id: uuidv4(), time: '09:00', type: 'Food', description: 'Breakfast at Granja M. Viader', cost: 10 },
                            { id: uuidv4(), time: '10:30', type: 'Sightseeing', description: 'Barcelona Cathedral', cost: 9 },
                            { id: uuidv4(), time: '13:00', type: 'Food', description: 'Lunch at Mercat de la Boqueria', cost: 40 },
                            { id: uuidv4(), time: '17:00', type: 'Sightseeing', description: 'Picasso Museum', cost: 15 },
                            { id: uuidv4(), time: '20:00', type: 'Food', description: 'Dinner at Els Quatre Gats', cost: 50 }
                        ]
                    }
                ]
            },
            {
                id: 'uuid_3',
                destination: 'Valencia, Spain',
                coverImage: 'https://images.unsplash.com/photo-1558642084-fd07fae5282e?q=80&w=1000',
                dates: { start: '2026-03-10', end: '2026-03-15' },
                budget: 1800,
                itinerary: [
                    { dayNumber: 1, date: '2026-03-10', activities: [{ id: uuidv4(), time: '10:00', type: 'Sightseeing', description: 'City of Arts and Sciences', cost: 40 }] }
                ]
            },
            {
                id: 'uuid_4',
                destination: 'New York, USA',
                coverImage: 'https://images.unsplash.com/photo-1496442226666-8d4a0e62e6e9?q=80&w=1000',
                dates: { start: '2026-04-01', end: '2026-04-07' },
                budget: 4000,
                itinerary: [
                    {
                        dayNumber: 1,
                        date: '2026-04-01',
                        activities: [
                            { id: uuidv4(), time: '09:00', type: 'Food', description: 'Bagel at Ess-a-Bagel', cost: 15 },
                            { id: uuidv4(), time: '10:30', type: 'Sightseeing', description: 'Central Park Walk', cost: 0 },
                            { id: uuidv4(), time: '19:00', type: 'Food', description: 'Dinner at Katz\'s Delicatessen', cost: 35 }
                        ]
                    },
                    {
                        dayNumber: 2,
                        date: '2026-04-02',
                        activities: [
                            { id: uuidv4(), time: '10:00', type: 'Sightseeing', description: 'Statue of Liberty', cost: 30 },
                            { id: uuidv4(), time: '20:00', type: 'Sightseeing', description: 'Times Square', cost: 0 }
                        ]
                    }
                ]
            },
            {
                id: 'uuid_5',
                destination: 'Miami, USA',
                coverImage: 'https://images.unsplash.com/photo-1506966953602-c20cc11f75e2?q=80&w=1000',
                dates: { start: '2026-05-12', end: '2026-05-18' },
                budget: 2200,
                itinerary: [
                    {
                        dayNumber: 1,
                        date: '2026-05-12',
                        activities: [
                            { id: uuidv4(), time: '10:00', type: 'Sightseeing', description: 'South Beach', cost: 0 },
                            { id: uuidv4(), time: '13:00', type: 'Food', description: 'Cuban Sandwich at Versailles', cost: 15 },
                            { id: uuidv4(), time: '21:00', type: 'Sightseeing', description: 'Ocean Drive Nightlife', cost: 100 }
                        ]
                    }
                ]
            },
            {
                id: 'uuid_6',
                destination: 'Chicago, USA',
                coverImage: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?q=80&w=1000',
                dates: { start: '2026-06-20', end: '2026-06-25' },
                budget: 1900,
                itinerary: [
                    {
                        dayNumber: 1,
                        date: '2026-06-20',
                        activities: [
                            { id: uuidv4(), time: '10:00', type: 'Sightseeing', description: 'The Bean (Cloud Gate)', cost: 0 },
                            { id: uuidv4(), time: '12:00', type: 'Food', description: 'Deep Dish Pizza at Lou Malnati\'s', cost: 30 },
                            { id: uuidv4(), time: '15:00', type: 'Sightseeing', description: 'Art Institute of Chicago', cost: 25 }
                        ]
                    }
                ]
            },
            {
                id: 'uuid_7',
                destination: 'Madrid, Spain',
                coverImage: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=1000',
                dates: { start: '2026-07-05', end: '2026-07-10' },
                budget: 2100,
                itinerary: [
                    {
                        dayNumber: 1,
                        date: '2026-07-05',
                        activities: [
                            { id: uuidv4(), time: '09:00', type: 'Food', description: 'Churros at San Ginés', cost: 8 },
                            { id: uuidv4(), time: '11:00', type: 'Sightseeing', description: 'Prado Museum', cost: 15 },
                            { id: uuidv4(), time: '18:00', type: 'Sightseeing', description: 'Retiro Park', cost: 0 }
                        ]
                    }
                ]
            },
            {
                id: 'uuid_8',
                destination: 'London, UK',
                coverImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1000',
                dates: { start: '2026-08-10', end: '2026-08-17' },
                budget: 3500,
                itinerary: [
                    {
                        dayNumber: 1,
                        date: '2026-08-10',
                        activities: [
                            { id: uuidv4(), time: '10:00', type: 'Sightseeing', description: 'Big Ben & Parliament', cost: 0 },
                            { id: uuidv4(), time: '14:00', type: 'Sightseeing', description: 'British Museum', cost: 0 },
                            { id: uuidv4(), time: '17:00', type: 'Food', description: 'Afternoon Tea at The Ritz', cost: 80 }
                        ]
                    }
                ]
            },
            {
                id: 'uuid_9',
                destination: 'Istanbul, Turkey',
                coverImage: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1000',
                dates: { start: '2026-09-01', end: '2026-09-07' },
                budget: 1500,
                itinerary: [
                    {
                        dayNumber: 1,
                        date: '2026-09-01',
                        activities: [
                            { id: uuidv4(), time: '09:00', type: 'Sightseeing', description: 'Hagia Sophia', cost: 0 },
                            { id: uuidv4(), time: '12:00', type: 'Food', description: 'Kebab Lunch', cost: 10 },
                            { id: uuidv4(), time: '15:00', type: 'Sightseeing', description: 'Blue Mosque', cost: 0 },
                            { id: uuidv4(), time: '19:00', type: 'Shopping', description: 'Grand Bazaar', cost: 50 }
                        ]
                    }
                ]
            }
        ]
    }),
    getters: {
        getAllTrips: (state) => state.trips,
        getTripById: (state) => (id) => state.trips.find(trip => trip.id === id),
    },
    actions: {
        addTrip(trip) {
            const newTrip = {
                ...trip,
                id: uuidv4()
            }
            this.trips.push(newTrip)
        },
        deleteTrip(id) {
            this.trips = this.trips.filter(t => t.id !== id)
        },
        addActivityToDay(tripId, dayNumber, activity) {
            const trip = this.getTripById(tripId)
            if (trip) {
                const day = trip.itinerary.find(d => d.dayNumber === dayNumber)
                if (day) {
                    day.activities.push({
                        ...activity,
                        id: uuidv4()
                    })
                }
            }
        }
    }
})
