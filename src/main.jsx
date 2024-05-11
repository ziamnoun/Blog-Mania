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




const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children:[
      { path: "/",
      element: <Home></Home>
    },
    { path: "/AddBlog",
      element: <AddBlog></AddBlog>
    },
    { path: "/FeaturedBlogs",
      element:<FeaturedBlogs></FeaturedBlogs>
    },
    { path: "/AllBlog",
      element: <AllBlog></AllBlog>
    },
    { path: "/WishList",
      element: <PersonalRoute><WishList></WishList></PersonalRoute>
    },
   
    { path: "/Register",
      element: <Register></Register>
    },
    { path: "/LogIn",
    element: <LogIn></LogIn>
  },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>
);