import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxmO31Y7XSof6XQ9yAZDc3w2Wf3mCebDY",
  authDomain: "image-uploader-f4c0b.firebaseapp.com",
  projectId: "image-uploader-f4c0b",
  storageBucket: "image-uploader-f4c0b.appspot.com",
  messagingSenderId: "259780104014",
  appId: "1:259780104014:web:29943d28e4ee6741a0181f"
};

const app = initializeApp(firebaseConfig, 'ImageUploader');

const storage = getStorage(app);

export default storage;