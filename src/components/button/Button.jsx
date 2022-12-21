import React from "react"
//ahi estan los hooks
import "./button.css";

export default function Button(props) {
   

let[colorState, setColorState]= React.useState();


  let styleButton = {
    backgroundColor: colorState,
    padding: props.padding,
  };

function handleClick(event){
    console.log("evento cick")
    setColorState("red");
   
}

  return (
    <button onClick={handleClick} style={styleButton} className="button">
      {props.children}
    </button>
  );
}
