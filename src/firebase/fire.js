import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDVJGX2OhEVuce_TGhTaw5My50N_SQaXww",
    authDomain: "auth-fcc0e.firebaseapp.com",
    projectId: "auth-fcc0e",
    storageBucket: "auth-fcc0e.appspot.com",
    messagingSenderId: "1094385063884",
    appId: "1:1094385063884:web:197d23dfacdd5aa76a2f69"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;