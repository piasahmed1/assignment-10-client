// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKzT83eNgQUJrfrp2t-pts7PGadZdPbew",
  authDomain: "assignment-10-53abb.firebaseapp.com",
  projectId: "assignment-10-53abb",
  storageBucket: "assignment-10-53abb.appspot.com",
  messagingSenderId: "979909373997",
  appId: "1:979909373997:web:9f0a5921a546a63d0a88a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;