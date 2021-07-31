import React from "react";
import { makeStyles } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import Loader from "../../components/Loader/Loader";

const useStyles = makeStyles((theme) => ({
  Modal: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& .modalBody": {
      position: "relative",
      background: theme.palette.background.paper,
      outline: 0,
      color: theme.palette.text.primary,
      maxWidth: "90vw",
      maxHeight: 700,
      overflow: "hidden",
      borderRadius: "15px",
      "& .loadingBlock": {
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "0%",
        left: "0%",
        display: "flex",
        backgroundColor: `${theme.palette.background.paper}`,
      },
      "& .modalContent": {
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        padding: "2rem",
        overflow: "auto",
      },
    },
  },
}));

const MyModal = (props) => {
  const classes = useStyles();

  return (
    <Modal
      className={`${classes.Modal} modal ${props.className}`}
      open={props.opened}
      onClose={props.handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Fade in={props.opened}>
        <div className="modalBody">
          <div className="modalContent">{props.children}</div>
          {props.loading ? (
            <div className="loadingBlock">
              <Loader />
            </div>
          ) : (
            ""
          )}
        </div>
      </Fade>
    </Modal>
  );
};

export default MyModal;
