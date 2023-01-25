// import React from 'react'
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <>
      {props.sort ? (
        <button
          type={props.type || "button"}
          onClick={props.onClick}
          className={`${classes.btn} ${props.className}`}
        >
          {props.children}
        </button>
      ) : (
        <div>
          <button
            type={props.type || "button"}
            onClick={props.onClick}
            className={`${classes.btn} ${props.className}`}
          >
            {props.children}
          </button>
        </div>
      )}
    </>
  );
};

export default Button;
