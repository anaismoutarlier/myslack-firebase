import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import FirebaseContext from "./context";
import useAuth from "./useAuth";

class Firebase {
  constructor(config) {
    this.app = initializeApp(config);
    this.auth = getAuth(this.app);
    this.googleProvider = new GoogleAuthProvider();
  }

  async login() {
    const { auth, googleProvider } = this;
    await signInWithPopup(auth, googleProvider);
  }
}

export default Firebase;
export { FirebaseContext, useAuth }