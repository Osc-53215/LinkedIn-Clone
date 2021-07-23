import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDkFpNhESFDRbmngC-_fHuk1HLga1628H4",
    authDomain: "linkedin-clone-ecc0d.firebaseapp.com",
    projectId: "linkedin-clone-ecc0d",
    storageBucket: "linkedin-clone-ecc0d.appspot.com",
    messagingSenderId: "85314902112",
    appId: "1:85314902112:web:ad8051d23466243a7a8b05"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};