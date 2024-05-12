import React from 'react';
import { useLoaderData } from 'react-router-dom';

const HomeCard = () => {
    const AllBlogData=useLoaderData();
    console.log(AllBlogData)





      




    return (
        <div className="card w-96 glass bg-black text-white">
        <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Blog Post Image"/></figure>
        <div className="card-body">
          <h2 className="card-title ">Title of the Blog Post</h2>
          <p>Short Description of the Blog Post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="flex justify-between items-center mt-4">
            <div>
              <p className="text-sm text-red-600">Category: Drawing & Painting</p>
              <p className="text-sm text-red-600">Date: May 12, 2024</p>
            </div>
            
            </div>
            <div>
              <button className="btn btn-primary mr-2 bg-red-600">View Details</button>
              <button className="btn btn-danger border-red-600">Delete</button>
            </div>
          
        </div>
      </div>
      

      
      

    );
};

export default HomeCard;