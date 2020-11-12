import firebase from 'firebase'
import 'firebase/firestore'

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBj8JayXX-ZWRIkN_qUS5Q2d13M42I5doQ",
    authDomain: "parcial-2-df4f4.firebaseapp.com",
    databaseURL: "https://parcial-2-df4f4.firebaseio.com",
    projectId: "parcial-2-df4f4",
    storageBucket: "parcial-2-df4f4.appspot.com",
    messagingSenderId: "448950769347",
    appId: "1:448950769347:web:1efa53a259e219b6f1f476"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore();