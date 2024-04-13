// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4457Bmdi4whJ2MyeCW7TVQN_AH2E9Xiw",
  authDomain: "solar-bloom.firebaseapp.com",
  projectId: "solar-bloom",
  storageBucket: "solar-bloom.appspot.com",
  messagingSenderId: "741786678258",
  appId: "1:741786678258:web:176fed2b06d40680e4716b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service

export const SERVER = "https://solarbloom.alwaysdata.net";
