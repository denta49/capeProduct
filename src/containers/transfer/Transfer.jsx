import React from "react";
import { Article, Button, Specialtext } from "../../components";

const Transfer = (props) => {
  return (
    <div className="contain">
      <Specialtext text={props.text__one} />
      <Article text={props.text__two} />
      <Button text={props.text} link={props.link} />
    </div>
  );
};
export default Transfer;
