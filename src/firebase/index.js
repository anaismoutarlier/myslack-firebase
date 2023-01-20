import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {
  getFirestore,
  addDoc,
  setDoc,
  collection,
  doc,
} from "firebase/firestore";

import FirebaseContext from "./context";
import useAuth from "./useAuth";

/**
 * Class that handles connections with a Firebase setup
 * @param {Object} config Configuration information provided by Firebase
 */
class Firebase {
  constructor(config) {
    this.app = initializeApp(config);
    this.auth = getAuth(this.app);
    this.db = getFirestore(this.app);
    this.googleProvider = new GoogleAuthProvider();
  }

  async login() {
    const { auth, googleProvider } = this;
    await signInWithPopup(auth, googleProvider);
  }

  async saveUser(uid, user) {
    const { db } = this;

    const userRef = doc(db, "users", uid);

    setDoc(userRef, user, { merge: true });
  }
}

export default Firebase;
export { FirebaseContext, useAuth };
