import React from "react";
import Star from "../assets/icon-star.svg";
import Rating from "./Rating";
import Button from "./Button";

const RatingPage = ({ setRatingPage, setFinalRating }) => {
  const ratings = [1, 2, 3, 4, 5];
  return (
    <div className="container">
      <div className="back-circle">
        <img src={Star} alt="star" className="star-logo" />
      </div>
      <h2 className="heading">How did we do?</h2>
      <p className="text">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="ratings">
        {ratings.map((rating) => {
          return (
            <Rating
              rating={rating}
              id={rating}
              setFinalRating={setFinalRating}
            />
          );
        })}
      </div>
      <Button setRatingPage={setRatingPage} />
    </div>
  );
};

export default RatingPage;
