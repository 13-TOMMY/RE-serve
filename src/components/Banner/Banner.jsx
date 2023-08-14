import React from "react";
import { motion } from "framer-motion";
import RamenScroll from "../RamenSpin/RamenSpin";
import "./Banner.css";
import { Link } from "react-router-dom";

function Banner() {
  const buttonVariants = {
    initial: {
      scale: 1,
      opacity: 1,
    },
    hover: {
      scale: 1.1,
      opacity: 0.9,
    },
    tap: {
      scale: 0.9,
      opacity: 1,
    },
  };
  
  return (
    <div className="banner-container">
      <h1 className="h1-top-header">Your Table Awaits.</h1>
      <div className="ramen-container">
        <RamenScroll className="ramen-bowl-object" />
      </div>
      <h2 className="h2-bottom-header">
        RE: <span>serve</span> Unforgettable Dining Experiences
      </h2>
      <motion.button
        className="btn-banner"
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
      >
        <Link to={"/map-reservation"} className="btn-link-banner">
          RESERVE NOW
        </Link>
      </motion.button>
    </div>
  );
}

export default Banner;
