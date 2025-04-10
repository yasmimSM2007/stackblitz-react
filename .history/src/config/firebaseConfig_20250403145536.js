import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";  // Importando getAnalytics

const firebaseConfig = {
  apiKey: "AIzaSyDrjBbe-zhQGSaw6PXa0L0-4uVrwatgl0w",
  authDomain: "ptac-trab1.firebaseapp.com",
  projectId: "ptac-trab1",
  storageBucket: "ptac-trab1.firebasestorage.app",
  messagingSenderId: "736146771918",
  appId: "1:736146771918:web:3d5c2882eda36428ef259f",
  measurementId: "G-KVHPMP0HNB"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);  // Adicionando o Analytics

export { auth };
