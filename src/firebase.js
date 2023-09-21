import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBi2K5h2wL3MBjrSHEKU-oYIhK4A2RoYu0",
  authDomain: "clone-6f125.firebaseapp.com",
  projectId: "clone-6f125",
  storageBucket: "clone-6f125.appspot.com",
  messagingSenderId: "793666435708",
  appId: "1:793666435708:web:2dcfd996e27e2b7b69e7f9",
  measurementId: "G-DJF7PN9H3K"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };