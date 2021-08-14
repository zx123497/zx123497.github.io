import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import theme from "./../themes/theme";
import Img from "../assets/img.JPG";
import Donut from "../assets/donut.jpg";
import { motion } from "framer-motion";
const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    "@media (-width:768px)": {},
  },
});

const Home = () => {
  const [hobby, setHobby] = useState("畫畫 Procreate");
  useEffect(() => {
    setTimeout(() => {
      if (hobby === "畫畫 Procreate") {
        setHobby("彈吉他 Guitar");
      } else if (hobby === "彈吉他 Guitar") {
        setHobby("程式設計 programing");
      } else if (hobby === "程式設計 programing") {
        setHobby("畫畫 Procreate");
      }
    }, 3000);
  }, [hobby]);
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
            backgroundColor: "#333333",
            display: "flex",
            flex: 1,
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
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 2, ease: "easeInOut" },
                }}
              >
                Bubble Dragon's 小天地
              </motion.h2>
              <motion.h4
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 3, ease: "easeInOut" },
                }}
                style={{ color: "#ccc" }}
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
        </div>
        <div
          id="2"
          style={{
            backgroundColor: "#eeeeee",
            display: "flex",
            width: "100%",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={Donut}
            style={{
              minWidth: "50%",
              height: "auto",
              flex: 1,
              display: "flex",

              maxHeight: "100vh",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              color: "#333",
              flex: 1,
              padding: "3rem",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                minWidth: "max-content",

                alignItems: "stretch",
                flex: 1,
                display: "flex",
                width: "100%",
                flexDirection: "column",
              }}
            >
              <h2>我的大學 University</h2>
              <h4 style={{ color: "#777" }}>
                國立中央大學 National Central University{" "}
              </h4>
              <hr
                style={{
                  border: "1px rgba(0,0,0,0.1) solid",
                  margin: "3rem 0",
                }}
              />
              <h2>我的興趣 My Hobby</h2>
              <h4 style={{ color: "#777" }}>{hobby}</h4>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            height: "10rem",
            boxShadow: "0px -6px 10px rgba(0,0,0,0.3)",
          }}
        >
          <div
            style={{
              display: "flex",
              flex: 0.2,
              backgroundColor: "#eee",
              position: "relative",
              padding: "2rem",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <h3>我的聯絡資訊{a}</h3>
            <h4 style={{ color: "#666" }}> Information</h4>
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "0",
                height: "0",
                // backgroundColor: "#333",
                borderWidth: "5rem 3rem",
                borderColor: "transparent #333 transparent  transparent",
                borderStyle: "solid",
                filter: " drop-shadow(-8px 0px 6px rgba(0, 0, 0, 0.3))",
              }}
            ></div>
          </div>

          <div
            style={{
              display: "flex",
              flex: 1,
              backgroundColor: "#333",
              padding: "2rem",
            }}
          ></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
