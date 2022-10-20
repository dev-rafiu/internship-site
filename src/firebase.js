// Initialize Firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxts241nUwhRuqhCOQx6SP_qdOVMCjw_Q",
  authDomain: "auth-developement-f778e.firebaseapp.com",
  projectId: "auth-developement-f778e",
  storageBucket: "auth-developement-f778e.appspot.com",
  messagingSenderId: "177639666888",
  appId: "1:177639666888:web:d7408ddd8610d0e7f961fd",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
