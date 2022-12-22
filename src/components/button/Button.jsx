import React from "react";
//impor {userState} from "react";
//ahi estan los hooks
import "./button.css";

export default function Button(props) {
   

const [colorState, setColorState]= React.useState();
// const[colorState, setColorState]= React.useState("grey");

  let styleButton = {
    backgroundColor: colorState,
    padding: props.padding,
  };

function handleClick(event){
    console.log("event cick")
    setColorState("red");
   
}

  return (
    <button onClick={handleClick} style={styleButton} className="button">
      {props.children}
    </button>
  );
}
