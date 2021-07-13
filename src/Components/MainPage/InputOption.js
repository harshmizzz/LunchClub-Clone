import React from "react";
import "./InputOption.css";

function InputOption({ Icon, color,fontSize }) {
  return (
    <div className="inputOption">
      <Icon style={{ color: color, fontSize:fontSize }} />
    </div>
  );
}

export default InputOption;
