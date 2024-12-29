import RestaurantCard from "./RestaurantCard";
import restrautList from "../utils/mockData";
import { useState,useEffect } from "react";
import {RestaurantShimmer} from "./Shimmer.js";
import {Link} from "react-router-dom";
import "./RestaurantCardShimmer.css";

function filterData(searchText,restaurants){
const filterData = restaurants.filter((restaurant) => (restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())));
return filterData;
}

const Body =() =>{
   
    const [searchText,setSearchText]=useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);
    
    useEffect(()=>{
      getRestaurants();
      // console.log("useEffect");
    },[]);
    //akshay saini function
    // async function getRestaurants(){
    //   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#");
    //   const json=await data.json();
    //   console.log(json);
    //   setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //   setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // }

    // refer - https://chatgpt.com/share/e0d04cf2-898c-43b5-b515-7d756927c217

    // async function getRestaurants() {
    //   const response = await fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'));
      
    //   const data = await response.json();
    
    //   // The actual data is inside the 'contents' field
    //   const parsedData = JSON.parse(data.contents);
    //   console.log(parsedData);
    
    //   // Assuming the structure is the same, set the restaurants data
    //   setAllRestaurants(parsedData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //   setFilteredRestaurants(parsedData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // }
    
    async function getRestaurants() {
      const response = await fetch('https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
      const data = await response.json();
      
      // Log the API response
      //console.log(data);
    
    
      // Assuming the data structure is the same
      setAllRestaurants(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurants(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);//bcoz when page loads filtered restro should have all restro bcoz we are showing filtered restro
    }
    
    
    console.log("render");
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