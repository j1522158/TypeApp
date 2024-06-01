// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaiBgWImW4QaXb27bA5xIkXwG9CPS_Cq8",
  authDomain: "type-app-3140b.firebaseapp.com",
  projectId: "type-app-3140b",
  storageBucket: "type-app-3140b.appspot.com",
  messagingSenderId: "70842382550",
  appId: "1:70842382550:web:b9f63844ba2cbfbbd13177"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };