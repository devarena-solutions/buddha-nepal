// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHUqbxmt-Ug3ynDG3qUIeB3DdnRaVBMDI",
  authDomain: "the-table-himalaya-5b482.firebaseapp.com",
  projectId: "the-table-himalaya-5b482",
  storageBucket: "the-table-himalaya-5b482.appspot.com",
  messagingSenderId: "1075703877211",
  appId: "1:1075703877211:web:ba84f570e2a684a849b97e",
  measurementId: "G-RCXYE508V9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);