import React from "react";

import Screen from "./Screen";
import Button from "./Button";
import classes from "./Calc.module.css";

const Calc = () => {
  return (
    <div className={classes.calc}>
      <Screen view="15" />
      <Button digit="5" />
    </div>
  );
};

export default Calc;
