import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
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




const Footer =() =>{
  return( 
     <h3>Footer</h3> 
    );
};

const AppLayout = () => {
  return(
       <>
       <Header />
       <Body />
       <Footer />
       </>
       
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
