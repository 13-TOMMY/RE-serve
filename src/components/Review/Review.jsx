import React from "react";
import "./Review.css";

function Review({ socialApp, username, comment }) {
    return <div className="review-box">
        <div className="top-review-container">
            {socialApp}
            <h3>{username}</h3>
        </div>
        <div className="bottom-review-container">
            <p>{comment}</p>
        </div>
  </div>;
}

export default Review;
