import RestaurantCard from "./RestaurantCard";
import restrautList from "../utils/mockData";
import { useState } from "react";

function filterData(searchText,restaurants){
const filterData = restaurants.filter((restaurant) => (restaurant.info.name.includes(searchText)));
return filterData;
}
const Body =() =>{
    // let searchText="KFC";
    const [searchText,setSearchText]=useState("");
    const [restaurants, setRestaurants] = useState(restrautList);

    return (
        <>
      <div className="search-container">
      <input type="text" className="search-Input" placeholder="search" value={searchText} 
      onChange={(e) => {
        setSearchText(e.target.value);
      }}  />

    
      <button className="search-btn" onClick={()  =>{
       const data = filterData(searchText,restrautList);
        setRestaurants(data);
       } }>Search</button>
      </div>

      <div className = "restaurant-list">
        {
        restaurants.map((restaurant)=>{
          return <RestaurantCard{...restaurant.info} key={restaurant.info.id}/>
        })
      } 
      </div>
      </>  
  );
  };

export default Body;  