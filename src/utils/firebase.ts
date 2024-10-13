// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDp5GbgPLsSoxaqvcvnMbDyLIt-apJhwf8",
    authDomain: "netflix-gpt-4cbae.firebaseapp.com",
    projectId: "netflix-gpt-4cbae",
    storageBucket: "netflix-gpt-4cbae.appspot.com",
    messagingSenderId: "862830913219",
    appId: "1:862830913219:web:96c916504059e1f076e476",
    measurementId: "G-D8SEG511YP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);
export const auth = getAuth(app);