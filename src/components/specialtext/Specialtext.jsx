import React from "react";
import "./specialtext.css";

const Specialtext = (props) => {
  return (
    <div id="spec" className={props.detect}>
      {props.text}
    </div>
  );
};

export default Specialtext;
