import  { useRef } from "react";
import "./LandingPage.css";
import Slider from "../Slider/Slider";
import {Link} from "react-router-dom"
const LandingPage = () => {
  const contentRef = useRef(null);

  return (
    <div className="intro" ref={contentRef}>
      <div className="main-heading">
        <div className="heading">
          <h1>
            Make <span>websites</span> hustle <br />
            free!
          </h1>
        </div>
        <Link to="/categories">
          <button type="button">Browse</button>
        </Link>
      </div>
      <div className="getstarted">
        <h2>
          Get <span>started.</span>
        </h2>
        {/* SLIDER COMPONENT */}
        <Slider />
      </div>
    </div>
  );
};

export default LandingPage;
