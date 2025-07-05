// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvwM5YuGntTqe4qnHZXe4dP_b1Kx5GCeM",
  authDomain: "react-task-three-d3309.firebaseapp.com",
  projectId: "react-task-three-d3309",
  storageBucket: "react-task-three-d3309.firebasestorage.app",
  messagingSenderId: "632673127049",
  appId: "1:632673127049:web:d0465fa3872f8857ef1458"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export { auth };