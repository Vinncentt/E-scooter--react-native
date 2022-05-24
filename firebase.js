// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAF86wk9q8qKjLawnKnKTL9kYGZYAFbWJ4",
    authDomain: "auth-project-v.firebaseapp.com",
    projectId: "auth-project-v",
    storageBucket: "auth-project-v.appspot.com",
    messagingSenderId: "56133766047",
    appId: "1:56133766047:web:d13dc340a4bd212d1b0baa",
    measurementId: "G-XHKLZE756V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);