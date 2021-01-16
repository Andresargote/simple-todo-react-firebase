import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCH5XkS6-lfKdMZyIVfPQiUKfrICtoPRhA",
    authDomain: "todo-app-version-funcional.firebaseapp.com",
    projectId: "todo-app-version-funcional",
    storageBucket: "todo-app-version-funcional.appspot.com",
    messagingSenderId: "440264051155",
    appId: "1:440264051155:web:d60955122a1eda113fc726"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db, 
    googleAuthProvider,
    firebase
}
