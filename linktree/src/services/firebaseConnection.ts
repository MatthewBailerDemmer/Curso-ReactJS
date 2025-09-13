
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDcSt67hBv9p-fGh_-Cy2NGFnFSH8fMu5U",
  authDomain: "reactlinks-822f6.firebaseapp.com",
  projectId: "reactlinks-822f6",
  storageBucket: "reactlinks-822f6.firebasestorage.app",
  messagingSenderId: "242489289688",
  appId: "1:242489289688:web:7c21edc8cea29eb44a20ad"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db };