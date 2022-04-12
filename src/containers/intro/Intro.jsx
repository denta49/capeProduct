import React from "react";
import { Button, Specialtext } from "../../components";
import Article from "../../components/article/Article";
import { motion } from "framer-motion";
import "./intro.css";

const normalVariants = {
  initial: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      delay: 6.5,
      duration: 1,
    },
  },
};

const Intro = (props) => {
  return (
    <div>
      <div className="line">
        <motion.div
          variants={normalVariants}
          initial="initial"
          animate="visible"
        >
          <Article text={props.first__line} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <Specialtext text={props.first__special} />
        </motion.div>
      </div>
      <div className="line">
        <motion.div
          variants={normalVariants}
          initial="initial"
          animate="visible"
        >
          <Article text={props.second__line} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
        >
          <Specialtext text={props.second__special} />
        </motion.div>
      </div>
      <div className="line">
        <motion.div
          variants={normalVariants}
          initial="initial"
          animate="visible"
        >
          <Article text={props.third__line} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 0.5 }}
        >
          <Specialtext text={props.third__special} />
        </motion.div>
      </div>
      <div className="line">
        <motion.div
          variants={normalVariants}
          initial="initial"
          animate="visible"
        >
          <Article text={props.fourth__line} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5, duration: 0.5 }}
        >
          <Specialtext text={props.fourth__special} />
        </motion.div>
      </div>
      <div className="line" id="fifth__line">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 7.5, duration: 1 }}
        >
          <Article text={props.fifth__line} />
        </motion.div>
      </div>
      <div className="button">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 7.5, duration: 1 }}
        >
          <Button text={props.button__text} link={props.button__link} />
        </motion.div>
      </div>
    </div>
  );
};
export default Intro;
