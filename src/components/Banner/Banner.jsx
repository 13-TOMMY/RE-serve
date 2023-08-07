import React from "react";
import RamenScroll from "../RamenSpin/RamenSpin";
import "./Banner.css";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="banner-container">
      <h1 className="h1-top-header">Your Table Awaits</h1>
      <div className="ramen-container">
        <RamenScroll className="ramen-bowl-object" />
      </div>
      <h2 className="h2-bottom-header">
        RE: <span>serve</span> Unforgettable Dining Experiences
      </h2>
      <button className="btn-banner">
        <Link to={"/map-reservation"} className="btn-link-banner">
          RESERVE NOW
        </Link>
      </button>
    </div>
  );
}

export default Banner;
