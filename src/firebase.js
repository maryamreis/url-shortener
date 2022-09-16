// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9MIAQZ1XIflgNoEtRbep1wcEXOXJkf6Q",
  authDomain: "shortly-a567f.firebaseapp.com",
  projectId: "shortly-a567f",
  storageBucket: "shortly-a567f.appspot.com",
  messagingSenderId: "368859341734",
  appId: "1:368859341734:web:d5c04adcbef3a75e02a567",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// create our database
// const db = firebaseApp.firestore();
const db = getFirestore(app);

export { app, db };
