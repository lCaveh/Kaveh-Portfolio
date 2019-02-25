import firebase from "firebase";
const config = {
  apiKey: "AIzaSyA5qt-9t8JqBuaNq8K2t39yLur_2u7u84I",
  authDomain: "portfolio-cc7db.firebaseapp.com",
  databaseURL: "https://portfolio-cc7db.firebaseio.com",
  projectId: "portfolio-cc7db",
  storageBucket: "portfolio-cc7db.appspot.com",
  messagingSenderId: "1054182068344"
};
firebase.initializeApp(config);
export default firebase;

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
