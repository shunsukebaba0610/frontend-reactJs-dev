// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxmO31Y7XSof6XQ9yAZDc3w2Wf3mCebDY",
  authDomain: "image-uploader-f4c0b.firebaseapp.com",
  projectId: "image-uploader-f4c0b",
  storageBucket: "image-uploader-f4c0b.appspot.com",
  messagingSenderId: "259780104014",
  appId: "1:259780104014:web:29943d28e4ee6741a0181f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;