import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from '../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const LogIn = () => {
  const {singInUser,signInWithGoogle,githubLogIn}=useContext(AuthContext);


  const handleGithubLogIn=()=>{
    githubLogIn()
    .then(result=>{
      toast.success("Successfully Logged In With Github")
      
    })
    .catch(error=>{
      toast.error("Failed to Logged In ")
     
    })
  }


  const handleGoogleLogIn=()=>{
    signInWithGoogle()
    .then(result=>{
      toast.success("Successfully Logged In With Google")
      
    })
    .catch(error=>{
      toast.error("Failed to Logged In ")
     
    })
  }


  const handleLogIn=e=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    singInUser(email,password)
    .then(result=>{
      console.log(result.user);
      toast.success("Successfully Logged In ")
     
    })
    .catch(error=>{
      console.log(error)
      toast.error("Failed to Logged In ")
     
    })


  }




    return (
        <div className="min-h-screen flex items-center justify-center ">
        <div className="max-w-md w-full px-6 py-8 bg-gray-900 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-white mb-8">Log In</h2>
          <form onSubmit={handleLogIn}>
          <div className="mb-4">
              <label htmlFor="username" className="block text-white mb-2">Username</label>
              <input type="text" id="username" name="username" className="w-full px-3 py-2 leading-tight text-gray-700 bg-gray-200 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-white mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 leading-tight text-gray-700 bg-gray-200 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-white mb-2">Password</label>
              <input type="password" id="password" name="password" className="w-full px-3 py-2 leading-tight text-gray-700 bg-gray-200 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
            </div>
            
            <div className="mb-6">
              <button type="submit" className="w-full px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:bg-red-600">Log In</button>
            </div>
            
          </form>
          <div className="flex items-center justify-between">
              <button onClick={handleGoogleLogIn} type="button" className="px-4 py-2 btn btn-warning rounded hover:bg-red-600 focus:outline-none focus:bg-red-600"><FaGoogle />Login with Google</button>
              <button onClick={handleGithubLogIn} type="button" className="px-4 py-2 text-white btn btn-active btn-neutral hover:bg-red-600 focus:outline-none focus:bg-red-600"><FaGithub />Login with GitHub</button>
            </div>
          <p className="text-center text-white mt-2">
            Don't have an account? <NavLink to="/Register" className="underline">Register Now</NavLink>
          </p>
          
        </div>
        
      
      </div>
    );
};

export default LogIn;