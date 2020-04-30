import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDdzy7S-Xk3AlQ5WlZ_35nGCbohtt1mAW8",
    authDomain: "crwn-db-977af.firebaseapp.com",
    databaseURL: "https://crwn-db-977af.firebaseio.com",
    projectId: "crwn-db-977af",
    storageBucket: "crwn-db-977af.appspot.com",
    messagingSenderId: "950866835629",
    appId: "1:950866835629:web:dcec5532d5ee4d3ab0ee24",
    measurementId: "G-BB6JK6NB0C"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase