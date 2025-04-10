
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth" 

const firebaseConfig = {
  apiKey: "AIzaSyCA-7nnSR-T80szwWZ623zkN4fxHEkYMmw",
  authDomain: "eyego-dashboard.firebaseapp.com",
  projectId: "eyego-dashboard",
  storageBucket:"eyego-dashboard.firebasestorage.app",
  messagingSenderId: "895195400701",
  appId:"1:895195400701:web:7aa02a9062ced21087b194",
  measurementId: "G-2JLZ9XRNLG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth ; 