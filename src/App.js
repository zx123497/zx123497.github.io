import "./assets/sass/_normalize.scss";
import "./assets/sass/_typography.scss";
import "../node_modules/noty/lib/noty.css";
import { makeStyles } from "@material-ui/core/styles";
import { React, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./themes/theme";
import Header from "./parts/Navbar";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import Home from "./pages/Home";
import BubbleChartIcon from "@material-ui/icons/BubbleChart";
import FolderSpecialIcon from "@material-ui/icons/FolderSpecial";
import FaceIcon from "@material-ui/icons/Face";
const useStyles = makeStyles({
  paper: {
    "& .MuiPaper-root": {
      backgroundColor: "rgba(0,0,0,.4)",
      backdropFilter: "blur(5px)",
      color: "#ccc",
    },
  },
});

const App = () => {
  const appliedTheme = theme;
  const [drawer, setDrawer] = useState(false);
  const classes = useStyles();
  const styles = {
    paper: {
      backgroundColor: "blue",
    },
  };
  return (
    <BrowserRouter>
      <ThemeProvider theme={appliedTheme}>
        <div className={classes.App}>
          <Switch>
            <Route
              path="/"
              render={() => (
                <>
                  <Header
                    func={() => {
                      setDrawer(!drawer);
                    }}
                  />

                  <Drawer
                    className={classes.paper}
                    anchor="right"
                    open={drawer}
                    onClose={() => setDrawer(false)}
                  >
                    <div
                      style={{
                        width: "250px",
                        display: "flex",
                        padding: "2rem",
                        justifyContent: "space-around",
                      }}
                    >
                      <h3>M</h3>
                      <h3>E</h3>
                      <h3>N</h3>
                      <h3>U</h3>
                    </div>
                    <div
                      style={{
                        width: "250px",
                        display: "flex",
                        padding: "2rem",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        flexDirection: "column",
                      }}
                    >
                      <div
                        style={{
                          margin: "1rem 0 0  0",
                        }}
                      >
                        <Button style={{ color: "#FFF", fontSize: "18px" }}>
                          <BubbleChartIcon style={{ marginRight: "1rem" }} />
                          Procreate作品集
                        </Button>
                      </div>
                      <div
                        style={{
                          margin: "1rem 0 0 0 ",
                        }}
                      >
                        <Button style={{ color: "#FFF", fontSize: "18px" }}>
                          <FolderSpecialIcon style={{ marginRight: "1rem" }} />
                          網頁作品專案
                        </Button>
                      </div>
                      <div
                        style={{
                          margin: "1rem 0 0 0",
                        }}
                      >
                        <Button style={{ color: "#FFF", fontSize: "18px" }}>
                          <FaceIcon style={{ marginRight: "1rem" }} />
                          關於我
                        </Button>
                      </div>
                    </div>
                  </Drawer>

                  <main>
                    <Switch>
                      <Route path="/" exact component={Home} />
                    </Switch>
                  </main>
                </>
              )}
            />
          </Switch>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
