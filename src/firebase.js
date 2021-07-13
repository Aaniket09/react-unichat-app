import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "unichat-8b87c.firebaseapp.com",
    projectId: "unichat-8b87c",
    storageBucket: "unichat-8b87c.appspot.com",
    messagingSenderId: "228070623477",
    appId: process.env.REACT_APP_FIREBASE_APP_ID
  }).auth();