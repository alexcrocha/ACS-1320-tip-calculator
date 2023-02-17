import React from "react";
import "./Display.css";

function Display({ bill, tip, split }) {
  const tipAmount = bill * (tip / 100);
  const total = bill * (1 + (tip / 100));
  const perPersonAmount = total / split;

  return (
    <div className="display">
      <p>Total: ${total ? total.toFixed(2) : "0.00"}</p>
      <p>Tip Amount: ${tipAmount ? tipAmount.toFixed(2) : "0.00"}</p>
      <p>Per person: ${perPersonAmount && perPersonAmount !== Infinity ? perPersonAmount.toFixed(2) : "0.00"}</p>
    </div>
  );
}

export default Display;
