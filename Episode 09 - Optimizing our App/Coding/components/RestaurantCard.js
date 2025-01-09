import { CDN_URL } from "../utils/constants";

const RestaurantCard =({name,cloudinaryImageId,cuisines,avgRating,sla,areaName}) =>{
  
    return (
     <div className="card">
      
        <img loading="lazy" src={CDN_URL+ cloudinaryImageId}/>   
        <div className="card-details">
           <h2>{name}</h2>     
            <h3>⭐{avgRating} stars</h3>
             <h3>🕗{sla.deliveryTime} minutes</h3>
           <p>{cuisines.join(", ")}</p>
           <p>{areaName}</p>
       </div>
     </div>
    );
  };

  export default RestaurantCard;