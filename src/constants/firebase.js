// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKBsd5T0Xj9vEbrvB3GHOBullJaHBiN9U",
  authDomain: "t-monument-391119.firebaseapp.com",
  projectId: "t-monument-391119",
  storageBucket: "t-monument-391119.appspot.com",
  messagingSenderId: "82587848890",
  appId: "1:82587848890:web:21832a649fc413081df283",
  measurementId: "G-TXWGYZ927J"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
