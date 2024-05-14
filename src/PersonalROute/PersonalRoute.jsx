import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PersonalRoute = ({children}) => {
   
        const {user}=useContext(AuthContext);
        // if(loading){
        //     return <span className="loading loading-bars loading-lg"></span>
        //   }
        if(user){
            return children;
        }
        return <Navigate to='/LogIn'></Navigate>
   
};

export default PersonalRoute;