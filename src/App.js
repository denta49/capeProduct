import React from "react";
import { Intro, Moon, Transfer, Moontwo } from "./containers";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.5, duration: 0.5 },
  },
  exit: {
    opacity: 0,
    transition: { delay: 0.5, duration: 1.5 },
  },
};

function App() {
  const location = useLocation();
  return (
    <div className="app">
      <AnimatePresence>
        <Routes location={location} key={location.key}>
          <Route
            path="/"
            element={
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="normal__text bgIntro"
              >
                <section className="home">
                  <Intro
                    first__line="Welcome in "
                    first__special="MoonTrain."
                    second__line="We are first in the "
                    second__special="History."
                    third__line="We are first on the "
                    third__special="Planet."
                    fourth__line="We are first in the "
                    fourth__special="Universe."
                    fifth__line="Start your journey with us."
                    button__text="Start"
                    button__link="/moon"
                  />
                </section>
              </motion.div>
            }
          />
          <Route
            path="/moon"
            element={
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bgMoon"
              >
                <section className="moonsite">
                  <Moon
                    first__text="Forget rockets."
                    second__text="We are just starting to build a rail line directly to the moon."
                    third__text="Literally."
                    fourth__text="We are the first company to take you to the moon."
                    fifth__text="but..."
                    sixth__text="...we need 932 years more to finish it."
                    seventh__text="It’s a pitty u can not transfer yourself 923 years ahead. If only you had time machine.. Ooh, you do have one? That’s even better…"
                    donate__button__text="Transfer me"
                    button__link="/transfer"
                  />
                </section>
              </motion.div>
            }
          />
          <Route
            path="/transfer"
            element={
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bgTransfer"
              >
                <section className="transfersite">
                  <Transfer
                    text__one="Do not lie to us..."
                    text__two="No one has a time machine."
                    link="/moontwo"
                    text="I wont lie again"
                  />
                </section>
              </motion.div>
            }
          />
          <Route
            path="/moontwo"
            element={
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bgMoonTwo"
              >
                <section className="moontwosite">
                  <Moontwo
                    first__text="And since no one owns a time machine…"
                    second__text="You can hire me in the meantime"
                    donate__button__text="Transfer"
                    other__button__text="Back to the beginning"
                    button__link="/"
                  />
                </section>
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
export default App;
