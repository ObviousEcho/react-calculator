import React from "react";

import Screen from "../ui/Screen";
import Button from "../ui/Button";
import classes from "./Calc.module.css";

const Calc = () => {
  const symbols = [
    "STO",
    "RCL",
    "CL",
    "AC",
    "+/-",
    "%",
    "/",
    7,
    8,
    9,
    "*",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    "+",
    0,
    ".",
    "=",
  ];

  return (
    <div className={classes.calc}>
      <Screen view="15" />
      <div className={classes.keys}>
        {symbols.map((symbol) => (
          <Button digit={symbol} />
        ))}
      </div>
    </div>
  );
};

export default Calc;
