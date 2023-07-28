import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD4wHEHU7-tQzIfwk5JQXAyQVpCahbw7gk",
  authDomain: "full-stack-quora-clone.firebaseapp.com",
  projectId: "full-stack-quora-clone",
  storageBucket: "full-stack-quora-clone.appspot.com",
  messagingSenderId: "286639009969",
  appId: "1:286639009969:web:9193bc6c306f77fc73f290",
  measurementId: "G-TN6WF04M7E",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
