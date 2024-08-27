import {IMG_URL} from "../utils/constants"

const Title=() =>{
    return(
      <a href="/">
      <img className="logo" src ={IMG_URL} alt ="Food-Villa"/>
      </a>
      );
    };
    
    const Header = () =>{
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
        </div>
      );
    };

    export default Header;