import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import ButtonAction from "../button/Button";
import { useState } from "react";

function FormData() {
  const [formSend, SetFormSend] = useState(false);

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          address: "",
          phone: "",
        }}
        validate={(valores) => {
          let notGreat = {};

          if (!valores.name) {
            notGreat.name = "Por favor ingresa correctamente";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
            notGreat.name = "El nombre solo puede contener letras y espacios";
          }

          if (!valores.email) {
            notGreat.email = "Por favor ingresa un nombre";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.email
            )
          ) {
            notGreat.email = "Verificar ";
          }
          return notGreat;

        }}
        //mandar a una base de datos
        onSubmit={( { resetForm }) => {
          resetForm();
          console.log("formulario enviado");
          SetFormSend(true);
          setTimeout(() => SetFormSend(false), 3000);
        }}
      >
        {({  errors }) => (
          <Form className="container">
            <p> Completa los datos para ponernos en contacto</p>
            <div className="p-2 bg-light border">
              <label htmilFor="name">Nombre Completo</label>
              <Field 
              type="text" 
              id="name" 
              name="name" 
              placeholder="John Doe"
               />
              <ErrorMessage
                name="name"
                component={() => <div className="h3"> {errors.name}</div>}
              />
            </div>

            <div className="p-2 bg-light border">
              <label htmilFor="addres">Domicilio </label>
              <Field 
              type="text" id="addres" 
              name="address" 
              placeholder="Jose  Ingenieros 1111"
               />
              <ErrorMessage
                name="addres"
                component={() => <div className="h3"> {errors.address}</div>}
              />
            </div>
            <div className="p-2 bg-light border">
              <label htmilFor="phone">Telefono de contacto </label>
              <Field 
              type="number" 
              id="phone" 
              name="phone" 
              placeholder="11-9999-5555" 
              />
              <ErrorMessage
                name="phone"
                component={() => <div className="h3"> {errors.phone}</div>}
              />
            </div>
            <div className="p-2 bg-light border">
              <label htmilFor="email">Correo </label>
              <Field 
              type="email" 
              id="email" 
              name="email" 
              placeholder="xxxxx@xxxx.com" 
              />
              <ErrorMessage
                name="email"
                component={() => <div className="h3"> {errors.email}</div>}
              />
            </div>
            
            {formSend && <p>Formulario Enviado con exito!</p>}
            <Field name="mensaje" as="textarea" placeholder="Mensaje adicional"/>
            <div>
            <button className="p-2 bg-light border" type="submit">
              Enviar
            </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default FormData;
