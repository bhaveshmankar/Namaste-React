import {useState, useEffect} from 'react';

const useRestaurant = (resId) => {

    const [restaurant,setRestaurant] = useState(null);
    //Get data from api
    useEffect(() => {
        getRestaurantInfo();
    },[resId]);

    async function getRestaurantInfo() {
      const response = await fetch(`https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7195687&lng=75.8577258&restaurantId=`+resId+`&catalog_qa=undefined&submitAction=ENTER`);
      
      const jsonResdata= await response.json();
    // console.log(jsonResdata);   (used to check if we are accessing the correct data of restrau)
      setRestaurant(jsonResdata.data);
     // console.log(jsonResdata?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards[0].card.info.name); // Final check
    // (used to check if we are accessing correct menu data of restrau)
    }

    //return restaurant data
    return restaurant;
}

export default useRestaurant;