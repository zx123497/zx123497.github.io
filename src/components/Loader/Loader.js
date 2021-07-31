import React from "react";
import { makeStyles } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
    Loader: {
        width: '100%',
        minWidth: '300px',
        padding: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        "& .text": {
            textAlign: 'center',
            color: theme.palette.text.secondary,
            marginLeft: 10
        }
    }
}));

const Loader = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.Loader}>
            <CircularProgress size="1rem" />
            <div className="text">載入中</div>
        </div>
    );
}

export default Loader;