import RestaurantCard from "./RestaurantCard";
import restrautList from "../utils/mockData";
import { useState,useEffect } from "react";
import {RestaurantShimmer} from "./Shimmer.js";
import {Link} from "react-router-dom";
import "./RestaurantCardShimmer.css";
import { filterData } from "../utils/helper.js";
import useRestaurantData from "../utils/useRestaurantData.js"
import useOnline from "../utils/useOnline.js";

const Body =() =>{
   
    const [searchText,setSearchText]=useState("");

    //getting data from custom Hook to get data of allRestaurants, filteredRestaurants, setFilteredRestaurants
    const [allRestaurants, filteredRestaurants, setFilteredRestaurants] = useRestaurantData();
    
    const isOnline = useOnline();
    if(!isOnline){
      return <h1>🔴 Offline, Please check your Internet Connection !!</h1>
    }
    // console.log("render");
    // not render component (early return)
  if(!allRestaurants) return null;

    // if(filteredRestaurants.length ===0) 
    //   return <h1>No Restaurant found...</h1>;
    
     return (allRestaurants?.length === 0) ? <RestaurantShimmer/> : (
        <>
      <div className="search-container">
      <input type="text" className="search-Input" placeholder="search" value={searchText} 
      onChange={(e) => {
        setSearchText(e.target.value);
      }}
        />

    
      <button className="search-button" onClick={()  =>{
       const data = filterData(searchText,allRestaurants);
        setFilteredRestaurants(data);
       } }>Search</button>
      </div>

      <div className = "restaurant-list">
      {filteredRestaurants.length === 0 ? (
        <h1>No Restaurant found...</h1>
      ):(        
        filteredRestaurants.map((restaurant)=>{
         
         return (
         <Link to ={"/restaurant/" + restaurant.info.id} key={restaurant.info.id} className="restaurant-link">
         <RestaurantCard{...restaurant.info} />
         </Link>
        );
      })
      )}
      
      </div>
      </>  
  );
};

export default Body;  