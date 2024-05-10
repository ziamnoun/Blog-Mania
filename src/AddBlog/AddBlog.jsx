import React from 'react';

const AddBlog = () => {
 
    
      const handleSubmit = (e) => {
        e.preventDefault();
     
      };





    return (
        <div className="min-h-screen flex items-center justify-center mt-10">
      <div className="max-w-md w-full px-6 py-8 bg-black text-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold  mb-4">Add Craft Item</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="image" className="block  mb-2">Image URL</label>
            <input type="text" id="image" name="image" className="w-full px-3 py-2 leading-tight text-gray-700 bg-gray-200 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="itemName" className="block  mb-2">Title</label>
            <input type="text" id="itemName" name="itemName" className="w-full px-3 py-2 leading-tight text-gray-700 bg-gray-200 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
          <label htmlFor="category" className="block  font-semibold mb-1">Category:</label>
          <select
            id="category"
            name="category"
            className="text-black w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 px-3 py-2"
            required
          >
            <option value="">Select Category</option>
            <option value="Technology">Technology</option>
            <option value="Travel">Travel</option>
            <option value="Food">Food</option>
           
          </select>
        </div>
          <div className="mb-4">
            <label htmlFor="shortDescription" className="block  mb-2">Short Description</label>
            <textarea id="shortDescription" name="shortDescription" rows="3" className="w-full px-3 py-2 leading-tight text-gray-700 bg-gray-200 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="longDescription" className="block  mb-2">Long Description</label>
            <textarea id="longDescription" name="longDescription" rows="3" className="w-full px-3 py-2 leading-tight text-gray-700 bg-gray-200 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"></textarea>
          </div>
        
        
          <div className="mb-4">
            <label htmlFor="userEmail" className="block  mb-2">User Email</label>
            <input type="email" id="userEmail" name="userEmail" className="w-full px-3 py-2 leading-tight text-gray-700 bg-gray-200 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"   required/>
          </div>
          <div className="mb-4">
            <label htmlFor="userName" className="block  mb-2">User Name</label>
            <input type="text" id="userName" name="userName" className="w-full px-3 py-2 leading-tight text-gray-700 bg-gray-200 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-6">
            <button type="submit" className="w-full px-4 py-2 text-white bg-red-600 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Add</button>
          </div>
        </form>
      </div>
      
    </div>
    );
};

export default AddBlog;