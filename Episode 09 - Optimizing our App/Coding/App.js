import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Contact from "./components/Contact.js"
import Footer from "./components/Footer.js";
import '../index.css';
import { createBrowserRouter,  Outlet,  RouterProvider } from "react-router-dom";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import Login from "./components/Login.js"
import Profile from "./components/Profile.js";
import { RestaurantShimmer } from "./components/Shimmer.js";

/*
App layout

  - Header      
      - Logo
      - Home
      - About
      - Contact
    - Body
      - Search Bar
      - Restaurant List
        - RestaurantCard
          - Image
          - Name
          - Rating
          - Cusines
    - Footer
        - Links
        - Copyright
*/

//Raw data for practice
// const chocolateCard = {
//    name : "Sweet chocolate cake",
//    image : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/76a05b39545d5a2bf80d6a3e3e46544a",
//    cusines : ["Hot chocolates", "Dark chocolates"],
//    rating : "4.3",
// };

//Lazy-loading
const About = lazy(() => import("./components/About.js"));
const Instamart = lazy(() => import("./components/Instamart.js"))
 //config-driven ui
 const AppLayout = () => {
  return(
       <>
       <Header />
       <Outlet/>
       <Footer />
       </>       
  )
}

// Main App Component with Routing
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement: <Error/>,
    children:[
    {
      path: "/",
      element: <Body />
    },
    {
      path: "/about",
      element: (<Suspense fallback = {<h1>Loading...</h1>}><About/></Suspense>),
      children: [
        {
          path: "profile",
          element: <Profile />
        },
      ]
    }, 
    {
      path: "/contact",
      element: <Contact/>
    },
    {
      path: "restaurant/:resId",
      element: <RestaurantMenu/>
    },
    {  
      path: "/login",
      element: <Login />
    },
    {
      path: "/instamart",
      element:(
        <Suspense fallback = {<RestaurantShimmer/>}> <Instamart /> </Suspense>
      )
    }
  ], 
},

  ]);

 const root = ReactDOM.createRoot(document.getElementById("root"));
 // root.render(<AppLayout/>);
 
 // Rendering the Application
root.render(<RouterProvider router={appRouter}/>)
