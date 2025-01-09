import { useState, useEffect } from "react";

const useRestaurantData = () => {
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
  
    return [allRestaurants, filteredRestaurants, setFilteredRestaurants];
}

export default useRestaurantData;
