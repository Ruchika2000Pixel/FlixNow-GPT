// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB52oaQz8TGFvAS0ppVT1nVaJndwOIn9pQ",
  authDomain: "flixnow-gpt-7cd07.firebaseapp.com",
  projectId: "flixnow-gpt-7cd07",
  storageBucket: "flixnow-gpt-7cd07.appspot.com",
  messagingSenderId: "600813727318",
  appId: "1:600813727318:web:4376bdb170c91e97d195f7",
  measurementId: "G-D5RWFB203M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 const auth = getAuth();
 export default auth;