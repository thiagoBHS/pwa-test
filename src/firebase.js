//import firebase from 'firebase'
import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
let config = {
     apiKey: "AIzaSyAov4HIi9Zowj-hnxGIxNy5YRDtW-Jfjqw",
     authDomain: "task-menager-v2.firebaseapp.com",
     databaseURL: "https://task-menager-v2.firebaseio.com",
     projectId: "task-menager-v2",
     storageBucket: "task-menager-v2.appspot.com",
     messagingSenderId: "431104085016"
};
firebase.initializeApp(config);

const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true};
firestore.settings(settings);

export default {
     // database: firebase.firestore()
     database: firestore
}


