import { useState } from "react";

import Screen from "../ui/Screen";
import Button from "../ui/Button";
import classes from "./Calc.module.css";

const Calc = () => {
  const symbols = [
    "STO",
    "RCL",
    "RST",
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
  const [opr, setOpr] = useState("");

  const buttonClickHandler = (e) => {
    let element = e.target;
    let btnClicked = e.target.innerText;
    const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const operators = ["/", "*", "+", "-"];
    const func = [
      "STO",
      "RCL",
      "RST",
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
      nums.includes(parseInt(btnClicked));
    const oprKeys =
      (element.matches("p") || element.matches("div")) &&
      func.includes(btnClicked);

    const operations = () => {
      setValue2(value1);
      setValue1("");
    };

    const equals = (x) => {
      switch (x) {
        case "/":
          setValue1((prev) =>
            (parseFloat(value2) / parseFloat(prev)).toString()
          );
          setValue2(0);
          setOpr("=");
          break;
        case "*":
          setValue1((prev) =>
            (parseFloat(prev) * parseFloat(value2)).toString()
          );
          setValue2(0);
          setOpr("=");
          break;
        case "-":
          setValue1((prev) => {
            const result = parseFloat(value2) - parseFloat(prev);
            return Math.round(result * 100) / 100;
          });

          setValue2(0);
          setOpr("=");
          break;
        case "+":
          setValue1((prev) =>
            (parseFloat(prev) + parseFloat(value2)).toString()
          );
          setValue2(0);
          setOpr("=");
          break;
        default:
          console.log(`Learn how to do Math!`);
      }
    };

    if (operators.includes(btnClicked)) {
      setOpr(btnClicked);
    }

    if (numKeys) {
      if (opr === "=") {
        setValue1("");
        setOpr("");
      }
      setValue1((prev) => prev + parseInt(btnClicked));
    }
    if (oprKeys) {
      switch (btnClicked) {
        case "STO":
          console.log("Test");
          break;
        case "RCL":
          console.log("Test");
          break;
        case "RST":
          console.log("Test");
          break;
        case "AC":
          setValue1("");
          break;
        case "+/-":
          setValue1((prev) => prev * -1);
          break;
        case "%":
          setValue1((prev) => prev / 100);
          break;
        case "/":
          operations();
          break;
        case "*":
          operations();
          break;
        case "-":
          operations();
          break;
        case "+":
          operations();
          break;
        case "=":
          equals(opr);
          break;
        case ".":
          setValue1((prev) => prev + btnClicked);
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
