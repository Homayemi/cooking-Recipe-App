import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD3irb0omuyz0LHsrvZUf_5ymOh4kqnwTs",
    authDomain: "oma-cooking-ninja.firebaseapp.com",
    projectId: "oma-cooking-ninja",
    storageBucket: "oma-cooking-ninja.appspot.com",
    messagingSenderId: "219773448230",
    appId: "1:219773448230:web:85cea5eae9ab4b8db2b6e7"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)

  // init services
  const projectFirestore = firebase.firestore()

  export { projectFirestore }