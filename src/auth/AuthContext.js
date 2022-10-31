import React, { useContext, useEffect, useState } from "react";
import { auth } from "../Firebase";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  signInWithRedirect,
  GoogleAuthProvider,
  FacebookAuthProvider,
  updateEmail,
  updateProfile,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

const AuthContext = React.createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const googleAuth = new GoogleAuthProvider();
  const facebookAuth = new FacebookAuthProvider();

  const signup = async (email, password) => {
    setCurrentUser((prev) => {
      return { ...prev, password: password };
    });
    return createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        if (result.credential) {
          console.log(result.credential);
          router.push("/");
        }
      })
      .catch((err) => console.log(err));
  };
  const login = async (email, password) => {
    setCurrentUser((prev) => {
      return { ...prev, password: password };
    });
    return signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        if (result.credential) {
          console.log(result.credential);
          router.push("/");
        }
      })
      .catch((err) => console.log(err));
  };

  const logout = () => {
    return signOut(auth);
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email, {
      url: "http://localhost:8000/Login",
    });
  };

  const signInWithGoogle = () => {
    signInWithRedirect(auth, googleAuth)
      .then((result) => {
        if (result.credential) {
          console.log(result.credential);
          router.push("/");
        }
      })
      .catch((err) => console.log(err));
  };

  const signInWithFacebook = () => {
    signInWithRedirect(auth, facebookAuth)
      .then((result) => {
        if (result.credential) {
          console.log(result.credential);
          router.push("/");
        }
      })
      .catch((err) => console.log(err));
  };

  const updateUserEmail = (updatedEmail) => {
    updateEmail(auth.currentUser, updatedEmail)
      .then((res) => {})
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
