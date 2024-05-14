import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types'; 
import auth from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { GithubAuthProvider } from 'firebase/auth/cordova';
import axios from 'axios';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => { 
    const [user, setUser] = useState();
    const [userEmaill,setUserEmail]=useState();
    const [loading,setLoading]=useState(true);
    const googleProvider= new GoogleAuthProvider();
    const githubProvider=new GithubAuthProvider();
    
   
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const singInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            const userEmail=currentUser?.email || user.email;
            const loggedUser={email:userEmail};
           
            if (currentUser) {
                setUser(currentUser);
                setUserEmail(currentUser.email);
                setLoading(false)

               
                axios.post('http://localhost:5000/jwt',loggedUser,{ withCredentials: true})
                .then(res=>{
                    console.log(res.data);
                })
            } else {
                axios.post('http://localhost:5000/logout', loggedUser,{ withCredentials: true})
                .then(res=>{
                    console.log(res.data);
                })
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
        user,createUser,singInUser,logOut,signOut,signInWithGoogle,githubLogIn,userEmaill,loading
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
