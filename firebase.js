// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

//import auth
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBu_oXscYjYZaDnrOYiBr0LKHk6fJVtIQo",
  authDomain: "chatverse-66867.firebaseapp.com",
  projectId: "chatverse-66867",
  storageBucket: "chatverse-66867.appspot.com",
  messagingSenderId: "24126920577",
  appId: "1:24126920577:web:f3c7dab70569dbeae57a80",
  measurementId: "G-PMJJZ0TZQ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth  = getAuth(app)

export {auth}