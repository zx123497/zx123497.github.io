//third-party packages
import React from "react";

//material-ui
import { makeStyles } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Button from "@material-ui/core/Button";
//service

const useStyles = makeStyles((theme) => ({
  Input: {
    padding: 0,
    "&.invalid": {
      "& h5, & .MuiFormHelperText-root": {
        color: "red",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          color: theme.palette.text.primary,
          borderColor: "red",
        },
        "&:hover fieldset": {
          borderColor: "red",
        },
        "&.Mui-focused fieldset": {
          borderColor: "red",
        },
      },
    },
    "&.hide": {
      display: "none",
    },
    "& label.label input[type='file']": {
      position: "absolute",
      display: "none",
    },
    "& .fileUpload": {
      display: "flex",
      alignItems: "center",
      "& .fileName": {
        color: theme.palette.text.primary,
      },
    },
    "& .uploadBtn": {
      padding: 0,
      marginRight: 10,
    },
    "& .label": {
      cursor: "pointer",
      padding: "10px 20px",
      boxSizing: "border-box",
      "& span": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#FFF",
        "& .text": {
          marginLeft: "5px",
        },
      },
    },
    "& .MuiFormHelperText-root": {
      color: theme.palette.text.secondary,
      fontSize: 14,
    },
    "& .MuiSelect-outlined, & .MuiOutlinedInput-input": {
      paddingTop: "10px",
      paddingBottom: "10px",
    },
    "& .MuiOutlinedInput-inputMultiline": {
      padding: 0,
    },
    "& h5, & .MuiInputBase-input, & label": {
      color: theme.palette.text.primary,
    },
    "& .MuiRadio-root, & .MuiCheckbox-root": {
      color: theme.palette.text.secondary,
      "&.Mui-checked": {
        color: theme.palette.primary.main,
      },
    },
    "& .MuiFormGroup-root": {
      flexDirection: "row",
    },
    "& .MuiInput-underline": {
      "&:before": {
        borderBottomColor: theme.palette.action.disabled,
      },
      "&:after": {
        borderBottomColor: theme.palette.primary.main,
      },
      "&:hover:before": {
        borderBottomColor: theme.palette.text.primary,
      },
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        color: theme.palette.text.primary,
        borderColor: theme.palette.action.disabled,
      },
      "&:hover fieldset": {
        borderColor: theme.palette.text.primary,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.primary.main,
      },
    },
  },
}));

const Input = (props) => {
  const classes = useStyles();

  let inputElement = null;
  let isError = props.hasError || (props.touched && props.invalid);
  const inputClasses = [classes.Input, props.className];

  if (isError) {
    inputClasses.push("invalid");
  }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <TextField
          id={props.domId ? props.domId : props.id}
          error={isError}
          InputProps={props.elementConfig}
          disabled={props.disabled}
          value={props.value}
          onChange={(evt) => props.onChange(props.id, evt.target.value)}
          variant="outlined"
        />
      );
      break;
    case "textarea":
      inputElement = (
        <TextField
          error={isError}
          disabled={props.disabled}
          InputProps={props.elementConfig}
          rowsMax={10}
          multiline
          rows={6}
          value={props.value}
          onChange={(evt) => props.onChange(props.id, evt.target.value)}
          variant="outlined"
        />
      );
      break;
    case "select":
      inputElement = (
        <FormControl error={isError} disabled={props.disabled}>
          <Select
            value={props.value}
            onChange={(evt) => props.onChange(props.id, evt.target.value)}
            variant="outlined"
          >
            {props.elementConfig.options.map((option) => {
              return (
                <MenuItem
                  disabled={option.disabled}
                  key={option.value}
                  value={option.value}
                >
                  {option.displayValue}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      );
      break;
    case "radio":
      inputElement = (
        <FormControl
          error={isError}
          component="fieldset"
          disabled={props.disabled}
        >
          <RadioGroup
            value={props.value}
            onChange={(evt) => props.onChange(props.id, evt.target.value)}
          >
            {props.elementConfig.options.map((option) => {
              return (
                <FormControlLabel
                  key={option.value}
                  value={option.value}
                  control={<Radio color="primary" />}
                  label={option.displayValue}
                />
              );
            })}
          </RadioGroup>
        </FormControl>
      );
      break;
    case "checkbox":
      inputElement = (
        <FormControl
          required
          error={isError}
          component="fieldset"
          disabled={props.disabled}
        >
          <FormGroup>
            {props.elementConfig.options.map((option, index) => (
              <FormControlLabel
                control={
                  <Checkbox
                    key={index}
                    value={index}
                    color="primary"
                    checked={props.value[index]}
                    onChange={(evt) =>
                      props.onChange(
                        props.id,
                        props.value.map((item, index) => {
                          return index === parseInt(evt.target.value)
                            ? !item
                            : item;
                        })
                      )
                    }
                  />
                }
                label={option}
              />
            ))}
          </FormGroup>
        </FormControl>
      );
      break;
    case "file":
      inputElement = (
        <div className="fileUpload">
          <Button
            className="uploadBtn"
            variant="contained"
            color="primary"
            disabled={props.disabled}
          >
            <label className="label">
              <input
                disabled={props.disabled}
                onChange={(evt) =>
                  props.onChange(props.id, evt.target.files[0])
                }
                name={props.className}
                type="file"
                {...props.elementConfig}
              />
              <span>
                <CloudUploadIcon />
                <span className="text">{props.label}</span>
              </span>
            </label>
          </Button>
          {props.value ? (
            <a href={props.value.url} download>
              {props.value.name}
            </a>
          ) : (
            <div className="fileName">還沒有上傳檔案</div>
          )}
        </div>
      );
      break;

    default:
      inputElement = (
        <input
          {...props.elementConfig}
          disabled={props.disabled}
          error={isError}
          value={props.value}
        />
      );
  }
  return (
    <div className={`${props.id} ${inputClasses.join(" ")}`}>
      {props.label ? <h5>{props.label}</h5> : ""}
      {inputElement}
      <FormHelperText>
        {isError ? props.invalidText : props.helperText}
      </FormHelperText>
    </div>
  );
};

export default Input;
