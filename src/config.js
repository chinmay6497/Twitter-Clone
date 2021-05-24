import firebase from "firebase";
import "firebase/auth"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAVKcFNjKZQinZ8gE42DkKmdhh5gviEuj4",
    authDomain: "twitter-clone-sdevat.firebaseapp.com",
    projectId: "twitter-clone-sdevat",
    storageBucket: "twitter-clone-sdevat.appspot.com",
    messagingSenderId: "1059528193211",
    appId: "1:1059528193211:web:8e40c5a4f47f3a4a61e59e",
    measurementId: "G-MKFDG4W13P"
  });

  export default firebaseConfig;