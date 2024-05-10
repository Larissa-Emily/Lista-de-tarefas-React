import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDAvH8FKQXXMRn7HBKfbeIZIJTPNUmg-O4",
  authDomain: "listareact-4301c.firebaseapp.com",
  projectId: "listareact-4301c",
  storageBucket: "listareact-4301c.appspot.com",
  messagingSenderId: "221282088526",
  appId: "1:221282088526:web:6ea5a4f45281600b7b751f",
  measurementId: "G-DC5VXT1PVL",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
