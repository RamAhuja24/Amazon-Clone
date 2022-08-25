import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA-l-h1EKo5-J3G4QH87N705wt2d8P9HxM",
  authDomain: "challenge-9d3ae.firebaseapp.com",
  projectId: "challenge-9d3ae",
  storageBucket: "challenge-9d3ae.appspot.com",
  messagingSenderId: "641343703327",
  appId: "1:641343703327:web:4c92fea8e97dae6c32482a",
  measurementId: "G-KV7R8KBJYZ"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };