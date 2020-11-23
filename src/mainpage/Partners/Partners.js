import React from "react";
import "./partners.css";

function Partners(props) {
  return (
    <div className="Partners-section">
      <h3>Nos Partenaires</h3>
      <div className="Partners-logos">
        {props.pics.map((el) => (
          <a href="#">
            <img src={el} alt="" />
          </a>
        ))}
      </div>
    </div>
  );
}
export default Partners;
