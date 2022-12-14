// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirebase, getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDX7wGpC0dG3dIG2r9m1ww8t-B5shBCIjI",
  authDomain: "firstblogproject-3122b.firebaseapp.com",
  projectId: "firstblogproject-3122b",
  storageBucket: "firstblogproject-3122b.appspot.com",
  messagingSenderId: "500318977488",
  appId: "1:500318977488:web:cf1e8cd39e2771c4410dd5",
  measurementId: "G-4D4NJHG7SR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app); //uygulamamamızı Firestore fonksiyonunun içine geçirecek şekilde eşitleriz.
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();