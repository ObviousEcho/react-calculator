import React from "react";

import classes from "./Screen.module.css";

const Screen = ({ view, memory }) => {
  return (
    <div className={classes.screen}>
      {memory && <p className={classes.memory}>M</p>}
      <p className={classes.display}>{view}</p>
    </div>
  );
};

export default Screen;
