import React from 'react';


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: "codetribetraining.firebaseapp.com",
    projectId: "codetribetraining",
    storageBucket: "codetribetraining.appspot.com",
    messagingSenderId: "485039811916",
    appId: "1:485039811916:web:c6f45860a20626c2e4b3e9",
    measurementId: process.env.REACT_APP_MEASUREMENTID
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();


export default Firebase;