


import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Homecard = ({ blogData }) => {
  return (
    <div className="card w-96 glass bg-black text-white ">
      <figure><img src={blogData.imageURL} alt="Blog Post Image"/></figure>
      <div className="card-body">
        <h2 className="card-title">{blogData.title}</h2>
        <p>{blogData.shortDescription}</p>
        <div className="flex justify-between items-center mt-4">
          <div>
            <p className="text-sm text-red-600">Category: {blogData.category}</p>
            <p className="text-sm text-red-600">Date: {blogData.date}</p>
          </div>
          
        </div>
        <div>
            <Link to={`/ViewDetails/${blogData._id}`}><button className="btn btn-primary mr-2 bg-red-600">View Details</button></Link>
            <Link to={`/UpdateBlog/${blogData._id}`}><button className="btn btn-danger border-red-600">Edit</button></Link>
          </div>
      </div>
    </div>
  );
};

const HomeCard = () => {
  const allBlogData = useLoaderData();

 
  const latestBlogData = allBlogData.slice(0, 6);

  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 mt-10 gap-5 md:w-[80%] m-auto">
      {latestBlogData.map((blogData, index) => (
        <Homecard key={index} blogData={blogData} />
      ))}
    </div>
  );
};

export default HomeCard;
