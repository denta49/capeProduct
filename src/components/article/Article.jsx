import React from "react";
import "./article.css";

const Article = (props) => {
  return (
    <div className="normal__text" id={props.detect}>
      {props.text}
    </div>
  );
};

export default Article;
