import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const links=<>
    <li><NavLink to='/' className={({isActive})=> isActive?  'border-solid border-2 border-black   px-4 py-2 rounded-md transition-colors duration-300 ease-in-out hover:bg-red-600 hover:text-white' :' border-2 '}>Home</NavLink></li>
    <li><NavLink to='/AllBlog' className={({isActive})=> isActive? 'border-solid border-2 border-black   px-4 py-2 rounded-md transition-colors duration-300 ease-in-out hover:bg-red-600 hover:text-white' :' border-2 '}>All blogs</NavLink></li>
    <li><NavLink to='/FeaturedBlogs' className={({isActive})=> isActive?  'border-solid border-2 border-black   px-4 py-2 rounded-md transition-colors duration-300 ease-in-out hover:bg-red-600 hover:text-white' :' border-2'}>Featured Blogs</NavLink></li>
    <li><NavLink to='/AddBlog' className={({isActive})=> isActive?  'border-solid border-2 border-black   px-4 py-2 rounded-md transition-colors duration-300 ease-in-out hover:bg-red-600 hover:text-white' :' border-2 '}>Add Blogs</NavLink></li>
    <li><NavLink to='/WishList' className={({isActive})=> isActive?  'border-solid border-2 border-black   px-4 py-2 rounded-md transition-colors duration-300 ease-in-out hover:bg-red-600 hover:text-white' :' border-2'}>Wish list</NavLink></li>
   
   </>





    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[3] p-2 shadow bg-base-100 rounded-box w-52 gap-3">
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Blog <span className='text-red-600'>Mania</span></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3">
          
          {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    );
};

export default Navbar;