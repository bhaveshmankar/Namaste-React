import {React} from "react";
// import './Shimmer.css'
// const Shimmer=() =>{
//     return( 
//         <>
//         {/* <div className="shimmer-header"></div> */}
//         <div className="shimmer-search-container">
//            <div className="shimmer-search-bar"></div>
//            <div className="shimmer-search-button"></div>            
//         </div>

//         <div className="shimmer-body">
//         { Array(10).fill("").map((e,index) => (
//           <div key={index} className="shimmer-card" ></div>
//         ))}
//         </div>
//         </>
//     );
// };
// Initially i had only one componenent for shimmmer but in chapter 7-finding path , i make two components of shimmer card, one for restrau card and one for restrao menu
//css for restrau card shimmer is imported in body compoennts where i am imporating to show restrau card shimmer
//similarly for restrau menu shimmer is imported in restrau menu componennt where i am importing to show restrau menu shimmer

export const RestaurantShimmer = () => {
  return (
    <>
    {/* <div className="shimmer-header"></div> */}
    <div className="shimmer-search-container">
       <div className="shimmer-search-bar"></div>
       <div className="shimmer-search-button"></div>            
    </div>

    <div className="shimmer-body">
    { Array(10).fill("").map((e,index) => (
      <div key={index} className="shimmer-card" ></div>
    ))}
    </div>
    </>
  );
};

export const RestaurantMenuShimmer = () => {
  return (
    <div className="shimmer-menu">
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
    </div>
  );
};
// export default Shimmer;