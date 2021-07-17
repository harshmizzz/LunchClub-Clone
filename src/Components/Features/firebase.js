import firebase from "firebase";
import 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyCDt4jmJalKmMzZsNABdp3Yr4lft5jnS3I",
  authDomain: "lunchclub-clone.firebaseapp.com",
  projectId: "lunchclub-clone",
  storageBucket: "lunchclub-clone.appspot.com",
  messagingSenderId: "692610034733",
  appId: "1:692610034733:web:05a58c2742f9dd64ce1ca4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const storage = firebase.storage()
export { auth , storage};
