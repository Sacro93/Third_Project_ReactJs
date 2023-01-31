import React from "react";
import "./button.css";

 function Button(props) {
   

const [colorState, setColorState]= React.useState();

  return (
    <button onClick={props.onClick} className="btn btn-primary btn-sm">
      {props.children}
    </button>
  );
}

export default Button
// 