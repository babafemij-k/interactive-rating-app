import React from "react";
import ThankYou from "../assets/illustration-thank-you.svg";

const ThankYouPage = ({ finalRating }) => {
  return (
    <div className="container thank-you">
      <img src={ThankYou} alt="" />
      <div className="display">{`You selected ${finalRating} out of 5`}</div>
      <h2 className="heading thank-you">Thank you!</h2>
      <p className="text thank-you">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesistate to get in touch!
      </p>
    </div>
  );
};

export default ThankYouPage;
