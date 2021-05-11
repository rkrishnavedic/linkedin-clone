import firebase from 'firebase';
import {REACT_APP_FIREBASE_API_ID, REACT_APP_FIREBASE_API_KEY} from '../constants';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: REACT_APP_FIREBASE_API_KEY,
    authDomain: "linkedin-clone-930d7.firebaseapp.com",
    projectId: "linkedin-clone-930d7",
    storageBucket: "linkedin-clone-930d7.appspot.com",
    messagingSenderId: "269774521914",
    appId: REACT_APP_FIREBASE_API_ID
  };
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export {auth, db, timestamp};