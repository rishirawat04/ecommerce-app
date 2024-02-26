// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnSsilMA-SWOgMsWSUe9_3osTGvnWMXzI",
  authDomain: "e-commerce-app-7e727.firebaseapp.com",
  projectId: "e-commerce-app-7e727",
  storageBucket: "e-commerce-app-7e727.appspot.com",
  messagingSenderId: "362260732005",
  appId: "1:362260732005:web:f00068b7ef0ab0013fce8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}