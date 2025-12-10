import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCkHtGFL4oRi1-b_Eol7nGxkudDqgm5iUY",
    authDomain: "travel-planner-23b5d.firebaseapp.com",
    projectId: "travel-planner-23b5d",
    storageBucket: "travel-planner-23b5d.firebasestorage.app",
    messagingSenderId: "6714450740",
    appId: "1:6714450740:web:53181b72f93bc7e5c6bb61",
    measurementId: "G-PLMRFJ3723"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, analytics, auth, db };
