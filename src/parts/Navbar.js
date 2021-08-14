import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Grid } from "@material-ui/core";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  Navbar: {
    backgroundColor: "rgba(0,0,0,0.3)",
    backdropFilter: "blur(5px)",
    boxShadow: "0 0 0 rgba(0,0,0,0)",
    height: "70px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  middle: {
    display: "flex",

    alignItems: "center",
    margin: 8,
  },
  Brandname: {
    flexGrow: 1,
    display: "flex",

    alignItems: "center",
    margin: 8,
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.Navbar}>
      <Grid display="inline" container justify="center" alignItems="center">
        <NavLink to="/">
          <h3 style={{ color: "white" }}>Bubble Dragon's 個人網站</h3>
        </NavLink>

        <IconButton onClick={props.func}>
          <MenuIcon style={{ color: "#FFF" }} />
        </IconButton>
      </Grid>
    </AppBar>
  );
}
