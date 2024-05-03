import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDEgu54KYEkCF7J-wL3wA6WNhQlksj3CUM",
  authDomain: "g50app.firebaseapp.com",
  projectId: "g50app",
  storageBucket: "g50app.appspot.com",
  messagingSenderId: "739242173362",
  appId: "1:739242173362:web:c3b38656210ea613dafaab"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
