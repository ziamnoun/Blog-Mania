import React from 'react';
import { useLoaderData } from 'react-router-dom';

const HomeCard = () => {
    const AllBlogData=useLoaderData();
    console.log(AllBlogData)




    return (
        <div>
            
        </div>
    );
};

export default HomeCard;