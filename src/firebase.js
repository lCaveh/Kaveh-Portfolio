import firebase from "firebase";
const config = {
    apiKey: "Your-API-Keys",
    authDomain: "Your-API-Keys",
    databaseURL: "Your-API-Keys",
    projectId: "Your-API-Keys",
    storageBucket: "Your-API-Keys",
    messagingSenderId: "Your-API-Keys",
  };
firebase.initializeApp(config);
export default firebase;

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
