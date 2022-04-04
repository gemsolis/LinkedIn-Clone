import firebase from 'firebase/app';
import  'firebase/storage';
import  'firebase/auth'
import  'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAu1YHPsZ_XFx8q7inFr9yukNRQi6CU9Wg",
    authDomain: "linkedin-clone-96766.firebaseapp.com",
    projectId: "linkedin-clone-96766",
    storageBucket: "linkedin-clone-96766.appspot.com",
    messagingSenderId: "792436521914",
    appId: "1:792436521914:web:467c04ce1cb80534ac7b83",
    measurementId: "G-0ESRNEJKPW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

 export const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth, provider, storage};
  export default db;