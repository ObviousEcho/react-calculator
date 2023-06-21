import React from "react";

import classes from "./Screen.module.css";

const Screen = ({ view, isMem }) => {
  return (
    <div className={classes.screen}>
      <p className={classes.display}>{view}</p>
    </div>
  );
};

export default Screen;
