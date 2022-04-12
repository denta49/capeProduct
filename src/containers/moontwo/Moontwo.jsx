import React from "react";
import { Article, Button, Specialtext } from "../../components";
import "./moontwo.css";
import { motion } from "framer-motion";

const Moontwo = (props) => {
  return (
    <div className="contain">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <div className="art">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <Specialtext text={props.first__text} />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 0.5 }}
      >
        <Article text={props.second__text} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.5, duration: 0.5 }}
      >
        <motion.div className="icon" whileHover={{ scale: 1.4 }}>
          <a
            href="https://www.linkedin.com/in/przemys%C5%82aw-wojenka-53a973176/"
            class="fa fa-linkedin"
          ></a>
        </motion.div>
        <div className="butt">
          <Button text={props.other__button__text} link={props.button__link} />
        </div>
      </motion.div>
    </div>
  );
};
export default Moontwo;
