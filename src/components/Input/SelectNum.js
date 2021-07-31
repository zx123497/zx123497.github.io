import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
    SelectNum: {
        padding: "10px 0",
        color: theme.palette.text.primary,
        "& .MuiSelect-outlined.MuiSelect-outlined, & .MuiOutlinedInput-input": {
            paddingTop: "12px",
            paddingBottom: "12px"
        },
        "& .select-num-pairs": {
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            "& .addBtn":{
                marginBottom: 10,
                height: 40,
                color: "#FFF",
                borderRadius: "50px"
            }
        },
        "& .select-num-pair": {
            position: "relative",
            display: "flex",
            flexGrow: 0,
            alignItems: "center",
            margin: "0 25px 5px 0",
            "& >div": {
                padding: 0
            },
            "& .select": {
                marginRight: "5px",
                "& .MuiInputBase-root": {
                    maxWidth: 200,
                }
            },
            "& .num": {
                width: 75,
                marginRight: "5px"
            },
            "& .deleteBtn": {
                position: "absolute",
                color: theme.palette.text.primary,
                top: -5,
                right: -20
            }
        }
    }
}));

const SelectNum = (props) => {
    const classes = useStyles(props);
    return (
        <div className={classes.SelectNum}>
            <h5>{props.label}</h5>
            <div className="select-num-pairs">
                {props.value.map(({id: key, value}) => (
                    <div key={key} className="select-num-pair">
                        <Select
                            value={key}
                            onChange={(evt) => props.onChange(props.id, "update", "select", evt.target.value, key)}
                            className="select"
                            variant="outlined"
                        >
                            {props.elementConfig.options.map(option => {
                                return <MenuItem disabled={option.disabled} key={option.value} value={option.value}>
                                    {option.displayValue}
                                </MenuItem>
                            })}
                        </Select>
                        <TextField
                            className="num"
                            type="number"
                            value={value}
                            inputProps={{...props.elementConfig.numConfig}}
                            onChange={(evt) => props.onChange(props.id, "update", "num", evt.target.value, key)}
                            variant="outlined"
                        />
                        <div>小時</div>
                        <IconButton onClick={() => props.onChange(props.id, "delete", key)} className="deleteBtn" size="small">
                            <CancelIcon fontSize="inherit" />
                        </IconButton>
                    </div>
                ))}
                <Button className="addBtn" variant="contained" color="primary" onClick={() => props.onChange(props.id, "add")}>新增類別</Button>
            </div>
        </div>
    )
}

export default SelectNum