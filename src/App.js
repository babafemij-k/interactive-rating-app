// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";

// Components
import RatingPage from "./components/RatingPage";
import ThankYouPage from "./components/ThankYouPage";

function App() {
  const [ratingPage, setRatingPage] = useState(true);
  const [finalRating, setFinalRating] = useState(0);
  return (
    <div className="app">
      {ratingPage ? (
        <>
          <RatingPage
            setRatingPage={setRatingPage}
            setFinalRating={setFinalRating}
          />
        </>
      ) : (
        <ThankYouPage finalRating={finalRating} />
      )}
    </div>
  );
}

export default App;
