import React from "react";
import "./testimonies.css";
import tem from "../image/tem.jpg";
function Testimonies() {
  return (
    <div className="testimonies-section">
      <div className="old-Simplonien">
        <img className="picc" src={tem} alt="somthing" />
        <p className="testimony-paragraph">
          lorem ipsum blablababalbalablabl lorem ipsum blablababalbalablabl
          vvlorem ipsum blablababalbalablabllorem ipsum blablababalbalablabl
          vlorem ipsum blablababalbalablabl
        </p>
      </div>

      <iframe
        title="testimony-video"
        lass="programs"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/1PYQcgeUgq0"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}
export default Testimonies;
