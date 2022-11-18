import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBRUY-sZK41TwM-UC3-7Wq7WuuytIDQDj8",
  authDomain: "chat-3cf38.firebaseapp.com",
  projectId: "chat-3cf38",
  storageBucket: "chat-3cf38.appspot.com",
  messagingSenderId: "679615483600",
  appId: "1:679615483600:web:fae4bad3796a056c4458d5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();