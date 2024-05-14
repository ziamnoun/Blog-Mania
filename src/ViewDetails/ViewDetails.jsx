import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../Provider/AuthProvider';


const ViewDetails = () => {

  const{user,userEmaill}=useContext(AuthContext)
  console.log(user)
    
 const blog=useLoaderData();
 const [commentText,setCommentText]=useState([])

 useEffect(() => {
  fetch("https://blog-site-server-iota.vercel.app/comment")
    .then(res => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .then(data => {
      setCommentText(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}, []);
console.log(commentText);

const {id}=useParams();

const idInt=parseInt(id);

const filteredComments = commentText.filter(comment => comment.postId === id);
console.log(filteredComments);
console.log(user);
const isOwner = user && user.email.toLowerCase() === blog.userEmail.toLowerCase();




    



    const handleComment=(e)=>{
      
      e.preventDefault();
      if (!user) {
       
        toast.error("Please log in to comment.");
        return;
      }
      if(isOwner){
        toast.error("You cannot comment on own post");
        return;
      }
      const form = e.target;
      

      const comment=form.comment.value;
      const userName=user.displayName || "Unknown";
      const uImage=user.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg";
      const postId=blog._id;
      console.log(comment,postId)
      const commenData={
        comment,postId,userName,uImage
      }

      fetch('https://blog-site-server-iota.vercel.app/comment', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(commenData)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.insertedId) {
                toast.success("Comment Added Successfully!");
                setTimeout(() => {
                  window.location.reload();
              }, 2000);
             
             
              
              
            }
            else{
              toast.error("Failed to add comment");
            }

        });
    };


    const addToWishlist = async (blog) => {
       
        
      const wishBlog={blog,userEmaill}
      console.log(wishBlog)
      try {
          const response = await fetch('https://blog-site-server-iota.vercel.app/Wish', {
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
        <div className="div mg:w-[80%] m-auto">
            <Card sx={{ display: 'flex', minHeight: '100vh', backgroundColor: 'black', color: 'white' }}>
        <CardMedia
          component="img"
          sx={{ width: '50%', objectFit: 'cover' }} 
          image={blog.imageURL} 
          alt={blog.title} 
        />
        <CardContent sx={{ flex: 1 }}>
          <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white' }}>
              <span className='text-red-600 text-3xl'>{blog.title}</span>
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ color: 'white' }}>
            <span className='text-red-600'>Category:</span>{blog.category} 
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ color: 'white' }}>
            {blog.shortDescription} 
          </Typography>
          
          <Typography variant="body2" color="text.secondary" sx={{ color: 'white' }}>
          <span className='text-red-600'>Date:</span>{blog.date} 
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ color: 'white' }}>
          <span className='text-red-600'>Details:</span>{blog.longDescription} 
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ color: 'white' }}>
            <span className='text-red-600'>Writer Name:</span>{blog.userName} 
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ color: 'white' }}>
            <span className='text-red-600'>Contact:</span>{blog.userEmail} 
          </Typography>
          
          <Button onClick={() => addToWishlist(blog)}  variant="contained" sx={{ mt: 2 ,backgroundColor: '#dc2626'}}>Add to Wishlist</Button>
          <Typography variant="body2" color="text.secondary" sx={{ color: 'white' }}>
          {/* <Link to={`/UpdateBlog/${blog._id}`}><button className="btn btn-primary bg-white text-black mt-5 border-red-600">Update</button></Link> */}
          {isOwner && <Link to={`/UpdateBlog/${blog._id}`}><button className="btn btn-danger border-red-600">Update</button></Link>}
          </Typography>
        </CardContent>
      </Card>
      <div className="max-w-lg mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-4">Comments</h2>
      <div className="bg-gray-100 p-4 rounded-lg">

      {
  filteredComments.map(e => (
    <div key={e._id} className="flex items-start mb-4">
      <img src={e.uImage} alt="Avatar" className="w-10 h-10 rounded-full mr-4" />
      <div>
        <p className="font-semibold">{e.userName}</p>
        <p className="text-sm text-gray-600">{e.comment}</p>
      </div>
    </div>
  ))
}
       {
      user && <form onSubmit={handleComment} className="flex mt-4">
        
      <img id="userImage" name="userImage" src={user.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} alt="Avatar" className="w-10 h-10 rounded-full mr-4" />
      <input type="text" id="comment" name="comment" placeholder="Add a comment..." className="flex-1 bg-gray-200 rounded-full py-2 px-4 focus:outline-none" />
      <button type="submit" className="bg-red-600 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full ml-2">Post</button>
    </form>
      
    }
     {!user && (
      <div className="div">
        For comment:Please <Link to='/LogIn'><span className='underline'>Log In</span></Link>
      </div>
      )}
      </div>
      <ToastContainer></ToastContainer>
    </div>

        </div>
    );
};

export default ViewDetails;