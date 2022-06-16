import React from "react";

const Button = ({ setRatingPage }) => {
  return (
    <button onClick={() => setRatingPage(false)} className="button">
      SUBMIT
    </button>
  );
};

export default Button;
