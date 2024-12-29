const Body =() =>{
    // let searchText="KFC";
    const [searchText,setSearchText]=useState("");
    const [restaurants, setRestaurants] = useState(restrautList);
    console.log("render()");
    return (
        <>
      <div className="search-container">
      <input type="text" className="search-Input" placeholder="search" value={searchText} 
      onChange={(e) => {
        setSearchText(e.target.value);
      }}
        />

    
      <button className="search-button" onClick={()  =>{
       const data = filterData(searchText,restaurants);
        setRestaurants(data);
       } }>Search</button>
      </div>

      {/* <button className="filter-button" onClick={() =>{
        const data = filteredData(restaurants);
        setRestaurants(data);
      }}>Top-Rated Restaurants</button>         */}


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