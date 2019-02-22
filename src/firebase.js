import firebase from "firebase";
const config = {
  apiKey: "AIzaSyDv4y_sfAtpD0HokbO1SQURfJ0jZsltd60",
  authDomain: "react-twitter-f9154.firebaseapp.com",
  databaseURL: "https://react-twitter-f9154.firebaseio.com",
  projectId: "react-twitter-f9154",
  storageBucket: "react-twitter-f9154.appspot.com",
  messagingSenderId: "402672401303"
};
firebase.initializeApp(config);
export default firebase;

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
