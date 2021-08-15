import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Img from "../assets/img.JPG";
import { motion } from "framer-motion";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Hana from "../assets/hana.png";
import Family from "../assets/family.png";
import Mise from "../assets/mise.png";
const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    "@media (-width:768px)": {},
    "& .nextBut": {
      width: "50px",
      height: "50px",
      position: "absolute",
      backgroundColor: "rgba(255,255,255,0.4)",
      bottom: 10,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "50%",
      left: "50%",
    },
  },
});

const Home = () => {
  const ref = useRef(null);
  const scrollToNext = () => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {}, []);
  const classes = useStyles();
  var a = 20 + "as";
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      exit={{
        opacity: 0,
        y: -100,
        transition: {
          ease: "easeIn",
        },
      }}
    >
      <div className={classes.root}>
        <div
          style={{
            backgroundColor: "#fff",
            display: "flex",
            flex: 1,
            position: "relative",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "auto",

              color: "#FFF",
            }}
          >
            <div
              style={{
                minWidth: "max-content",
                padding: "2rem",
                flex: 1,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <motion.h2
                initial={{ opacity: 0, x: -100 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1, delay: 1, ease: "easeInOut" },
                }}
                style={{ color: "#333", fontWeight: "bold" }}
              >
                <span style={{ color: "#55C4F0" }}>Bubble Dragon's</span> 小天地
              </motion.h2>
              <motion.h4
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1, delay: 1.5, ease: "easeInOut" },
                }}
                style={{ color: "#999" }}
              >
                Record my Life and Journey
              </motion.h4>
            </div>
          </div>
          <img
            src={Img}
            style={{
              minWidth: "50%",
              height: "auto",
              flex: 1,
              display: "flex",
              maxHeight: "100vh",
            }}
          />
          <motion.div
            whileHover={{
              scale: 1.1,
              rotate: 360,
              transition: { duration: 0.5, ease: "easeOut" },
            }}
            initial={{ y: -50, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { delay: 2, duration: 1 },
            }}
            className={`nextBut`}
            onClick={scrollToNext}
          >
            <ExpandMoreIcon style={{ fontSize: "30px", color: "#FFF" }} />
          </motion.div>
        </div>
        <div
          id="2"
          style={{
            backgroundColor: "#ddd",
            display: "flex",
            position: "relative",
            justifyContent: "center",
            width: "100%",
            height: "100vh",
            padding: "15rem",
          }}
          ref={ref}
        >
          <img
            src={Hana}
            style={{
              position: "absolute",
              bottom: 0,
              right: "20%",
              width: "15%",
              filter: "drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.3))",
            }}
          />
          <img
            src={Hana}
            style={{
              position: "absolute",
              bottom: 0,
              width: "20%",
              right: "45%",
              filter: "drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.3))",
            }}
          />
          <img
            src={Hana}
            style={{
              position: "absolute",
              bottom: 0,
              width: "22%",
              right: "30%",
              filter: "drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.3))",
            }}
          />

          <img
            src={Family}
            style={{
              position: "absolute",
              bottom: -60,
              width: "30%",
              right: "50%",
              filter: "drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.3))",
            }}
          />
          <div>
            <h2 style={{ marginBottom: "3rem" }}>我的專長</h2>
            <motion.div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
              variants={{
                hidden: { opacity: 0, y: 0 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.5 },
                },
              }}
              initial="hidden"
              animate="show"
            >
              <motion.div
                variants={{
                  whileHover: { scale: 1.1 },
                  hidden: { opacity: 0, scale: 0, y: 300 },
                  show: {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: { duration: 1, ease: "backOut" },
                  },
                }}
                style={{
                  width: "25rem",
                  height: "20rem",
                  margin: "0 2rem",
                  borderRadius: "10px",
                  boxShadow: "3px 3px 6px rgba(0,0,0,0.2)",
                  backgroundColor: "#FFF",
                }}
              ></motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0, y: 300 },
                  show: {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: { duration: 1, ease: "backOut" },
                  },
                }}
                style={{
                  width: "25rem",
                  height: "20rem",
                  margin: "0 2rem",
                  borderRadius: "10px",
                  boxShadow: "3px 3px 6px rgba(0,0,0,0.2)",
                  backgroundColor: "#FFF",
                }}
              ></motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0, y: 300 },
                  show: {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: { duration: 1, ease: "backOut" },
                  },
                }}
                style={{
                  width: "25rem",
                  height: "20rem",
                  margin: "0 2rem",
                  borderRadius: "10px",
                  boxShadow: "3px 3px 6px rgba(0,0,0,0.2)",
                  backgroundColor: "#FFF",
                }}
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
