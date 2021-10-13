import "./assets/sass/_normalize.scss";
import "./assets/sass/_typography.scss";
import "../node_modules/noty/lib/noty.css";
import { makeStyles } from "@material-ui/core/styles";
import { React, useState, Suspense, lazy } from "react";
import { NavLink, Route, Switch, useLocation } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./themes/theme";
import Header from "./parts/Navbar";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
// import Home from "./pages/Home";
// import Hanabi from "./pages/Hanabi";
// import Entry from "./pages/Entry";
import BubbleChartIcon from "@material-ui/icons/BubbleChart";
import FolderSpecialIcon from "@material-ui/icons/FolderSpecial";
import FaceIcon from "@material-ui/icons/Face";
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import { AnimatePresence } from "framer-motion";
import Loader from "./components/Loader/Loader";
import Footer from "./parts/Footer";
import { StepIcon } from "@material-ui/core";
const useStyles = makeStyles({
  "@keyframes fadeIn": {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  },
  paper: {
    "& .MuiPaper-root": {
      backgroundColor: "rgba(0,0,0,.4)",
      backdropFilter: "blur(5px)",
      color: "#ccc",
    },
  },
  App: {
    "& .suspense_loader": {
      opacity: 0,
      animationFillMode: "forwards",
      animation: "$fadeIn 1s",
      animationDelay: "0.75s",
    },
  },
});

const Home = lazy(() => import("./pages/Home"));
const Entry = lazy(() => import("./pages/Entry"));
const Hanabi = lazy(() => import("./pages/Hanabi"));
const Partner = lazy(() => import("./pages/Partner"));

const App = (props) => {
  const appliedTheme = theme;

  const [drawer, setDrawer] = useState(false);
  const classes = useStyles();
  const location = useLocation();
  return (
    <ThemeProvider theme={appliedTheme}>
      <div className={`${classes.App} App`}>
        <Switch>
          <Route
            path="/"
            render={(props) => (
              <>
                <Header
                  {...props}
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
                      <NavLink 
                      onClick={() => setDrawer(false)} 
                      style={{ color: "#FFF", fontSize: "18px", display:"flex", alignItems:"center" }} 
                      to="/partner"
                      >
                        <BubbleChartIcon style={{ marginRight: "1rem" }} />
                        花火大會
                      </NavLink>
                    </div>
                    <div
                      style={{
                        margin: "1rem 0 0 0 ",
                      }}
                    >
                      <NavLink 
                      onClick={() => setDrawer(false)} 
                      style={{ color: "#FFF", fontSize: "18px", display:"flex", alignItems:"center" }} 
                      to="/partner"
                      >
                        <FolderSpecialIcon style={{ marginRight: "1rem" }} />
                        網頁作品專案
                      </NavLink>
                    </div>
                    <div
                      style={{
                        margin: "1rem 0 0 0",
                      }}
                    >
                      <NavLink 
                      onClick={() => setDrawer(false)} 
                      style={{ color: "#FFF", fontSize: "18px", display:"flex", alignItems:"center" }} 
                      to="/partner"
                      >
                        <FaceIcon style={{ marginRight: "1rem" }} />
                        關於我
                      </NavLink>
                    </div>

                    <div style={{margin: "1rem 0 0 0",}}>
                      <NavLink
                      onClick={() => setDrawer(false)} 
                      style={{ color: "#FFF", fontSize: "18px", display:"flex", alignItems:"center" }} 
                      to="/partner"
                      >
                        <AssignmentIndIcon style={{ marginRight: "1rem" }} />
                        合作夥伴
                      </NavLink>
                    </div>

                  </div>
                </Drawer>

                <main
                  style={{
                    backgroundColor: "#333",
                  }}
                >
                  <Suspense
                    fallback={
                      <div
                        style={{
                          width: "100%",
                          height: "100vh",
                          backgroundColor: "#333",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Loader className="suspense-loader" />
                      </div>
                    }
                  >
                    <AnimatePresence exitBeforeEnter>
                      <Switch
                        location={location}
                        key={location.pathname.split("/")[1]}
                      >
                        <Route path="/" exact component={Home} />
                        <Route path="/entry" exact component={Entry} />
                        <Route path="/hanabi/:id" exact component={Hanabi} />
                        <Route path="/partner" exact component={Partner}/>
                      </Switch>
                    </AnimatePresence>
                  </Suspense>
                  <Footer />
                </main>
              </>
            )}
          />
        </Switch>
      </div>
    </ThemeProvider>
  );
};

export default App;
