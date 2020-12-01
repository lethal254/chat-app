import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDqWjqubi62nK5TNPVM48Edr_lesKGfEp4",
  authDomain: "chat-app-c2e30.firebaseapp.com",
  databaseURL: "https://chat-app-c2e30.firebaseio.com",
  projectId: "chat-app-c2e30",
  storageBucket: "chat-app-c2e30.appspot.com",
  messagingSenderId: "812013753363",
  appId: "1:812013753363:web:b008d9f34a97ff3ded5be6",
  measurementId: "G-5WSC242QNZ",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const database = firebase.database();
const googleProvider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth
    .signInWithPopup(googleProvider)
    .then((res) => {
      console.log(res.user);
    })
    .catch((error) => {
      console.log(error.message);
    });
};
