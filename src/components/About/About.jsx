import React from "react";
import "./about.css"

function About() {
  return (
    <div className="about-container">
      <h1>Welcome to RE:serve - Where Reservations Meet Convenience!</h1>
      <p>
        At RE:serve, we believe that sharing moments with loved ones over
        delicious food and delightful experiences should be effortless. Our
        mission is to connect you with the best restaurants and venues,
        providing a seamless reservation system that ensures your special
        moments are never missed.
      </p>
      <p>
        With our intuitive and user-friendly platform, you can explore a wide
        range of restaurants and venues near you. Whether it's a romantic
        dinner, a casual brunch with friends, or a family celebration, RE:serve
        has got you covered.
      </p>
      <p>
        <strong>Key Features:</strong>
      </p>
      <ul>
        <li>
          <span role="img" aria-label="Plate">
            🍽️
          </span>{" "}
          Discover the Best: Explore a curated list of top-rated restaurants and
          venues, handpicked to offer you exceptional dining experiences.
        </li>
        <li>
          <span role="img" aria-label="Map">
            🗺️
          </span>{" "}
          Interactive Map: Find nearby locations on our interactive map,
          allowing you to discover new culinary delights wherever you are.
        </li>
        <li>
          <span role="img" aria-label="Calendar">
            📅
          </span>{" "}
          Easy Reservations: Make hassle-free reservations with just a few
          clicks, ensuring your table is ready when you arrive.
        </li>
        <li>
          <span role="img" aria-label="Dashboard">
            📱
          </span>{" "}
          Personalized Dashboard: Keep track of your reservations and manage
          them effortlessly with a dedicated personal reservations page.
        </li>
        <li>
          <span role="img" aria-label="Lock">
            🔐
          </span>{" "}
          Secure and Private: Your data and information are safe with us. We
          prioritize your privacy and security.
        </li>
      </ul>
      <p>
        Join our growing community of food enthusiasts and experience the joy of
        reserving your table with RE:serve. Sign up today and embark on a
        culinary journey like never before!
      </p>
      <p>
        Follow us on social media to stay updated with the latest news and
        special offers. Happy dining with RE:serve!
      </p>
      <p>
        Bon appétit,
        <br />
        The RE:serve Team
      </p>
    </div>
  );
}

export default About;
