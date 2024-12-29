import {IMG_URL} from "../utils/constants"
import {useState} from "react"
import Logo from "../assets/img/food_villa.png";
import {Link} from "react-router-dom";

const Title=() =>{
    return(
      <a href="/">
      <img className="logo" src ={Logo} alt ="Food-Villa"/>
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
              <li><Link to="/">Home</Link></li>
              <li><Link to ="/about">About </Link></li>
              <li><Link to="/contact">Contact</Link></li>
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