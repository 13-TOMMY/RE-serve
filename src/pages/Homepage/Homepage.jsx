import Welcome from "../../components/Welcome/Welcome";
import "./Homepage.css";
import RamenScroll from "../../components/RamenScroll/RamenScroll";

function Homepage() {

  return (
    <div className='homepage-container'>
      <div className="ramen-bowl-container">
        <RamenScroll />
      </div>
      <div className="left-homepage-container">     
      </div>
      <div className="right-homepage-container">
        <Welcome />
      </div>
    </div>
  );
}

export default Homepage;
