import React from "react";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/");
  }, 1000);

  return (
    <div>
      <h1>Página no encontrada</h1>
    
    </div>
  );
}
export default PageNotFound;