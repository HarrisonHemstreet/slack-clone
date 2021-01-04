// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC0T-VJj66_DQ3S46VNFY7ZxK7yYR7_yRw",
    authDomain: "slack-clone-61d5b.firebaseapp.com",
    projectId: "slack-clone-61d5b",
    storageBucket: "slack-clone-61d5b.appspot.com",
    messagingSenderId: "900607720893",
    appId: "1:900607720893:web:03776a6ba3e6b8e9b926d4",
    measurementId: "G-3D2EPMFLMY"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);\
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider

  export {auth, provider};
  export default db;