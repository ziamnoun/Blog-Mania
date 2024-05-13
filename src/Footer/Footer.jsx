import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
                <div className="mb-4 md:mb-0">
                    <h2 className="text-2xl font-bold">Blog <span className='text-red-600'>Mania</span></h2>
                    <p className="text-sm">Best blog website.Here you can find interesting and latest blog.</p>
                </div>
                <div className="flex space-x-4">
                    <a href="#" className="text-sm hover:text-gray-300 transition duration-300">About Us</a>
                    <a href="#" className="text-sm hover:text-gray-300 transition duration-300">Services</a>
                    <a href="#" className="text-sm hover:text-gray-300 transition duration-300">Blog</a>
                    <a href="#" className="text-sm hover:text-gray-300 transition duration-300">Contact</a>
                </div>
                <div>
                    <p className="text-sm">&copy; {new Date().getFullYear()} Blog Mania. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
