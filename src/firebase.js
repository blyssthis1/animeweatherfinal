// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain:process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app



// const firebaseConfig = {
//     apiKey: "AIzaSyD6l2KfaWJYUF0hCa9gSjpAsuqte7SgikA",
//     authDomain: "aweather-efec1.firebaseapp.com",
//     projectId: "aweather-efec1",
//     storageBucket: "aweather-efec1.appspot.com",
//     messagingSenderId: "458526344684",
//     appId: "1:458526344684:web:d4d743f24181ebd2a92cc9"
//   };

//const db = firebase.firestore();