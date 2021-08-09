import React, { useState, useEffect, useRef } from "react";
import Hana from "../assets/hana.png";
import Title from "../assets/title.png";
import Family from "../assets/family.png";
import Mise from "../assets/mise.png";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { io } from "socket.io-client";
import FilterVintageIcon from "@material-ui/icons/FilterVintage";
import Input from "@material-ui/core/Input";
import fx from "fireworks";
const useStyles = makeStyles({
  root: {
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#0E073C",
    overflow: "hidden",
  },
  chat: {
    backdropFilter: "blur(10px)",
  },
});

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
const socket = io.connect("https://damp-tor-27437.herokuapp.com/");

const Home = (props) => {
  const [text, setText] = useState("");
  const [cordinate, setCordinate] = useState({ x: 0, y: 0 });
  const [messages, setMessages] = useState([]);
  const colors = [getRandomColor(), getRandomColor(), getRandomColor()];
  useEffect(() => {
    socket.emit("joinRoom", {
      username: props.match.params.id,
      roomname: "first",
    });
  }, []);
  useEffect(() => {
    socket.on("message", (data) => {
      console.log(data);
      let temp = messages;
      temp.push({
        userId: data.userId,
        username: data.username,
        text: data.text,
      });
      setMessages([...temp]);
    });
    socket.on("hanabi", (data) => {
      console.log(data);
      everyonefire(data.cordin, data.color);
    });
  }, [socket]);
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // let range = (n) => [...new Array(n)];

  // range(6).map(() =>
  //   fx({
  //     x: Math.random(window.innerWidth / 2) + window.innerWidth / 4,
  //     y: Math.random(window.innerWidth / 2) + window.innerWidth / 4,
  //     colors: ["#cc3333", "#4CAF50", "#81C784"],
  //   })
  // );
  const firework = (cordin) => {
    // fx({
    //   x: cordin.x,
    //   y: cordin.y,
    //   colors: colors,
    // });
    socket.emit("firework", { cordin: cordin, colors: colors });
  };
  const everyonefire = (cordin, color) => {
    fx({
      x: cordin.x,
      y: cordin.y,
      colors: color,
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  const classes = useStyles();
  var a = 20 + "as";
  const sendData = () => {
    if (text !== "") {
      //   //encrypt the message here
      const ans = text;
      socket.emit("chat", ans);
      setText("");
    }
  };

  return (
    <div className={classes.root}>
      <div
        onClick={() => {
          console.log("fire");
          firework(cordinate);
        }}
        onMouseMove={(evt) => {
          setCordinate({
            x: evt.pageX,
            y: evt.pageY,
          });
        }}
        style={{
          width: "100%",
          flex: 1,
          overflow: "hidden",
          color: "#FFF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={Title}
          style={{
            filter: "drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.3))",
          }}
        />
      </div>
      <img
        src={Hana}
        style={{
          position: "fixed",
          bottom: 0,
          right: "20%",
          width: "15%",
          filter: "drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.3))",
        }}
      />
      <img
        src={Hana}
        style={{
          position: "fixed",
          bottom: 0,
          width: "20%",
          right: "45%",
          filter: "drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.3))",
        }}
      />
      <img
        src={Hana}
        style={{
          position: "fixed",
          bottom: 0,
          width: "22%",
          right: "30%",
          filter: "drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.3))",
        }}
      />
      <img
        src={Mise}
        style={{
          position: "fixed",
          bottom: -15,
          width: "22%",
          left: 0,
          filter: "drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.3))",
        }}
      />
      <img
        src={Family}
        style={{
          position: "fixed",
          bottom: -60,
          width: "30%",
          right: "50%",
          filter: "drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.3))",
        }}
      />

      <div
        className={classes.chat}
        style={{
          position: "fixed",
          bottom: 0,
          right: 0,
          padding: "15px",
          color: "#FFF",
          backgroundColor: "rgba(0,0,0,0.4)",

          borderRadius: "15px",
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
          <FilterVintageIcon style={{ margin: "0 1rem" }} />
          <h1 style={{ color: "red", margin: "0" }}>花</h1>
          <h1 style={{ color: "yellow", margin: "0" }}>火</h1>
          <h1 style={{ color: "pink", margin: "0" }}>大</h1>
          <h1 style={{ color: "aqua", margin: "0" }}>会</h1>
          <FilterVintageIcon style={{ margin: "0 1rem" }} />
        </div>
        <hr
          style={{ borderColor: "rgba(255,255,255,0.3)", lineHeight: "0.3rem" }}
        />
        <div style={{ height: "15rem", overflow: "auto", width: "30rem" }}>
          {messages.map((row) => (
            <div
              style={
                row.text === `${row.username} 也加入花火大會了，打聲招呼吧~`
                  ? { color: "orange" }
                  : row.text === `${row.username} 離開花火大會 ~`
                  ? { color: "rgba(255,255,255,0.3)" }
                  : {}
              }
            >
              {row.username} : {row.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div style={{ width: "100%", display: "flex" }}>
          <Input
            style={{ color: "#FFF", flex: 1 }}
            value={text}
            placeholder="輸入訊息"
            inputProps={{ "aria-label": "description" }}
            onChange={(evt) => {
              setText(evt.target.value);
            }}
            onKeyPress={(evt) => {
              if (evt.key === "Enter") {
                sendData();
              }
            }}
          />
          <Button
            onClick={sendData}
            style={{
              width: "100px",
              marginLeft: "20px",
              color: "#FFF",
              border: "2px rgba(255,255,255,.2) solid",
              marginTop: "20px",
            }}
          >
            傳送
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
