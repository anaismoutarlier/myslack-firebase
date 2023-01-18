import { useEffect, useState } from 'react'
import { useContext } from "react";
import FirebaseContext from "./context";

export default function useAuth() {
  const [user, setUser] = useState(null);
  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged(data => {
      setUser(data);
    });

    return () => unsubscribe();
  }, [firebase.auth]);

  return user;
}
