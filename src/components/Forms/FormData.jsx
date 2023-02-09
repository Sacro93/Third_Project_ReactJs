import React, { useState } from "react";


function InputForm(props) {
  return (
    <div style={{ display: "flex", marginBottom: 8 }}>
      <label style={{ width: "100px", marginRight: 4 }}>{props.label}</label>
      <input
        value={props.value}
        name={props.name}
        type="text"
        onChange={props.onChange}
      />
    </div>
  );
}
export default function FormCheckout(props) {
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  let fieldsForm = Object.keys(userData);

  function onInputChange(evt) {
    let value = evt.target.value;
    let inputName = evt.target.name;

    let newState = { ...userData };
    
    newState[inputName] = value;
    setUserData(newState);
  }

    function onSubmit(evt) {
      evt.preventDefault();
      console.log(`Gracias por tu compra!`);
    }
    function formIsInvalid() {
      return !(
        userData.name !== "" &&
        userData.phone !== "" &&
        userData.email !== ""
      );
    }
    return (
      <form className="container h-100" onSubmit={onSubmit}>
        <div className="row d-flex justify-content-center align-items-center h-100 card mb-4">
          <div className="text-center ">
        <h1 className="small text-muted mb-2 pb-2">Completa con tus datos para contactarnos con vos:</h1>
        {fieldsForm.map((field) => (
          <InputForm 
       
            key={field}
            value={userData[field]}
            name={field}
            onChange={onInputChange}
            label={field}
            userData={userData}
          />
          
        ))}
        <div>
        <button
          onClick={(evt) => props.onCheckout(evt, userData)}
          disabled={formIsInvalid()}
          type="submit"
        >
          Crear orden
        </button>
  
        <button onClick={() => setUserData({ name: "", email: "", phone: "" })}>
          Limpiar
        </button>
        </div>
        </div>
        </div>
      </form>
    );
  }
