import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCY26rdeoFc0EsP-ia-L3AumgWQjwFUwc",
  authDomain: "e-commerce45095.firebaseapp.com",
  projectId: "e-commerce45095",
  storageBucket: "e-commerce45095.appspot.com",
  messagingSenderId: "392985047457",
  appId: "1:392985047457:web:faf8c00760c66def71dbe0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);