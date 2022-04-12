import React from "react";
import { Article, Button, Specialtext } from "../../components";
import "./moon.css";
import { motion } from "framer-motion";

const Moon = (props) => {
  return (
    <div className="contain">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Specialtext text={props.first__text} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.5 }}
      >
        <Article text={props.second__text} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5.5, duration: 0.5 }}
      >
        <Specialtext text={props.third__text} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 6.7, duration: 0.5 }}
      >
        <Article text={props.fourth__text} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 10, duration: 0.5 }}
      >
        <Specialtext text={props.fifth__text} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 13, duration: 0.5 }}
      >
        <Specialtext text={props.sixth__text} detect="weneed" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 15, duration: 0.5 }}
      >
        <Article text={props.seventh__text} detect="last__line" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 19, duration: 0.5 }}
      >
        <div className="butt">
          <Button text={props.donate__button__text} link={props.button__link} />
        </div>
      </motion.div>
    </div>
  );
};

export default Moon;
