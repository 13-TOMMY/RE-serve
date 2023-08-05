import { useEffect } from "react";
import Welcome from "../../components/Welcome/Welcome";
import "./Homepage.css";
import RamenScroll from "../../components/RamenScroll/RamenScroll";

function Homepage() {
  return (
    <div className="homepage-container">
      <div className="left-homepage-container">
        <RamenScroll className="ramen-bowl-item" />
      </div>
      <div className="right-homepage-container">
        <div className="Welcome-container">
          <Welcome />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
