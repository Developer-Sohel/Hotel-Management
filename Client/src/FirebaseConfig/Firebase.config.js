// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_apiKey,
  // authDomain: import.meta.env.VITE_authDomain,
  // projectId: import.meta.env.VITE_projectId,
  // storageBucket: import.meta.env.VITE_storageBucket,
  // messagingSenderId: import.meta.env.VITE_messagingSenderId,
  // appId: import.meta.env.VITE_appId,

  apiKey: "AIzaSyD1iUjjvecdbmF-DWB-yHo5BjWL_JPLzU4",
  authDomain: "docktor-management.firebaseapp.com",
  projectId: "docktor-management",
  storageBucket: "docktor-management.firebasestorage.app",
  messagingSenderId: "1037001954928",
  appId: "1:1037001954928:web:32f19f762a06a49d1ec6b5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);  