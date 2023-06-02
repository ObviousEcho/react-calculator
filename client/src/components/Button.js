import React from "react";

import classes from "./Button.module.css";

const Button = ({ digit }) => {
  return (
    <div className={classes.btn}>
      <p>{digit}</p>
    </div>
  );
};

export default Button;
