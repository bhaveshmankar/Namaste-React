import { useState, useEffect } from "react";
import {useParams} from "react-router-dom"
import { CDN_URL } from '../utils/constants';
import { MdStarRate } from "react-icons/md"; //react shimmer-icons
import { RestaurantMenuShimmer } from "./Shimmer.js";
import "../RestaurantMenu.css";
import useRestaurant from "../utils/useRestaurantMenu.js";

// https://chatgpt.com/share/676abfc2-39fc-8002-b9c3-5911d76f0636

const RestaurantMenu =() =>{

    // const params=useParams();
    // console.log(params);
    const {resId} = useParams();  
    
    //Passing resId to custom Hook to get restaurant data
    const restaurant = useRestaurant(resId);

    // const {name, id , areaName,avgRating, costForTwoMessage, cloudinaryImageId}=restaurant?.cards[2]?.card?.card?.info || {};
     const {cloudinaryImageId,
        name,
        avgRatingString,
        totalRatingsString,
        cuisines,
        locality,
        sla} = restaurant?.cards[2]?.card?.card?.info || {};
   
    const cards = restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  let itemCards = cards.find((c) => c?.card?.card?.itemCards)?.card?.card?.itemCards || [];

  //akshay saini
//     return(
//     <div>  
//         <div className="restrau data">
//             <h2>Restaurant id: {resId}</h2>
//             <img src={CDN_URL + cloudinaryImageId} />
//             <h1>{name}</h1>
//             <h2>{id}</h2>
//             <h2>{areaName}</h2>
//             <h2>{avgRating}</h2>
//             <h2>{costForTwoMessage}</h2>
//         </div>

//         <div className="menu-data">
//             <h1>Menu:</h1>
//   <ul>      
//         {itemCards.length ? (
//             itemCards.map((item) => {
//           const {
//             id,
//             name,
//             price,
//             defaultPrice,
//             ratings,
//             imageId,
//             description,
//           } = item.card.info;
//           return (
//             <li key={id} className="menu-items">
//               <div className="left">
//                 <h2>{name}</h2>
//                 <h4>₹{price / 100 || defaultPrice / 100}</h4>
//                 <p>{description || "Dummy"}</p>
//                 <h4 className="rating">                 
//                 <MdStarRate
//                     className="rating-logo"
//                     style={{
//                       backgroundColor:
//                         ratings?.aggregatedRating?.rating >= 4.0
                        //   ? "var(--green)"
//                           : "var(--red)",
//                     }}
//                   />

//                   <span>
//                     {ratings?.aggregatedRating?.rating || 3.8} (
//                     {ratings?.aggregatedRating?.ratingCountV2 || 6})
//                   </span>
//                 </h4>
//               </div>
//               <div className="right">
//                 <img src={CDN_URL + imageId} alt={name} />
//                 {/* <button className="add-btn">ADD</button> */}
//               </div>
//             </li>
//           );
//         })
//       ) : (
//         <h2>No items available</h2>
//       )}
// </ul>  
//         </div>
//         </div>
//     )

//displaying bharat 2044 restraunt menu details and restaurant menu item list
if(!restaurant){
    return <RestaurantMenuShimmer/>
}
return (
    <div className="menu">
      <div className="restaurant-header">
        <img src={CDN_URL + cloudinaryImageId} alt={name} />
        <div className="restaurant-header-details">
          <h1>{name}</h1>
          <h3>{locality}</h3>
          <p>{cuisines?.join(", ")}</p>
          <h4 className="rating-time">
            <div className="rating">
              <MdStarRate
                className="rating-logo"
                style={{
                  backgroundColor:
                    avgRatingString >= 4.0 ? "var(--green)" : "var(--red)",
                }}
              />
              <span>
                {avgRatingString || 3.8} ({totalRatingsString || "1K+ ratings"})
              </span>
            </div>
            <span>|</span>
            <span className="time">🕗{sla?.slaString}</span>
          </h4>
        </div>
      </div>

    {/* good practice of checking itemCards.length bcoz If ItemCards was [] or undefined, this resulted in the error:
    TypeError: Cannot read properties of undefined (reading 'map').; */}

      {itemCards.length ? (
        itemCards.map((item) => {
          const {
            id,
            name,
            price,
            defaultPrice,
            ratings,
            imageId,
            description,
          } = item.card.info;
          return (
            <div key={id} className="menu-items">
              <div className="left">
                <h2>{name}</h2>
                <h4>₹{price / 100 || defaultPrice / 100}</h4>
                <p>{description  || "Dummy"}</p>
                <h6 className="rating">
                  <MdStarRate
                    className="rating-logo"
                    style={{
                      backgroundColor:
                        ratings?.aggregatedRating?.rating >= 4.0
                          ? "var(--green)"
                          : "var(--red)",
                    }}
                  />
                  <span> 
                    {ratings?.aggregatedRating?.rating || 3.8} (
                    {ratings?.aggregatedRating?.ratingCountV2 || 6})
                  </span>
                </h6>
              </div>
              <div className="right">
                <img src={CDN_URL + imageId} alt={name} />
                <button className="add-btn">ADD</button>
              </div>
            </div>
          );
        })
      ) : (
        <h2>No items available</h2>
      )}
    </div>
  );
}

export default RestaurantMenu;