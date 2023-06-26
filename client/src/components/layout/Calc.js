import { useState, useEffect, useCallback } from "react";

import Screen from "../ui/Screen";
import Button from "../ui/Button";
import classes from "./Calc.module.css";

const Calc = () => {
  // Array containing button symbols to map over
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

  // State:
  // value1 displays to screen
  // value2 used for math operations
  // opr used to determine math operation (+, -, x, /)
  // isMem used to display "M" if memory
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState(0);
  const [opr, setOpr] = useState("");
  const [isMem, setIsMem] = useState(false);

  // Arrays used for comparison with btn clicked to perform specific operations
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

  // Load memory storage upon initial render with useEffect
  const loadStorage = useCallback(async () => {
    try {
      const response = await fetch("/api/memory", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      const data = result.data[0].memory_slot;

      if (parseInt(data) !== 0) {
        setIsMem(true);
      }
    } catch (err) {
      console.error(`Error: ${err}`);
    }
  }, []);

  useEffect(() => {
    loadStorage();
  }, [loadStorage]);

  // Retreive saved memory with RCL button
  const getStorage = async () => {
    try {
      const response = await fetch("/api/memory", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      const data = result.data[0].memory_slot;

      if (data !== 0) {
        setValue1(data);
      }
    } catch (err) {
      setValue1(`Error`);
    }
  };

  // Set memory with STO button
  const updateStorage = async (data) => {
    try {
      const response = await fetch("/api/memory", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ memory_slot: data }),
      });

      await response.json();
      setValue1(data);
    } catch (err) {
      setValue1("Error");
    }
  };

  // Function sets state values to perform math operations
  const operations = (str) => {
    switch (str) {
      // Postive switch case allows for successive sums to chain togethor
      case "+":
        setValue2((prev) => (parseFloat(prev) + parseFloat(value1)).toString());
        setValue1("");
        break;
      default:
        setValue2(value1);
        setValue1("");
    }
  };
  // Function performs math operations when "/", "*", "-", or "+" key is pressed
  const equals = (x) => {
    switch (x) {
      case "/":
        const divResult = parseFloat(value2) / parseFloat(value1);
        if (divResult.toString().length > 12) {
          setValue1(divResult.toFixed(12));
        } else {
          setValue1(divResult.toString());
        }
        setValue2(0);
        setOpr("=");
        break;
      case "*":
        const mulResult = parseFloat(value2) * parseFloat(value1);
        if (mulResult.toString().length > 12) {
          setValue1(mulResult.toFixed(2));
        } else {
          setValue1(mulResult.toString());
        }
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
        setValue1((prev) => (parseFloat(prev) + parseFloat(value2)).toString());
        setValue2(0);
        setOpr("=");
        break;
      default:
        console.log(`Learn how to do Math!`);
    }
  };

  // Functions are processed upon specific button click
  const equationSwitch = (str) => {
    switch (str) {
      case "STO":
        updateStorage(value1);
        setIsMem(true);
        setOpr("=");
        break;
      case "RCL":
        getStorage();
        break;
      case "RST":
        updateStorage("0");
        setIsMem(false);
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
        operations(str);
        break;
      case "*":
        operations(str);
        break;
      case "-":
        operations(str);
        break;
      case "+":
        operations(str);
        break;
      case "=":
        equals(opr);
        break;
      case ".":
        setValue1((prev) => prev + str);
        break;
      default:
        console.log(`Learn how to do Math!`);
    }
  };

  // Event listener
  const buttonClickHandler = (e) => {
    const element = e.target;
    const btnClicked = e.target.innerText;

    // Event delegation
    const numKeys =
      (element.matches("p") || element.matches("div")) &&
      nums.includes(parseInt(btnClicked));
    const oprKeys =
      (element.matches("p") || element.matches("div")) &&
      func.includes(btnClicked);

    // Sets "opr" state to help manage state values
    if (operators.includes(btnClicked)) {
      setOpr(btnClicked);
    }

    // Sets value1 to number clicked, screen clears value if after an = operation
    if (numKeys) {
      if (opr === "=") {
        setValue1("");
        setOpr("");
      }
      setValue1((prev) => {
        // Prevents screen from displaying digits longer than length of screen
        const result = prev + parseInt(btnClicked);
        const resultToString = result.toString().length > 13;
        if (resultToString) {
          return result.substring(0, 13);
        } else {
          return result;
        }
      });
    }
    // Performs function based upon which operation was clicked, screen clears value if opr is "="
    if (oprKeys) {
      if (opr === "=") {
        setValue1("");
        setOpr("");
      }

      // Prevents multiple "." from displaying to screen
      if (btnClicked === "." && value1.includes(".")) {
        return;
      }

      equationSwitch(btnClicked);
    }
  };

  return (
    <div className={classes.calc}>
      <Screen view={value1} memory={isMem} />
      <div className={classes.keys} onClick={buttonClickHandler}>
        {symbols.map((symbol) => (
          <Button key={symbol} digit={symbol} />
        ))}
      </div>
    </div>
  );
};

export default Calc;
