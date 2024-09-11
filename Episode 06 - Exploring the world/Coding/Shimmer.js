import {React} from "react";
import './Shimmer.css'
const Shimmer=() =>{
    return( 
        <>
        {/* <div className="shimmer-header"></div> */}
        <div className="shimmer-search-container">
        <div className="shimmer-search-bar"></div>
        <div className="shimmer-search-button"></div>            
        </div>

        <div className="shimmer-body">
            <div className="shimmer-card"></div>
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
        </>
    );
};
export default Shimmer;