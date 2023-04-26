import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_SENDERID,
//   appId: import.meta.env.VITE_APIID,
// };

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkWUUJFkOLasm-wnlgJesaG0Z0GsP6Yis",
  authDomain: "expense-tracker-280c3.firebaseapp.com",
  projectId: "expense-tracker-280c3",
  storageBucket: "expense-tracker-280c3.appspot.com",
  messagingSenderId: "525599070111",
  appId: "1:525599070111:web:6d624f9bcec1311de04faa",
};

// Initialize Firebase

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
