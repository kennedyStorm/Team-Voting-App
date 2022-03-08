import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCLUcHKV4I7Zp9w_-eTnoWeFYHlYWBmM1M",
    authDomain: "teamvotingapp-c080d.firebaseapp.com",
    projectId: "teamvotingapp-c080d",
    storageBucket: "teamvotingapp-c080d.appspot.com",
    messagingSenderId: "164379746954",
    appId: "1:164379746954:web:1bde94e4011e3815044373"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();