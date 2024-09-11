import {IMG_URL} from "../utils/constants"
import {useState} from "react"



const Title=() =>{
    return(
      <a href="/">
      <img className="logo" src ={IMG_URL} alt ="Food-Villa"/>
      </a>
      );
    };
    
    
    const Header = () =>{
      
      const [isLoggedIn,setIsLoggedIn] = useState(false);

      return (
        <div className ="Header">
          <Title/>
         
          <div className="nav-bar">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Cart</li>
            </ul>
          </div>
          {/* <button onClick={() => {
              if(login === "Logout"){
                setLogin("Login");
              }
              else{
                setLogin("Logout");
              }
            }}>{login}</button> */}
            { isLoggedIn ? (
              <button onClick={()=> setIsLoggedIn(false)}>Logout</button>
              ) : (
                <button onClick={()=> setIsLoggedIn(true)}>Login</button>
            )

            }
        </div>
      );
    };

    export default Header;