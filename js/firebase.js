// firebase.js offline 
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";

import {
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager,

  collection,
  addDoc,
  getDocs,
  setDoc,
  updateDoc,
  orderBy,
  deleteDoc,
  doc,
  getDoc,
  query,
  where,
  serverTimestamp,
  Timestamp,
  runTransaction,
  writeBatch,
  increment,
  arrayUnion,
  limit

} from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBk9p9BkxlEFqcICm5roPxHRo7S7LM6oW4",
    authDomain: "buzz-shop-db.firebaseapp.com",
    projectId: "buzz-shop-db",
    storageBucket: "buzz-shop-db.firebasestorage.app",
    messagingSenderId: "272341234750",
    appId: "1:272341234750:web:facaf89d31f1535deb0d6f",
    measurementId: "G-WJNEFCJDSZ"
  };

const app = initializeApp(firebaseConfig);

const db = initializeFirestore(app, {
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager()
  })
});

const enableIndexedDbPersistence = async () => true;

export {
  db,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
  setDoc,
  query,
  where,
  serverTimestamp,
  Timestamp,
  runTransaction,
  limit,
  orderBy,
  writeBatch,
  increment,
  arrayUnion,
  enableIndexedDbPersistence
};
