import React from "react";

import classes from "./Screen.module.css";

const Screen = ({ view, memory }) => {
  // conditionally render "M" if memory, and specify class if memory
  return (
    <div className={`${classes.screen} ${memory && classes[`justify-space`]}`}>
      {memory && <p className={classes.memory}>M</p>}
      <p className={classes.display}>{view}</p>
    </div>
  );
};

export default Screen;
