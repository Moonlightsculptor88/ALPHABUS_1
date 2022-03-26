import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBf-A-VYDcjQ32AE99CvEMZXQRk7q0JVLg",
  authDomain: "codio-dev-4e69b.firebaseapp.com",
  projectId: "codio-dev-4e69b",
  storageBucket: "codio-dev-4e69b.appspot.com",
  messagingSenderId: "546315976473",
  appId: "1:546315976473:web:ccbb05bc5d28c092774f88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
