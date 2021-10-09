import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC4P0-N5u5oAj0wpSFaqh1k909uGXI1N-E',
  authDomain: 'subjects-crud.firebaseapp.com',
  databaseURL:
    'https://subjects-crud-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'subjects-crud',
  storageBucket: 'subjects-crud.appspot.com',
  messagingSenderId: '554242057340',
  appId: '1:554242057340:web:fee8f2b8738448655395f9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export default database;
