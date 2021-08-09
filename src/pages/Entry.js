import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { io } from "socket.io-client";
import FilterVintageIcon from "@material-ui/icons/FilterVintage";
import Input from "@material-ui/core/Input";
const useStyles = makeStyles({
  root: {
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#0E073C",
  },
});
const socket = io.connect("http://192.168.2.20:8000");

const Home = (props) => {
  const [text, setText] = useState("");
  const classes = useStyles();
  const sendData = () => {
    if (text !== "") {
      props.history.push(`/hanabi/${text}`);
    }
  };

  return (
    <div className={classes.root}>
      <div
        style={{
          backgroundColor: "rgba(255,255,255,.2)",
          padding: "20px",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FilterVintageIcon style={{ margin: "0 1rem", color: "#FFF" }} />
          <h1 style={{ color: "red", margin: "0" }}>花</h1>
          <h1 style={{ color: "yellow", margin: "0" }}>火</h1>
          <h1 style={{ color: "pink", margin: "0" }}>大</h1>
          <h1 style={{ color: "aqua", margin: "0" }}>会</h1>
          <FilterVintageIcon style={{ margin: "0 1rem", color: "#FFF" }} />
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              color: "#FFF",
              borderColor: "#FFF",
              margin: "30px",
            }}
          >
            <Input
              style={{
                color: "#FFF",

                "&.MuiInput-underline:before": {
                  borderBottom: "1px solid #FFF",
                },
              }}
              value={text}
              placeholder="輸入暱稱"
              inputProps={{ "aria-label": "description" }}
              onChange={(evt) => {
                setText(evt.target.value);
              }}
            />
          </div>

          <Button
            onClick={sendData}
            style={{
              width: "100%",

              color: "#FFF",
              border: "2px rgba(255,255,255,.2) solid",
              marginTop: "20px",
            }}
          >
            加入
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
