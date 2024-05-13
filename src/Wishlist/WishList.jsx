import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'
const WishList = () => {
    const { user } = useContext(AuthContext);
    const wishData = useLoaderData();

  
    const userEmail = user.email.toLowerCase();

 
    const filteredWishList = wishData.filter(item => item.wishUser.toLowerCase() === userEmail);

    // const handleDelete = (_id) => {
    //     console.log(_id)
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!"
    //       }).then((result) => {
    //         if (result.isConfirmed) {
    //          fetch(`http://localhost:5000/wish/${_id}`,{
    //             method:"DELETE"
    //          })
    //          .then(res=>res.json())
    //          .then(data=>{
    //             console.log(data);
    //             if(data.deletedCount>0){
    //                 Swal.fire({
    //                     title: "Deleted!",
    //                     text: "Your wished Blog has been deleted.",
    //                     icon: "success"
    //                   });
    //             }
    //          })

    //         }
    //       });
 
    // };


    // const handleDelete = (_id) => {
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!"
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             fetch(`http://localhost:5000/wish/${_id}`, {
    //                 method: "DELETE"
    //             })
    //             .then(res => {
    //                 if (!res.ok) {
    //                     throw new Error('Failed to delete wish list item');
    //                 }
    //                 return res.json();
    //             })
    //             .then(data => {
    //                 console.log(data);
    //                 if (data.deletedCount > 0) {
    //                     Swal.fire({
    //                         title: "Deleted!",
    //                         text: "Your wished Blog has been deleted.",
    //                         icon: "success"
    //                     });
    //                 } else {
    //                     throw new Error('No wish list item deleted');
    //                 }
    //             })
    //             .catch(error => {
    //                 console.error('Error deleting wish list item:', error);
    //                 Swal.fire({
    //                     title: "Error!",
    //                     text: "Failed to delete wished Blog.",
    //                     icon: "error"
    //                 });
    //             });
    //         }
    //     });
    // };
    const handleDelete=(_id)=>{
        console.log(_id)
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`http://localhost:5000/wish/${_id}`,{
              method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
              console.log(data);
              if(data.deletedCount>0){
                Swal.fire({
              
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                })
                .then(() => {
                 
                  window.location.reload();
                });
    
              }
            })
           
          }
        });
    
      }
    

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Wish List</h1>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left">Title</th>
                            <th className="py-3 px-6 text-left">Description</th>
                            <th className="py-3 px-6 text-left">Date Added</th>
                            <th className="py-3 px-6 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                        {filteredWishList.map((item, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                                <td className="py-3 px-6 text-left whitespace-nowrap">{item.blog.title}</td>
                                <td className="py-3 px-6 text-left">{item.blog.shortDescription}</td>
                                <td className="py-3 px-6 text-left">{item.blog.date}</td>
                                <td className="py-3 px-6 text-center">
                                    <button className="bg-red-600 text-white py-2 px-4 rounded-lg mr-2 transition duration-300 hover:bg-red-600" onClick={() => handleDelete(item.blog._id)}>Delete</button>
                                    <button className="bg-blue-500 text-white py-2 px-4 rounded-lg transition duration-300 hover:bg-blue-600">View Details</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default WishList;




