import { initializeApp } from 'firebase/app';
import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyDOz12tHcFYknWXP_1zP0XXWcfKRveocZg",
    authDomain: "netflix-clone-ffb60.firebaseapp.com",
    projectId: "netflix-clone-ffb60",
    storageBucket: "netflix-clone-ffb60.appspot.com",
    messagingSenderId: "45153746338",
    appId: "1:45153746338:web:e4b924d18e7eb958e246fb",
    measurementId: "G-K5XZ45MCYX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth }
export default db;