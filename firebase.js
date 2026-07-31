import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-app.js";

import {
    getFirestore,
    collection,
    doc,
    getDoc,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    setDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "...",
    authDomain: "...",
    projectId: "...",
    storageBucket: "...",
    messagingSenderId: "...",
    appId: "..."
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.db = db;
window.collection = collection;
window.doc = doc;
window.getDoc = getDoc;
window.getDocs = getDocs;
window.addDoc = addDoc;
window.updateDoc = updateDoc;
window.deleteDoc = deleteDoc;
window.setDoc = setDoc;
window.serverTimestamp = serverTimestamp;

console.log("✅ Firebase Connected");

window.dispatchEvent(new Event("firebase-ready"));