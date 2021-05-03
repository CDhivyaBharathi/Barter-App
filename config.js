import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyCJ60wgKSDRT9mQlSdqxWCAh7l6j8UQnhA",
    authDomain: "barter-389c9.firebaseapp.com",
    projectId: "barter-389c9",
    storageBucket: "barter-389c9.appspot.com",
    messagingSenderId: "214866704423",
    appId: "1:214866704423:web:560f61d67963f8493b3602"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

export default firebase.firestore();
