import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALdKkhi0Z1swF0VwHJfnSS_P4_gYh3DNo",
  authDomain: "line-clone-react.firebaseapp.com",
  projectId: "line-clone-react",
  storageBucket: "line-clone-react.appspot.com",
  messagingSenderId: "49563665549",
  appId: "1:49563665549:web:e0f54b5f5d053c84d84ec4"
};

const app = initializeApp(firebaseConfig, 'Line');
const db = getFirestore(app);
const auth = getAuth(app);

// Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig, 'Line');
// const db = app.firestore();
// const auth = app.auth();
export { auth, db };