import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBPQSYKIXGOSv-uuTlnYyRkFD_Sz20chZM",
  authDomain: "facebook-clone-17a10.firebaseapp.com",
  projectId: "facebook-clone-17a10",
  storageBucket: "facebook-clone-17a10.appspot.com",
  messagingSenderId: "151310626726",
  appId: "1:151310626726:web:48c0a5ac1fa1b4b529e967",
  measurementId: "G-D6Z8XPPNJ1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
