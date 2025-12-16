import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBDpxE3h8owsttZBJuEDIBBnS6LVSX81TY",
    authDomain: "coma-website-bb9d6.firebaseapp.com",
    projectId: "coma-website-bb9d6",
    storageBucket: "coma-website-bb9d6.firebasestorage.app",
    messagingSenderId: "677187216078",
    appId: "1:677187216078:web:9f2ea94dee4b6631b7a69f",
    measurementId: "G-0WXJ7S7YPT"
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
