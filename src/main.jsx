import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import MainLayOut from "./MainLayOut/MainLayOut";
import Home from "./Home/Home";
import AddBlog from "./AddBlog/AddBlog";
import WishList from "./Wishlist/WishList";
import AllBlog from "./AllBlog/AllBlog";
import FeaturedBlogs from "./FeaturedBlogs/FeaturedBlogs";
import Register from "./Register/Register";
import LogIn from "./LogIn/LogIn";
import AuthProvider from "./Provider/AuthProvider";
import PersonalRoute from "./PersonalROute/PersonalRoute";
import HomeCard from "./HomeCard/HomeCard";
import UpdateBlog from "./UpdateBlog/UpdateBlog";
import ViewDetails from "./ViewDetails/ViewDetails";
import Error404 from "./ViewDetails/404/Error404";




const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children:[
      { path: "/",
      element: <Home></Home>,
      loader:()=>fetch('https://blog-site-server-iota.vercel.app/data')
    },
    { path: "/AddBlog",
      element: <PersonalRoute><AddBlog></AddBlog></PersonalRoute>
    },
    { path: "/FeaturedBlogs",
      element:<FeaturedBlogs></FeaturedBlogs>,
      loader:()=>fetch('https://blog-site-server-iota.vercel.app/data')
    },
    { path: "/AllBlog",
      element: <AllBlog></AllBlog>,
      loader:()=>fetch('https://blog-site-server-iota.vercel.app/data')
    },
    { path: "/WishList",
      element: <PersonalRoute><WishList></WishList></PersonalRoute>,
      loader:()=>fetch('https://blog-site-server-iota.vercel.app/wish')
    },
   
    { path: "/Register",
      element: <Register></Register>
    },
    { path: "/UpdateBlog/:id",
      element: <PersonalRoute><UpdateBlog></UpdateBlog></PersonalRoute>,
      loader:({params})=>fetch(`https://blog-site-server-iota.vercel.app/data/${params.id}`)
    },
   
    { path: "/LogIn",
    element: <LogIn></LogIn>
  },
  { path: "/ViewDetails/:id",
  element: <PersonalRoute><ViewDetails></ViewDetails></PersonalRoute>,
  loader:({params})=>fetch(`https://blog-site-server-iota.vercel.app/data/${params.id}`)
  
},
  
    
    ]
  },
  { path: "/HomeCard",
    element: <HomeCard></HomeCard>,
    loader:()=>fetch('https://blog-site-server-iota.vercel.app/data')
  },
  { path: "/Error404",
  element: <Error404></Error404>,
 
},
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>
);