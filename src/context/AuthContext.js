import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const UserContext = React.createContext();

export const UserAuth = () => {
  return useContext(UserContext);
};

// main
function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={{ signup, user, logout, signin }}>
      {children}
    </UserContext.Provider>
  );
}

export default AuthContextProvider;
