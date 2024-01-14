// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2-gdHkVFxqbYadHPjqTQgnWqNgwTRVz8",
  authDomain: "quiz-project-1010.firebaseapp.com",
  projectId: "quiz-project-1010",
  storageBucket: "quiz-project-1010.appspot.com",
  messagingSenderId: "169554726172",
  appId: "1:169554726172:web:28da17f5bac5d0363b3ed9",
  measurementId: "G-ZD6EVB4NP5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);