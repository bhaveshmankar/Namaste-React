import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import '../index.css';
import { createBrowserRouter,  Outlet,  RouterProvider } from "react-router-dom";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import Login from "./components/Login.js"
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


const chocolateCard = {
   name : "Sweet chocolate cake",
   image : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/76a05b39545d5a2bf80d6a3e3e46544a",
   cusines : ["Hot chocolates", "Dark chocolates"],
   rating : "4.3",
};

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
      element:<About/>
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
    }
  ], 
},

  ]);

 const root = ReactDOM.createRoot(document.getElementById("root"));
 // root.render(<AppLayout/>);
 
 // Rendering the Application
root.render(<RouterProvider router={appRouter}/>)


//        <---Routing version 7--->

// import React from "react";
// import ReactDOM from "react-dom/client";
// import Header from "./components/Header.js";
// import Body from "./components/Body.js";
// import Footer from "./components/Footer.js";
// import About from "./components/About.js";
// import Contact from "./components/Contact.js";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "../index.css";

{ /*
App layout:
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
*/}

// Config-driven UI
// const AppLayout = () => {
//   return (
//     <>
//       <Header />
//       <Body />
//       <Footer />
//     </>
//   );
// };

// Main App Component with Routing

// const root = ReactDOM.createRoot(document.getElementById("root"));
//   ReactDOM.createRoot(root).render (
//     <Router>
//       <Routes>
//         {/* Main Layout */}
//         <Route path="/" element={<AppLayout />} />

//         {/* About Page */}
//         <Route path="/about" element={<About />} />

//         {/* Contact Page */}
//         <Route path="/contact" element={<Contact />} />

//         {/* Fallback Route for Undefined Paths */}
//         <Route path="*" element={<h1>404 - Page Not Found</h1>} />
//       </Routes>
//     </Router>
//   );

// Rendering the Application
