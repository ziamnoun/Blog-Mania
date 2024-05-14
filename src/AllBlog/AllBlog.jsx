

// import React, { useContext, useState } from 'react';
// import { Link, useLoaderData } from 'react-router-dom';
// import { AuthContext } from '../Provider/AuthProvider';

// const AllBlog = () => {
//     const blogData = useLoaderData();
//     const [searchTerm, setSearchTerm] = useState('');
//     const [selectedCategory, setSelectedCategory] = useState('');

//     const { user } = useContext(AuthContext);

//     const filteredBlogs = blogData.filter(blog => {
//         return (
//             blog.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
//             (selectedCategory === '' || blog.category === selectedCategory)
//         );
//     });

//     const handleSearchChange = (e) => {
//         setSearchTerm(e.target.value);
//     };

//     const handleCategoryChange = (e) => {
//         setSelectedCategory(e.target.value);
//     };

//     const isOwner = (blog) => {
//         return user && user.email.toLowerCase() === blog.userEmail.toLowerCase();
//     };



//     return (
//         <div className='grid grid-cols-1 gap-5 md:w-[80%] m-auto mt-10'>
//             <div className="flex items-center mb-4">
//                 <p className='text-3xl font-extrabold text-red-600'>Here are all the blogs:</p>
//                 <input
//                     type="text"
//                     placeholder="Search by Title"
//                     value={searchTerm}
//                     onChange={handleSearchChange}
//                     className="ml-auto border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
//                 />
//                 <select
//                     value={selectedCategory}
//                     onChange={handleCategoryChange}
//                     className="ml-4 border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
//                 >
//                     <option value="">All Categories</option>
//                     <option value="">Select Category</option>
//                     <option value="Technology">Technology</option>
//                     <option value="Travel">Travel</option>
//                     <option value="Food">Food</option>
//                     <option value="Programming">Programming</option>
//                     <option value="Nature">Nature</option>
//                     <option value="Health">Health</option>
//                 </select>
//             </div>
//             {filteredBlogs.map((blog, index) => (
//                 <div key={index} className="card card-side text-white shadow-xl bg-black">
//                     <figure><img src={blog.imageURL} alt="Blog Image"/></figure>
//                     <div className="card-body">
//                         <h2 className="card-title text-red-600">{blog.title}</h2>
//                         <p>{blog.shortDescription}</p>
//                         <div className="flex justify-between items-center mt-4">
//                             <div>
//                                 <p className="text-sm ">Category: {blog.category}</p>
//                                 <p className="text-sm ">Date: {blog.date}</p>
//                             </div>
//                         </div>
//                         <div className="card-actions justify-end">
//                             <Link to={`/ViewDetails/${blog._id}`}><button className="btn btn-primary mr-2 bg-red-600">View Details</button></Link>
//                             {isOwner(blog) && <Link to={`/UpdateBlog/${blog._id}`}><button className="btn btn-danger border-red-600">Update</button></Link>}
//                             <button className="btn btn-primary border-red-600 bg-white text-red-600">Wish List</button>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default AllBlog;

import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';

const AllBlog = () => {
    const blogData = useLoaderData();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
   
   

    const { user,userEmaill } = useContext(AuthContext);
    console.log(userEmaill)
    // const wishUser=user.email
    
    
   

    const filteredBlogs = blogData.filter(blog => {
        return (
            blog.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (selectedCategory === '' || blog.category === selectedCategory)
        );
    });

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const isOwner = (blog) => {
        return user && user.email.toLowerCase() === blog.userEmail.toLowerCase();
    };

    const addToWishlist = async (blog) => {
       
        
        const wishBlog={blog,userEmaill}
        console.log(wishBlog)
        try {
            const response = await fetch('https://blog-site-server-ezpys04xi-ziams-projects-ea91788d.vercel.app/Wish', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(wishBlog),
            });

            if (!response.ok) {
                throw new Error('Failed to add blog to wishlist');
            }
            toast.success('Blog added to wishlist successfully!');

        } catch (error) {
            console.error('Error adding blog to wishlist:', error);
        }
       
        
    };

    return (
        <div className='grid grid-cols-1 gap-5 md:w-[80%] m-auto mt-10'>
            <div className="sm:grid md:flex items-center mb-4">
                <p className='text-3xl font-extrabold text-red-600'>Here are all the blogs:</p>
                <input
                    type="text"
                    placeholder="Search by Title"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="ml-auto border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <select
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    className="ml-4 border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                    <option value="">All Categories</option>
                    <option value="">Select Category</option>
                    <option value="Technology">Technology</option>
                    <option value="Travel">Travel</option>
                    <option value="Food">Food</option>
                    <option value="Programming">Programming</option>
                    <option value="Nature">Nature</option>
                    <option value="Health">Health</option>
                </select>
            </div>
            {filteredBlogs.map((blog, index) => (
                <div key={index} className="card card-side text-white shadow-xl bg-black">
                    <figure><img src={blog.imageURL} alt="Blog Image"/></figure>
                    <div className="card-body">
                        <h2 className="card-title text-red-600">{blog.title}</h2>
                        <p>{blog.shortDescription}</p>
                        <div className="flex justify-between items-center mt-4">
                            <div>
                                <p className="text-sm ">Category: {blog.category}</p>
                                <p className="text-sm ">Date: {blog.date}</p>
                            </div>
                        </div>
                        <div className="card-actions justify-end">
                            <Link to={`/ViewDetails/${blog._id}`}><button className="btn btn-primary mr-2 bg-red-600">View Details</button></Link>
                            {isOwner(blog) && <Link to={`/UpdateBlog/${blog._id}`}><button className="btn btn-danger border-red-600">Update</button></Link>}
                            <button onClick={() => addToWishlist(blog)} className="btn btn-primary border-red-600 bg-white text-red-600">Wish List</button>
                        </div>
                    </div>
                </div>
            ))}
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AllBlog;
