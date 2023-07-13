import  { useEffect } from "react";
import { Link } from "react-router-dom";
import mLogo from "../../assets/logo-purple.png";
import { AiOutlineClose } from "react-icons/ai";
import "./Sidebar.css";
import { useAppContext } from "../../context/Context";

const Sidebar = () => {
  const { toggleSidebar, showSidebar } = useAppContext()


  useEffect(() => {
    if (showSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showSidebar]);

  const handleClick = () => {
    toggleSidebar();
  };

  return (
    <aside className="aside">
      <div className={ showSidebar ? "sidebar show-sidebar" : "sidebar"}>
        <div className="sidebar-logo-container">
          <img className="sidebar-mob-logo" src={mLogo} alt="logo" />
          <AiOutlineClose onClick={handleClick} className="side-bar-icon" />
        </div>
        <ul className="sidebar-nav">
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
    </aside>
  );
};

export default Sidebar;
