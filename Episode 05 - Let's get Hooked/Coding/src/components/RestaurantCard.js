import { CDN_URL } from "../utils/constants";
const RestaurantCard =({name,cloudinaryImageId,cuisines,avgRating,sla}) =>{
  
    return (
     <div className="card">
  
      <img src={CDN_URL+ 
        cloudinaryImageId}/>   
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRating} stars</h3>
      <h3>{sla.deliveryTime} minutes</h3>
     </div>
    );
  };

  export default RestaurantCard;