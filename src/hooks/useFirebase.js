import { useEffect, useState } from "react";
import initializeFirebase from "../Components/Login/Firebase/firebase.init";
import {
  getAuth,
  updateProfile,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
initializeFirebase();

const useFirebase = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(false);
  const auth = getAuth();

  //sign in
  const loginUser = (email, password, location) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        navigate(destination);
        setAuthError("");
        // ...
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  //register
  const registerUser = (email, password, name) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateProfile(auth.currentUser, {
          displayName: name,
        }).then(() => {});
        setUser(userCredential.user);
        saveUserToDB(name, email);
        navigate("/");
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // observe the user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setAdminLoading(true);
        fetch(`http://localhost:5000/users/${user?.email}`)
          .then((res) => res.json())
          .then((data) => setAdmin(data.admin))
          .finally(() => setAdminLoading(false));
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unSubscribe;
  }, [auth]);
  //logout
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .catch((error) => {})
      .finally(() => setIsLoading(false));
  };
  const saveUserToDB = (name, email) => {
    const user = { name, email };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return {
    user,
    isLoading,
    authError,
    registerUser,
    loginUser,
    logOut,
    admin,
    adminLoading,
  };
};

export default useFirebase;
