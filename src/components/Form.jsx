import React from "react";

const Form = () => {
  return (
    <div className="container">
      <h2>Formulario</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre:
          </label>
          <input type="text" className="form-control" id="nombre" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input type="email" className="form-control" id="email" />
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Form;
