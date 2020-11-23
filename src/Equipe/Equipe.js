import React from "react";
import Member from "./Member";

function Staff(props) {
  return (
    <div>
      {props.staff.map((el) => (
        <Member el={el} />
      ))}
    </div>
  );
}

export default Staff;
