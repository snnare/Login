import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import Constants from 'expo-constants';

const firebaseConfig = {
  apiKey: "AIzaSyD5qH0TuUw1PaxWLo9XS7cPMIXDU3TnR0A",

  authDomain: "react-native-firebase-74be6.firebaseapp.com",

  projectId: "react-native-firebase-74be6",

  storageBucket: "react-native-firebase-74be6.appspot.com",

  messagingSenderId: "189995170829",

  appId: "1:189995170829:web:23254ce9a77c970a0a2944"

};

// Inicializar la aplicación de Firebase
const app = initializeApp(firebaseConfig);

// Obtener la instancia de Firestore
export const database = getFirestore(app);
