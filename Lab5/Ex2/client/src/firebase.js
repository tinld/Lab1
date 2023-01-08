import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/storage'
import 'firebase/compat/database'
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDFDhObWf66BbzszAocwClWILTPCxA8IVo",
  authDomain: "hazel-phoenix-363106.firebaseapp.com",
  projectId: "hazel-phoenix-363106",
  storageBucket: "hazel-phoenix-363106.appspot.com",
  messagingSenderId: "990999724387",
  appId: "1:990999724387:web:9f37ce321d7357f0685356",
  measurementId: "G-MVVY96Q2CR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export {auth, provider}
export default db