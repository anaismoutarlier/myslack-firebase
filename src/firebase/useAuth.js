import { useEffect, useState } from 'react'
import { useContext } from "react";
import FirebaseContext from "./context";

export default function useAuth() {
  const [user, setUser] = useState(null);
  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged(data => {
      if (data) {
        const newUser = {
          // email: data.email,
          // displayName: data.displayName,
          // photoURL: data.photoURL,
          // lastLogged: new Date(),
          online: true
        }
        firebase.saveUser(data.uid, newUser);
      } else {
        firebase.saveUser(user.uid, { online: false });
      }
      setUser(data);
    });

    return () => unsubscribe();
  }, [firebase.auth]);

  return user;
}
