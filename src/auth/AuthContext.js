import React, { useContext, useEffect, useState } from "react";
import { auth } from "../Firebase";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  updateEmail,
  updateProfile,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthContext = React.createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  console.log(currentUser, "user");
  const [loading, setLoading] = useState(true);
  const googleAuth = new GoogleAuthProvider();
  const facebookAuth = new FacebookAuthProvider();

  const signup = (email, password) => {
    setCurrentUser((prev) => {
      return { ...prev, password: password };
    });
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    setCurrentUser((prev) => {
      return { ...prev, password: password };
    });
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    return signOut(auth);
  };
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email, {
      url: "http://localhost:8000/login",
    });
  };
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleAuth);
  };
  const signInWithFacebook = () => {
    signInWithPopup(auth, facebookAuth);
  };

  const updateUserEmail = (updatedEmail) => {
    updateEmail(auth.currentUser, updatedEmail)
      .then((res) => {
        //
      })
      .catch((e) => {
        toast("Please Login Again With New Email !!");
      });
  };

  const updateUserDisplayName = (updatedName) => {
    updateProfile(auth.currentUser, {
      displayName: updatedName,
    });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    signInWithGoogle,
    signInWithFacebook,
    updateUserEmail,
    updateUserDisplayName,
  };
  return (
    <>
      <AuthContext.Provider value={value}>
        {!loading && children}
      </AuthContext.Provider>
      <ToastContainer />
    </>
  );
};
export default AuthProvider;
