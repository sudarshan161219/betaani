import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/animatrix-logo-png.png";
import mLogo from "../../assets/logo-purple.png";
import { useAppContext } from "../../context/Context";
import { FaBarsStaggered } from "react-icons/fa6";

const Navbar = () => {
  const { toggleSidebar } = useAppContext();

  const handleClick = () => {
    toggleSidebar();
  };

  return (
    <div className="navbar">
      <div>
        <Link className="Link" to="/">
          <div className="nameandlogo">
            {/* <img src="https://aakarsh-2004.github.io/assets-site/assets/logo-purple.png" alt="" />
                        <h1>ANIMAT<span>RIX</span></h1> */}
            <img className="dec-logo" src={logo} alt="logo" />
            <img className="mob-logo" src={mLogo} alt="logo" />
          </div>
        </Link>
      </div>

      <div className="l-section">
        <input type="text" placeholder="Search" />
      </div>
      
        <FaBarsStaggered onClick={handleClick} className="nav-icon" />

      <div className="r-section">
        <ul className="nav-left">
          <li>
            <Link to="/browse">Browse</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/submitideas">Submit Ideas</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
