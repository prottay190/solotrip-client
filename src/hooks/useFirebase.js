import { useEffect, useState } from "react";
import initializeFirebase from "../Components/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

initializeFirebase();

const useFirebase = () =>{
       const [user, setUser] = useState({});

       const auth = getAuth();
   //register
       const registerUser = (email, password) =>{
           createUserWithEmailAndPassword(auth, email, password)
           .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
       }

       //state change
       useEffect(() =>{
        const unscribed =  onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setUser(user);
              // ...
            } else {
              setUser({})
            }
          });
          return () => unscribed;
       },[])

       //logout
       const logOut = () =>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
       }

       return{
           user,
           registerUser,
           logOut
       }
}

export default useFirebase;