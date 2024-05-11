import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://t3.ftcdn.net/jpg/02/21/79/40/360_F_221794075_LsuBECheGGj3zaCwC8o5OmRHbwVSaLBm.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome to Our Blog</h1>
            <p className="mb-5">Explore insightful articles, helpful tips, and engaging stories.</p>
            <button className="btn btn-primary bg-red-600 border-black">Browse Articles</button>
          </div>
        </div>
      </div>
      
    );
};

export default Banner;
