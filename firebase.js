console.log("🔥 firebase.js loaded");
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
  apiKey: "AIzaSyDGc7HXLHF0xsMkhJMKPsz3D2HiO_Y3j6c",
  authDomain: "master-bus-gudang.firebaseapp.com",
  projectId: "master-bus-gudang",
  storageBucket: "master-bus-gudang.firebasestorage.app",
  messagingSenderId: "891795449877",
  appId: "1:891795449877:web:f7f9de2ecf440face8c61c"
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