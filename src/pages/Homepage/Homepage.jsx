import React from "react";
import Banner from "../../components/Banner/Banner";
import About from "../../components/About/About";
import Review from "../../components/Review/Review";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";
import "./Homepage.css";

function Homepage() {
  const images = [
    "/assets/homepage-images/seating-picture.jpeg",
    "/assets/homepage-images/outside-res-seating.jpeg",
    "/assets/homepage-images/inside-res-plant.jpeg",
    "/assets/homepage-images/inside-bar-res.jpeg",
  ];
  return (
    <div className="homepage-container">
      <Banner />
      <div className="homepage-middle-container">
        <div className="left-homepage-m-container">
          <Review
            socialApp={<AiOutlineInstagram />}
            username={`@13__tommy`}
            comment={
              "RE:serve made our anniversary dinner truly special! We easily found a fantastic restaurant using their interactive map and made a seamless reservation. The personalized dashboard helped us keep track of all our reservations. Highly recommended for hassle-free dining experiences!"
            }
          />
          <Review
            socialApp={<AiOutlineFacebook />}
            username={`@m1chael`}
            comment={
              "Being a busy professional, I appreciate convenience. RE:serve's quick reservation system and user-friendly interface save me time, allowing me to enjoy my favorite meals without any stress. It's a must-have app for anyone who loves dining out!"
            }
          />
          <Review
            socialApp={<AiOutlineTwitter />}
            username={`@sophia_k`}
            comment={
              "RE:serve's interactive map feature lets me explore nearby eateries wherever I travel. From cozy cafes to trendy restaurants, I've had fantastic dining experiences thanks to this app. It's like having a personal food guide in my pocket!"
            }
          />
        </div>
        <div className="right-homepage-m-container">
          <About />
        </div>
      </div>
      <div className="homepage-bottom-container">
        <ImageCarousel images={images} />
      </div>
    </div>
  );
}

export default Homepage;
