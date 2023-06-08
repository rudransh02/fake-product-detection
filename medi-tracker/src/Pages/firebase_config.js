// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { apiKey } from "../config.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: { apiKey },
    authDomain: "productdetection-70455.firebaseapp.com",
    projectId: "productdetection-70455",
    storageBucket: "productdetection-70455.appspot.com",
    messagingSenderId: "354054842775",
    appId: "1:354054842775:web:905302c5c8fdede07d3cd2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
