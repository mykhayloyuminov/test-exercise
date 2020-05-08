import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { functions } from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDuOV9SRr7hWviFvEZ_cqjD_k5BHCuMs1w",
  authDomain: "test-project-cleveroad.firebaseapp.com",
  databaseURL: "https://test-project-cleveroad.firebaseio.com",
  projectId: "test-project-cleveroad",
  storageBucket: "test-project-cleveroad.appspot.com",
  messagingSenderId: "57300131235",
  appId: "1:57300131235:web:5a2f5b4cfc6ed3059b4e16",
  measurementId: "G-XQD9M7QC3P"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();

    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};
