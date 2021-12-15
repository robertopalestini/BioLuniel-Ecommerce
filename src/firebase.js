import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDiOCK_SU3klpMXy2eYryrPi588xdg_D0Y",
  authDomain: "bioluniel-f5acb.firebaseapp.com",
  projectId: "bioluniel-f5acb",
  storageBucket: "bioluniel-f5acb.appspot.com",
  messagingSenderId: "36511417268",
  appId: "1:36511417268:web:8304f9de77cf9a197e28e1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
export default firebase;