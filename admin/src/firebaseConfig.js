// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfwHs_QrmaDjZG4B4QG_yS5itm8yFhYXw",
  authDomain: "finalimg-ebd6d.firebaseapp.com",
  projectId: "finalimg-ebd6d",
  storageBucket: "finalimg-ebd6d.appspot.com",
  messagingSenderId: "297188776512",
  appId: "1:297188776512:web:9f73f76e91492b0af61da5",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;
