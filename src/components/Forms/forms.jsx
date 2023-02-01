import React from "react";
import { Formik } from "formik";
import ButtonAction from "../button/Button";

function FormData() {
  return (
    <>
    <Formik
    initialValues={{
        name:"",
        email:"",
        addres:"",
        phone:"",
        
    }}
validate={(valores)=>{
    let notGreat={};

    if(!valores.name){
        notGreat.name="Por favor ingresa un nombre"
    }

    return notGreat;

}}

        onSubmit={(valores)=>{
           

        }}>




        {({handleSubmit,values,errors,handleChange,handleBlur})=>(


      <form className="container" onSubmit={handleSubmit}>
        
        <p> Completa los datos para ponernos en contacto</p>

        <div className="p-2 bg-light border">
          <label htmilFor="name">Nombre Completo</label>
          <input 
          type="text" 
          id="name" 
          name="name" 
          placeholder="" 
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          />
          {errors.name && <div className="h3"> {errors.name}</div>}
        </div>
//min 29 guia formik
        <div className="p-2 bg-light border"> 
          <label htmilFor="addres">Domicilio </label>
          <input 
          type="text" 
          id="addres" 
          name="addres" 
          placeholder="" 
          value={values.addres}
          onChange={handleChange}
          />
        </div>

        <div className="p-2 bg-light border">
          <label htmilFor="phone">Telefono de contacto </label>
          <input 
          type="text" 
          id="phone" 
          name="phone" 
          placeholder="" 
          value={values.phone}
          onChange={handleChange}
          />
        </div>

        <div className="p-2 bg-light border">
          <label htmilFor="email">Correo </label>
          <input 
          type="email" 
          id="email"
           name="email" 
          placeholder=""
          value={values.email}
          onChange={handleChange} 
          />
        </div>


       <button className="p-2 bg-light border" type="submit">Enviar</button>
      </form>
      )}
      </Formik>
    </>
  );
}

export default FormData;
