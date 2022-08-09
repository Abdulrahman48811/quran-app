// Import the functions you need from the SDKs you need
// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjv_9tEDIy5gCGA6WZiGWL1MK2AQg4RYs",
  authDomain: "quran-app-98597.firebaseapp.com",
  projectId: "quran-app-98597",
  storageBucket: "quran-app-98597.appspot.com",
  messagingSenderId: "562789921034",
  appId: "1:562789921034:web:1c6be7dc437e543a578af3"
};

// Initialize Firebase

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };


// let app;
// if (firebase.apps.length === 0) {
//     app = firebase.initializeApp(firebaseConfig);
// } else {
//     app = firebase.app()
// }

// const auth = firebase.auth()

// export { auth };