import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB-qQ1XcXNoPsjJUZ9bCobey5hMpnK9Kxg",
  authDomain: "grupo-15601-2890b.firebaseapp.com",
  projectId: "grupo-15601-2890b",
  storageBucket: "grupo-15601-2890b.appspot.com",
  messagingSenderId: "352325308345",
  appId: "1:352325308345:web:1d25f34c5e464c16f33068"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
