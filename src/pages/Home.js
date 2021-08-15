import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Img from "../assets/img.JPG";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Hana from "../assets/hana.png";
import Family from "../assets/family.png";
import Mise from "../assets/mise.png";
import UX from "../assets/ux.svg";
import Engineer from "../assets/engineer.svg";
import Paint from "../assets/paint-palette.svg";
import Cir1 from "../assets/cir1.svg";
import Cir2 from "../assets/cir2.svg";
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

function FadeInWhenVisible({ children, delay }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.3 }}
      variants={{
        whileHover: { scale: 1.1 },
        hidden: { opacity: 0, scale: 0, y: 300 },
        show: {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: { duration: 1, ease: "backOut", delay: delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
function FadeInFireWork({ children, delay }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.3 }}
      variants={{
        hidden: { opacity: 0, scale: 0 },
        show: {
          opacity: 1,
          scale: 1,

          transition: { duration: 0.75, ease: "backOut", delay: 0.75 },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

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
      initial={{ opacity: 0, y: 20 }}
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
            backgroundColor: "#1B3447",
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
            src={Mise}
            style={{
              position: "absolute",
              bottom: -15,
              width: "22%",
              left: 0,
              filter: "drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.3))",
            }}
          />
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
          <img
            src={Cir1}
            style={{
              position: "absolute",
              top: "11rem",
              left: "10rem",
              width: "10rem",
              filter: "drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.3))",
            }}
          />

          <img
            src={Cir2}
            style={{
              position: "absolute",
              top: "6rem",
              left: "15rem",
              width: "10rem",
              filter: "drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.3))",
            }}
          />
          <img
            src={Cir2}
            style={{
              position: "absolute",
              top: "6rem",
              right: "20rem",
              width: "20rem",
              filter: "drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.3))",
            }}
          />
          <img
            src={Cir1}
            style={{
              position: "absolute",
              bottom: "5rem",
              right: "5rem",
              width: "20rem",
              filter: "drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.3))",
            }}
          />
          <div style={{ position: "relative" }}>
            <h2 style={{ marginBottom: "3rem", color: "#FFF" }}>
              我的專長 My Service
            </h2>
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
                },
              }}
              initial="hidden"
              animate="show"
            >
              <FadeInWhenVisible delay={0.25}>
                <div
                  style={{
                    width: "25rem",
                    height: "20rem",
                    margin: "0 2rem",
                    borderRadius: "10px",
                    boxShadow: "3px 3px 6px rgba(0,0,0,0.2)",
                    backgroundColor: "rgba(255,255,255,.95)",
                    padding: "2rem",
                  }}
                >
                  <div>
                    <img
                      src={UX}
                      style={{ width: "5rem", marginBottom: "2rem" }}
                    />
                  </div>
                  <div>
                    <h3>UI/UX 設計</h3>
                  </div>
                  <div>
                    <h5 style={{ color: "#999", lineHeight: "1.5rem" }}>
                      熟悉的UI/UX設計軟體為Adobe
                      XD，喜歡上Pinterest等圖片庫尋找靈感、學習排版，平常也會畫畫，然後把自己的作品隱藏在網頁中當作彩蛋
                    </h5>
                  </div>
                </div>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.5}>
                <div
                  style={{
                    width: "25rem",
                    height: "20rem",
                    margin: "0 2rem",
                    borderRadius: "10px",
                    boxShadow: "3px 3px 6px rgba(0,0,0,0.2)",
                    backgroundColor: "rgba(255,255,255,.95)",
                    padding: "2rem",
                  }}
                >
                  <div>
                    <img
                      src={Engineer}
                      style={{ width: "5rem", marginBottom: "2rem" }}
                    />
                  </div>
                  <div>
                    <h3>前端開發</h3>
                  </div>
                  <div>
                    <h5 style={{ color: "#999", lineHeight: "1.5rem" }}>
                      熟悉的前端框架為React、React native，最喜歡的套件是Framer
                      Motion，他是個很厲害的動畫套件，在大學就接觸滿多前端的任務
                    </h5>
                  </div>
                </div>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.75}>
                <div
                  style={{
                    width: "25rem",
                    height: "20rem",
                    margin: "0 2rem",
                    borderRadius: "10px",
                    boxShadow: "3px 3px 6px rgba(0,0,0,0.2)",
                    backgroundColor: "rgba(255,255,255,.95)",
                    padding: "2rem",
                  }}
                >
                  <div>
                    <img
                      src={Paint}
                      style={{ width: "5rem", marginBottom: "2rem" }}
                    />
                  </div>
                  <div>
                    <h3>美術設計</h3>
                  </div>
                  <div>
                    <h5 style={{ color: "#999", lineHeight: "1.5rem" }}>
                      會使用 Adobe Photoshop、Adobe
                      Aftereffect、Procreate，來設計圖、手繪繪圖、動態GIF，平常也喜歡隨手塗鴉
                    </h5>
                  </div>
                </div>
              </FadeInWhenVisible>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
