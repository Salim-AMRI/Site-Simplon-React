import React from "react";
import "./Equipe.css";

function Member(props) {
  return (
    <div className="membre">
      <img className="photo" src={props.el.image} alt="staffpic" />
      <h2>{props.el.name}</h2>
      <p>{props.el.role}</p>
      <p>
        <a href={props.el.info}>Pour plus info.</a>
      </p>
    </div>
  );
}
export default Member;
