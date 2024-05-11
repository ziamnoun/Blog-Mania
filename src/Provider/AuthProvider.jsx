import React, { createContext } from 'react';
import PropTypes from 'prop-types'; 

const AuthProvider = ({children}) => {
    const AuthContext=createContext(null);
    const authInfo={
        name:'nodi'
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.PropTypes={
    childre:PropTypes.node
}