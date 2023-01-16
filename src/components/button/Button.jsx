import React from "react";
//impor {userState} from "react";
//ahi estan los hooks
import "./button.css";

export default function Button(props) {
   

const [colorState, setColorState]= React.useState();
// const[colorState, setColorState]= React.useState("grey");

  // let styleButton = {
  //   backgroundColor: colorState,
  //   padding: props.padding,
  // };



  return (
    <button onClick={props.onClick} className="btn btn-primary btn-sm">
      {props.children}
    </button>
  );
}
// 