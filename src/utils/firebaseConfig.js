import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: "portfolio-contact-a2184.firebaseapp.com",
  databaseURL: "https://portfolio-contact-a2184.firebaseio.com",
  projectId: "portfolio-contact-a2184",
  storageBucket: "portfolio-contact-a2184.appspot.com",
  messagingSenderId: "350415826546",
  appId: "1:350415826546:web:1e3a1910ee01adb7ff9ceb",
  measurementId: "G-80WZZ5T7PR",
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;
