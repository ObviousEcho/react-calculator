import { useState } from "react";

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

  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState(0);

  const buttonClickHandler = (e) => {
    let element = e.target;
    let operator = e.target.innerText;
    const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const func = [
      "STO",
      "RCL",
      "CL",
      "AC",
      "+/-",
      "%",
      "/",
      "*",
      "-",
      "+",
      "=",
      ".",
    ];

    const numKeys =
      (element.matches("p") || element.matches("div")) &&
      nums.includes(parseInt(operator));
    const oprKeys =
      (element.matches("p") || element.matches("div")) &&
      func.includes(operator);

    if (numKeys) {
      setValue1((prev) => prev + operator);
    }
    if (oprKeys) {
      console.log(operator);
      switch (operator) {
        case "STO":
          console.log("Test");
          break;
        case "RCL":
          console.log("Test");
          break;
        case "CL":
          setValue1("");
          break;
        case "AC":
          console.log("Test");
          break;
        case "+/-":
          console.log("Test");
          break;
        case "%":
          console.log("Test");
          break;
        case "/":
          console.log("Test");
          break;
        case "*":
          console.log("Test");
          break;
        case "-":
          setValue1("");
          break;
        case "+":
          console.log("Test");
          break;
        case "=":
          console.log("Test");
          break;
        case ".":
          setValue1((prev) => prev + operator);
          break;
        default:
          console.log(`Learn how to do Math!`);
      }
    }
  };

  return (
    <div className={classes.calc}>
      <Screen view={value1} />
      <div className={classes.keys} onClick={buttonClickHandler}>
        {symbols.map((symbol) => (
          <Button key={symbol} digit={symbol} />
        ))}
      </div>
    </div>
  );
};

export default Calc;
