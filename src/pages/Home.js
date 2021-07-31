import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import theme from "./../themes/theme";
import Img from "../assets/img.JPG";
const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    "& .card": {
      boxShadow: "0 3px 10px rgba(0,0,0,0.2)",
      width: "20%",
      minWidth: "max-content",
      margin: theme.spacing(2),
      "&:hover": {
        transform: "scale(1.05)",
        transition: "0.5s",
      },
    },
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(5),
    right: theme.spacing(5),
  },
  Modal: {
    "& .addBtn": {
      width: "100%",
      marginTop: "1rem",
      backgroundColor: theme.palette.primary.main,
      color: "#FFF",
    },
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div
        style={{
          backgroundColor: "#333333",
          display: "flex",
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
          <h2>Bubble Dragon's 小天地</h2>
          <h4>Record my Life and Journey</h4>
        </div>
        <img src={Img} style={{ width: "auto", height: "100vh" }} />
      </div>
      <div
        style={{
          backgroundColor: "#eeeeee",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img src={Img} style={{ width: "auto", height: "100vh" }} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "auto",
            color: "#333",
          }}
        >
          <h2>My Hobby</h2>
          <h4>Procreate, guitar, and coding!</h4>
        </div>
      </div>
    </div>
  );
};

export default Home;
