import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { collection, getFirestore, addDoc, getDocs, onSnapshot, deleteDoc, doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyD3RSKTc7Pfhe962tRLeDXRbgVfgMc0pE4",
  authDomain: "edif-2e0b6.firebaseapp.com",
  projectId: "edif-2e0b6",
  storageBucket: "edif-2e0b6.appspot.com",
  messagingSenderId: "934519615565",
  appId: "1:934519615565:web:94fa8dd276edc3c9fb2c04",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()

export const saveTask = (title, description)=> addDoc(collection(db, "tasks"), {title, description})
export const getTasks = ()=> getDocs(collection(db, "tasks"))
export const onGetTasks = (callback) => onSnapshot(collection(db, "tasks"), callback)
export const deleteTask = id => deleteDoc(doc(db, "tasks", id))
export const getTask = id => getDoc(doc(db, "tasks", id))
export const updateTask = (id, actualizarDatos) => updateDoc(doc(db, "tasks", id), actualizarDatos)
export {updateDoc, db, doc}

