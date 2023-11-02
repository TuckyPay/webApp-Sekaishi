// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAu3g3RJ4CmRgPeX58aXnFmBWrzQCxBahM",
  authDomain: "quiz-sekaishi.firebaseapp.com",
  projectId: "quiz-sekaishi",
  storageBucket: "quiz-sekaishi.appspot.com",
  messagingSenderId: "653806288084",
  appId: "1:653806288084:web:c1558033ec089b7d140f41",
  measurementId: "G-90TQ6GVBK1"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);