import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MainLayOut = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Outlet></Outlet>
          <ToastContainer></ToastContainer>
           <Footer></Footer>
        </div>
    );
};

export default MainLayOut;