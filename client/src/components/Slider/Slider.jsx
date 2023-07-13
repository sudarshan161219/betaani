import { useEffect, useRef, useState } from "react";
import "./Slider.css";
import Card from "../Card/Card";
import arrowL from "../../assets/Vector 5.svg";
import arrowR from "../../assets/Vector 4.svg";
import { motion } from "framer-motion";

const Slider = () => {
  const [width, setWidth] = useState(0);
  const sliderArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const dragSlider = useRef(null);

  const sRef = useRef(null);

  useEffect(() => {
    let scrollW = dragSlider.current.scrollWidth
    let offsetW = dragSlider.current.offsetWidth
    setWidth( scrollW - offsetW);
  }, [width]);

  const handleScroll = (direction) => {
    const { current } = dragSlider;
    const scrollAmount = window.innerWidth > 1800 ? 270 : 210;
    if (direction === "left") {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className="slider-container" ref={sRef}>
      {/* <div className="button-conatiner"> */}
        <button className="slider-btns" onClick={() => handleScroll("left")}>
          <img src={arrowL} alt="left" />
        </button>
        {/* <button onClick={() => handleScroll("rigth")}>
          <img src={arrowR} alt="right" />
        </button> */}
      {/* </div> */}
      <motion.div className="cards-container" ref={dragSlider}>
        <motion.div
          ref={dragSlider}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="slider-box-item"
        >
          {sliderArr.map((el, i) => (
            <>
              <Card key={1 + 1} el={el} i={i} />
            </>
          ))}
        </motion.div>
      </motion.div>
      <button className="slider-btns" onClick={() => handleScroll("rigth")}>
          <img src={arrowR} alt="right" />
        </button>
    </div>
  );
};

export default Slider;
