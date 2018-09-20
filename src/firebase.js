//import firebase from 'firebase'
import firebase from 'firebase/app'
import 'firebase/database'

// Initialize Firebase
let config = {
     apiKey: "AIzaSyCJZMBzrbCu5AM3grm0TedydIk5_uYH0-g",
     authDomain: "task-manager-c7249.firebaseapp.com",
     databaseURL: "https://task-manager-c7249.firebaseio.com",
     projectId: "task-manager-c7249",
     storageBucket: "task-manager-c7249.appspot.com",
     messagingSenderId: "341089236338"
};
firebase.initializeApp(config);

export default {
     database: firebase.database()
}