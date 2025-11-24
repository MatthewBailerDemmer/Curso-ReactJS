
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA1w8AlMJm1aqawSKQdP3xqgX61MP5iUUs",
  authDomain: "webcarros-76c04.firebaseapp.com",
  projectId: "webcarros-76c04",
  storageBucket: "webcarros-76c04.firebasestorage.app",
  messagingSenderId: "996819366567",
  appId: "1:996819366567:web:78100050594d8cf62e6182"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)


export {db, auth, storage};