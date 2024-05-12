import React from 'react';

import { useLoaderData } from 'react-router-dom';

const FeaturedBlogs = () => {


    const blogData = useLoaderData();

    
    const sortedBlogs = blogData.sort((a, b) => {
        const wordCountA = a.longDescription.split(' ').length;
        const wordCountB = b.longDescription.split(' ').length;
        return wordCountB - wordCountA;
    });

    
    const topBlogs = sortedBlogs.slice(0, 10);
    return (
        <div className="container mx-auto mt-10">
        <h1 className="text-3xl font-bold mb-4">Top 10 Featured Blogs</h1>
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Blog Title</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Blog Owner</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Profile Picture</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {topBlogs.map((blog, index) => (
                    <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{blog.title}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{blog.userName}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <img src={blog.profilePicture} alt="Profile" className="h-10 w-10 rounded-full" />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    );
};

export default FeaturedBlogs;