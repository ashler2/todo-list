import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyA9DBHE7bzVKSYMJiJjr2bOlQwYl7GXclQ",
  authDomain: "todolist-e8406.firebaseapp.com",
  databaseURL: "https://todolist-e8406.firebaseio.com",
  projectId: "todolist-e8406",
  storageBucket: "todolist-e8406.appspot.com",
  messagingSenderId: "311520251999",
  appId: "1:311520251999:web:ccbce43f567d1a91"
});

export { firebaseConfig as firebase };
