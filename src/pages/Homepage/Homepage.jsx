import { useEffect } from "react";
import Welcome from "../../components/Welcome/Welcome";
import "./Homepage.css";
import Banner from "../../components/Banner/Banner";
import About from "../../components/About/About";

function Homepage() {
  return (
    <div className="homepage-container">
      <Banner />
      <div className="homepage-middle-container">
        <div className="left-homepage-m-container">
          <div className="Welcome-container">
            <Welcome />
          </div>
        </div>
        <div className="right-homepage-m-container">
          <About />
        </div>
      </div>
      <div className="homepage-bottom-container"></div>
    </div>
  );
}

export default Homepage;
