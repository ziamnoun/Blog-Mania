import React from 'react';

const Error404 = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-800">404</h1>
        <p className="text-xl text-gray-600 mt-4">Page Not Found</p>
        <p className="text-gray-600 mt-2">The page you're looking for does not exist.</p>
      </div>
    </div>
    );
};

export default Error404;