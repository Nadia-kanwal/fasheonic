import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyBFkvpYy4agLsGZ5VsfWfgmLjffIFU2-QA",
  authDomain: "myfashi-copy.firebaseapp.com",
  databaseURL: "https://myfashi-copy.firebaseio.com",
  projectId: "myfashi-copy",
  storageBucket: "myfashi-copy.appspot.com",
  messagingSenderId: "612880718844",
  appId: "1:612880718844:web:0c7b088ac52821b9f83079"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
