// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtPWpE88EVxvi8K5WFTN3FC4LZAWKFcrM",
  authDomain: "re--serve.firebaseapp.com",
  projectId: "re--serve",
  storageBucket: "re--serve.appspot.com",
  messagingSenderId: "931186711915",
  appId: "1:931186711915:web:6bae328b418eefa137c02e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth };

