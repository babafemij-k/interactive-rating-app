import React from "react";

const Rating = ({ rating, setFinalRating }) => {
  return (
    <button
      onClick={() => setFinalRating(rating)}
      className="back-circle selected"
    >
      <h4>{rating}</h4>
    </button>
  );
};

export default Rating;
