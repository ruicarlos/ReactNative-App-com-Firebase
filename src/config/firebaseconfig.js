import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


var firebaseConfig = {
  apiKey: "AIzaSyAOHlEYlnrPHxYeGFSPMB1-uNGtB2MpSVE",
  authDomain: "listreac.firebaseapp.com",
  projectId: "listreac",
  storageBucket: "listreac.appspot.com",
  messagingSenderId: "122099405531",
  appId: "1:122099405531:web:188e9c2d7304158cd132fe",
  measurementId: "G-P73JK90SQG"
};

const app = firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();

export default  database

