import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types'; 
import auth from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { GithubAuthProvider } from 'firebase/auth/cordova';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => { 
    const [user, setUser] = useState();
    const googleProvider= new GoogleAuthProvider();
    const githubProvider=new GithubAuthProvider();
    
   
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const singInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
           
            if (currentUser) {
                setUser(currentUser);
            } else {
                setUser(null); 
            }
        });

        return () => {
            unSubscribe();
        }
    }, [])

    const logOut=()=>{
        return signOut(auth);
    }

    const signInWithGoogle=()=>{
        return signInWithPopup(auth,googleProvider)
    }
    const githubLogIn=()=>{
        return signInWithPopup(auth,githubProvider)
    }


    const authInfo = {
        user,createUser,singInUser,logOut,signOut,signInWithGoogle,githubLogIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node 
};

export default AuthProvider;
