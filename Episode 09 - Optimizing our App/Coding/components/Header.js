import {IMG_URL} from "../utils/constants"
import {useState} from "react"
import Logo from "../assets/img/food_villa.png";
import {Link} from "react-router-dom";
import useOnline from "../utils/useOnline.js";

const Title=() =>{
    return(
      <a href="/">
      <img className="logo" src ={Logo} alt ="Food-Villa"/>
      </a>
      );
    };
    
    
    const Header = () =>{

      const [isLoggedIn,setIsLoggedIn] = useState(false);
      const isOnline = useOnline();
      return (
        <div className ="Header">
          <Title/>
         
          <div className="nav-bar">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to ="/about">About </Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to ="/instamart">Instamart</Link></li>
              <li>Cart</li>
            </ul>
          </div>

          <h1>{isOnline ? '✅' : '🔴'}</h1>

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