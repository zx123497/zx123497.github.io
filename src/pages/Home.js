import React, { useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

import Title from "../assets/title.svg";
import HomeImage from "../assets/HomeImage.JPG";

import UX from "../assets/ux.svg";
import TutorGirl from "../assets/tutor_girl.gif";
import Engineer from "../assets/engineer.svg";
import Paint from "../assets/paint-palette.svg";
import Baseball from "../assets/baseball.jpg";
import Draw from "../assets/Draw.JPG";

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

const Home = () => {
  const ref = useRef(null);
  // const scrollToNext = () => {
  //   ref.current.scrollIntoView({ behavior: "smooth" });
  // };
  useEffect(() => {}, []);
  const classes = useStyles();
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
            background: `linear-gradient(
      rgba(0, 0, 0, 0.5) 50%, 
      rgba(0, 0, 0, 1) 95%
    ),no-repeat top center/100% url(${HomeImage})`,
            // backgroundColor: "#FFF",
            display: "flex",
            flex: 1,
            flexDirection: "column",
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "auto",
              height: "100vh",
              color: "#FFF",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 1, delay: 1, ease: "easeInOut" },
              }}
              style={{ width: "100%" }}
            >
              <img
                src={Title}
                style={{ width: "100%", height: "auto" }}
                alt="img"
              />
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, x: 100 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 1, delay: 1.5, ease: "easeInOut" },
              }}
              style={{ color: "#999" }}
            >
              Record my Life and Journey
            </motion.h3>
          </div>
          <div className={classes.bar}>
            <div
              style={{
                fontSize: "18px",
                color: "#FFF",
                letterSpacing: "2px",
                fontFamily: "-moz-initial",
                fontWeight: "bold",
              }}
            >
              Scroll
            </div>
            <div className="scroll"></div>
          </div>
        </div>
        {/* second section start */}
        <div
          id="2"
          style={{
            backgroundColor: "#eee",
            display: "flex",
            position: "relative",
            justifyContent: "center",
            width: "100%",
            padding: "5rem",
          }}
          ref={ref}
        >
          <div style={{ position: "relative" }}>
            <h2 style={{ marginBottom: "3rem", color: "#555" }}>
              我的專長 My Service
            </h2>
            <motion.div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
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
                    height: "20rem",
                    marginRight: "2rem",
                    borderRadius: "10px",
                    boxShadow: "3px 3px 6px rgba(0,0,0,0.2)",
                    backgroundColor: "rgba(255,217,24,.9)",
                    padding: "2rem",
                  }}
                >
                  <div>
                    <img
                      src={UX}
                      style={{ width: "5rem", marginBottom: "2rem" }}
                      alt="img"
                    />
                  </div>
                  <div>
                    <h3>UI/UX 設計</h3>
                  </div>
                  <div>
                    <h5 style={{ color: "#555", lineHeight: "1.5rem" }}>
                      熟悉的UI/UX設計軟體為Adobe
                      XD，喜歡上Pinterest等圖片庫尋找靈感、學習排版，平常也會畫畫，然後把自己的作品隱藏在網頁中當作彩蛋
                    </h5>
                  </div>
                </div>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.5}>
                <div
                  style={{
                    height: "20rem",
                    marginRight: "2rem",
                    borderRadius: "10px",
                    boxShadow: "3px 3px 6px rgba(0,0,0,0.2)",
                    backgroundColor: "rgba(100,100,100,.95)",
                    padding: "2rem",
                  }}
                >
                  <div>
                    <img
                      src={Engineer}
                      style={{ width: "5rem", marginBottom: "2rem" }}
                      alt="img"
                    />
                  </div>
                  <div>
                    <h3 style={{ color: "#FFF" }}>前端開發</h3>
                  </div>
                  <div>
                    <h5 style={{ color: "#ccc", lineHeight: "1.5rem" }}>
                      熟悉的前端框架為React、React native，最喜歡的套件是Framer
                      Motion，他是個很厲害的動畫套件，在大學就接觸滿多前端的任務
                    </h5>
                  </div>
                </div>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.75}>
                <div
                  style={{
                    height: "20rem",
                    marginRight: "2rem",
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
                      alt="img"
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
        {/* third section  */}
        <div className={classes.thirdSection}>
          <div>
            <h2 className="title">小小介紹一下我 A little bit Myself</h2>
            <div className="block">
              <div className="imgCirc">
                <img src={Draw} alt="img" style={{ width: "100%" }} />
              </div>
              <div className="desc">
                <h4>美術狂熱份子</h4>
                <p>
                  前系學會廣宣長，幫系上設計新生手冊，布告欄設計，以其各種系上的美宣活動，都是我們廣宣的工作。喜歡在Procreate畫畫，還有接觸Blender等建模軟體，想要建構出美麗的畫面，不過不太會排版
                  ...
                </p>
              </div>
            </div>
            <div className="block">
              <div className="desc">
                <h4>資管系壘隊員</h4>
                <p>
                  擔任的是一壘手，棒壘球大概是我唯一較擅長的運動，棒球真的是很好玩的運動!!!
                </p>
              </div>
              <div className="imgCirc">
                <img src={Baseball} alt="img" style={{ width: "100%" }} />
              </div>
            </div>
            <div className="block">
              <div className="imgCirc">
                <img src={Baseball} alt="img" style={{ width: "100%" }} />
              </div>
              <div className="desc">
                <h4>健身愛好者</h4>
                <p>
                  大一下開始接觸健身，到現在也持續接觸著健身運動，雖然因為疫情讓我的健身進度大幅落後，但夥還是會繼續努力!!!
                </p>
              </div>
            </div>
            <div className="block">
              <div className="desc">
                <h4>不專業吉他手</h4>
                <p>
                  國中到高中都是吉他社，對於音感算是有自信，不過都是自學的關係，沒有特別的進步，很喜歡日文流行樂，尤其愛繆。
                </p>
              </div>
              <div className="imgCirc">
                <img src={HomeImage} alt="img" style={{ width: "100%" }} />
              </div>
            </div>
          </div>
          <span className="img">
            <img src={TutorGirl} alt="img" style={{ width: "100%" }} />
          </span>
        </div>
      </div>
    </motion.div>
  );
};

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
  "@keyframes down": {
    "0%": {
      transform: "translateY(-200%)",
    },
    "100%": {
      transform: "translateY(0)",
    },
  },

  bar: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    left: 0,
    zIndex: 3,
    textAlign: "center",
    "& .scroll": {
      height: "60px",
      margin: " 0.6rem auto 0",
      width: "2px",
      overflow: "hidden",
      position: "relative",
      background: "#000",
    },
    "& .scroll::after": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      left: 0,
      width: "2px",
      height: "100%",
      backgroundColor: "#750DFC",
      animation: `$down 2s cubic-bezier(0.6, 0, 0.2, 1) 1s infinite`,
      willChange: "transform",
    },
  },
  thirdSection: {
    display: "flex",
    backgroundColor: "#FFF",
    position: "relative",
    justifyContent: "center",
    padding: "5rem",
    "& .title": {
      color: "#555",
      textAlign: "center",
      marginBottom: "3rem",
    },
    "& .img": {
      position: "absolute",
      bottom: 0,
      right: "5%",
      width: "20%",
      display: "flex",
    },
    "& .desc": {
      flex: 1,
      color: "#555",
    },
    "& .block": {
      display: "flex",
      margin: "1rem auto",
      width: "50%",
      padding: "1rem 3rem",
      justifyContent: "center",
      alignItems: "center",
    },
    "& .imgCirc": {
      margin: "0 2rem",
      display: "flex",
      width: "7rem",
      height: "7rem",
      borderRadius: "50%",
      overflow: "hidden",
      boxShadow: "3px 3px 6px rgba(0,0,0,0.3)",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#000",
    },
    "& .imgCirc:hover": {
      transform: "scale(1.1)",
      transition: "all 400ms cubic-bezier(.47,3,.6,.8) ",
    },
  },
});

export default Home;
