import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

export const useTripsStore = defineStore('trips', {
    state: () => ({
        trips: [
            {
                id: 'uuid_1',
                destination: 'Paris, France',
                coverImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000&auto=format&fit=crop',
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
                coverImage: 'data:image/jpeg;base64,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',
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
                coverImage: 'https://images.unsplash.com/photo-1535498730771-e735b998cd64?q=80&w=1000&auto=format&fit=crop',
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
            },
            {
                id: 'uuid_10',
                destination: 'Bali, Indonesia',
                coverImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000',
                dates: { start: '2026-10-10', end: '2026-10-15' },
                budget: 1200,
                itinerary: [
                    {
                        dayNumber: 1,
                        date: '2026-10-10',
                        activities: [
                            { id: uuidv4(), time: '09:00', type: 'Food', description: 'Nasi Goreng Warung', cost: 5 },
                            { id: uuidv4(), time: '14:00', type: 'Sightseeing', description: 'Tanah Lot', cost: 10 },
                            { id: uuidv4(), time: '17:00', type: 'Sightseeing', description: 'Monkey Forest', cost: 5 },
                            { id: uuidv4(), time: '20:00', type: 'Food', description: 'Dinner at Potato Head Beach Club', cost: 30 }
                        ]
                    }
                ]
            },
            {
                id: 'uuid_11',
                destination: 'Tokyo, Japan',
                coverImage: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1000',
                dates: { start: '2026-11-05', end: '2026-11-10' },
                budget: 3000,
                itinerary: [
                    {
                        dayNumber: 1,
                        date: '2026-11-05',
                        activities: [
                            { id: uuidv4(), time: '08:00', type: 'Food', description: 'Sushi Dai', cost: 50 },
                            { id: uuidv4(), time: '10:00', type: 'Sightseeing', description: 'Senso-ji Temple', cost: 0 },
                            { id: uuidv4(), time: '13:00', type: 'Food', description: 'Ichiran Ramen', cost: 15 },
                            { id: uuidv4(), time: '15:00', type: 'Sightseeing', description: 'Tokyo Tower', cost: 25 },
                            { id: uuidv4(), time: '19:00', type: 'Shopping', description: 'Ginza', cost: 100 }
                        ]
                    }
                ]
            },
            {
                id: 'uuid_12',
                destination: 'Cairo, Egypt',
                coverImage: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?q=80&w=1000',
                dates: { start: '2026-12-01', end: '2026-12-05' },
                budget: 1000,
                itinerary: [
                    {
                        dayNumber: 1,
                        date: '2026-12-01',
                        activities: [
                            { id: uuidv4(), time: '09:00', type: 'Sightseeing', description: 'Pyramids of Giza', cost: 20 },
                            { id: uuidv4(), time: '12:00', type: 'Food', description: 'Abou Tarek', cost: 5 },
                            { id: uuidv4(), time: '14:00', type: 'Sightseeing', description: 'The Sphinx', cost: 0 },
                            { id: uuidv4(), time: '16:00', type: 'Sightseeing', description: 'Egyptian Museum', cost: 10 },
                            { id: uuidv4(), time: '19:00', type: 'Food', description: 'Dinner at Felfela', cost: 15 }
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
