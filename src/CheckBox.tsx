// CheckBox.tsx

import React from "react";
import "./styles/checkBox.css";

interface CheckBoxProps {
  checked?: boolean;
  onClick?(): void;
}

const CheckBox = ({ checked, onClick }: CheckBoxProps) => {
  return (
    <div>
      <div className="container" onClick={onClick}>
        <div className="checkIcon">{checked && "✔︎"}</div>
      </div>
    </div>
  );
};

export default CheckBox;
