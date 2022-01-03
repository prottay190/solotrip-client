import { useEffect, useState } from "react";
import initializeFirebase from "../Components/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState('');

  const auth = getAuth();

  //sign in
  const loginUser = (email, password, location, navigate) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || '/';
        navigate(destination)
        setAuthError('');
        // ...
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  }
  //register
  const registerUser = (email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        setAuthError('');
        // ...
      })
      .catch((error) => {
        setAuthError(error.message);
        // ..
      })
      .finally(() => setIsLoading(false));
  }

  //google singIn
  const singInUsingGoogle = (location, navigate) => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then(result => {
        setUser(result.user)
        const destination = location?.state?.from || '/';
        navigate(destination);
        //    console.log(result.user)
      })
      .finally(() => setIsLoading(false));

  }

  //state change
  useEffect(() => {
    const unscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(user);
        // ...
      } else {
        setUser({})
      }
      setIsLoading(false);
    });
    return () => unscribed;
  }, [])

  //logout
  const logOut = () => {
    setIsLoading(true);
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    })
      .finally(() => setIsLoading(false));
  }

  return {
    user,
    isLoading,
    authError,
    singInUsingGoogle,
    registerUser,
    loginUser,
    logOut
  }
}

export default useFirebase;
