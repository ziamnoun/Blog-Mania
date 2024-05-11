import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types'; 
import auth from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => { 
    const [user, setUser] = useState();
   
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const singInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const authInfo = {
        user,createUser,singInUser
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
