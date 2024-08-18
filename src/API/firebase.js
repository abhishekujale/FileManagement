import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
import "firebase/compat/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCN3pQyOFshrwWmCe8YSPPUUm2krx6F9jg",
  authDomain: "file-management-system-a1e3d.firebaseapp.com",
  projectId: "file-management-system-a1e3d",
  storageBucket: "file-management-system-a1e3d.appspot.com",
  messagingSenderId: "599451159598",
  appId: "1:599451159598:web:8df2a23a424427ae58e3bf",
  measurementId: "G-Q768XGS4MB"
};

const fire = firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
export const database = {
  users: firestore.collection('users'),
  docs: firestore.collection('docs'),
  files: firestore.collection('files'),
  date: firebase.firestore.FieldValue.serverTimestamp(),
};

export const storage = firebase.storage();

export const auth = firebase.auth();
