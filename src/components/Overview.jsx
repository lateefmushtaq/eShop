import React from "react";
import "../styles/Reviews.css";

function Overview({ name }) {
  return (
    <div className="overview-container">
      The
      <span className="overview-highlight">
        <strong> {name} </strong>
      </span>
      provides you with fabulous sound quality <br /> • Sound Tuned to
      Perfection <br />• Comfortable to Wear <br /> • Long Hours Playback Time{" "}
      <br />
      Buy the{" "}
      <span className="overview-highlight">
        <strong> {name} </strong>
      </span>
      On-Ear Wireless Headphones which offers you with a fabulous music
      experience by providing you with awesome sound quality that you can never
      move on from. Enjoy perfect flexibility and mobility with amazing musical
      quality with these Headphones giving you a truly awesome audio experience.
      It blends exceptional sound quality with a range of smart features for an
      unrivalled listening experience.
    </div>
  );
}

export default Overview;
