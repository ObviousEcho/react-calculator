import { useState, useEffect } from "react";

import classes from "./Button.module.css";

const Button = ({ digit }) => {
  // State to help render buttons conditionally by class name
  const [isMem, setIsMem] = useState(false);
  const [isOpr, setIsOpr] = useState(false);
  const [isAll, setIsAll] = useState(false);

  // Load upon initial render
  useEffect(() => {
    const lgBtn = ["STO", 0];
    const org = ["/", "*", "-", "+", "="];
    if (lgBtn.includes(digit)) {
      setIsMem(true);
      setIsOpr(false);
      setIsAll(false);
    }
    if (org.includes(digit)) {
      setIsAll(false);
      setIsMem(false);
      setIsOpr(true);
    }
    if (isMem === false && isOpr === false) {
      setIsAll(true);
    }
  }, [digit, isMem, isOpr, isAll]);

  // conditionally render buttons, either wide, orange, or normal
  return (
    <>
      {isMem && (
        <div className={classes.wide}>
          <p>{digit}</p>
        </div>
      )}
      {isOpr && (
        <div className={classes.org}>
          <p>{digit}</p>
        </div>
      )}
      {isAll && (
        <div className={classes.btn}>
          <p>{digit}</p>
        </div>
      )}
    </>
  );
};

export default Button;
