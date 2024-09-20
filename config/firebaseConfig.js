// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'; // Import Firebase Auth service

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyDw4HvDYxO4FS7THrijW1t2ShsHI6YjvVM",
   authDomain: "e-commerce-cart-a3758.firebaseapp.com",
   projectId: "e-commerce-cart-a3758",
   storageBucket: "e-commerce-cart-a3758.appspot.com",
   messagingSenderId: "1071537940967",
   appId: "1:1071537940967:web:fc9afc94ba3b20c1793542"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Auth and export it
const auth = getAuth(app);

export { auth };