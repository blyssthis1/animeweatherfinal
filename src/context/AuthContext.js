import React from "react";
import { useContext, createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut, onAuthStateChanged } from "firebase/auth";
import {auth} from '../firebase'
// import { getFirestore, getDocs } from '@firebase/firestore'


const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
        const [user, setUser] = useState({});

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
    };

    const logOut = () => {
        signOut(auth)
    }

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log('User', currentUser)
        })
        return () => {
            unsubscribe();
        }

    }, []);

    return (
        <AuthContext.Provider value ={{ googleSignIn }}>
             {children}
        </AuthContext.Provider>
    )
}
 

export const UserAuth = () => {
    return useContext(AuthContext)
}





//const provider = new GoogleAuthProvider();

// function SignIn(){
//     const signInWithGoogle = () => {
//         const provider = new firebase.auth.GoogleAuthProvider();
//         auth.signInWithPopup(provider);
    
// };

// return (
//     <>
//     <button onClick={signInWithGoogle}> Sign In with Google</button>
//     </>
// );

// }