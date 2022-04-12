import React from "react";
import "./button.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <Link to={props.link}>
      <motion.button
        type="button"
        whileHover={{
          scale: 1.1,
          backgroundColor: "white",
          color: "black",
          textShadow: "0px 0px 8px rgb(255,255,255)",
          boxShadow: "0px 0px 10px rgb(255,255,255)",
        }}
      >
        {props.text}
      </motion.button>
    </Link>
  );
};

export default Button;
