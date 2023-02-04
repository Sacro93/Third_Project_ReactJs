import React from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

 function ButtonAction(props) {
   

const [colorState, setColorState]= React.useState();

  return (
    
    
    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={props.onClick} >{props.children}</Button>
    </Stack>
  );
}

export default ButtonAction;
// 