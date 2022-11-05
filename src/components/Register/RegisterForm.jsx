import { useState } from "react";

const RegisterForm = () => {
  //este useState va a controlar el input llamado firstname
  const [firstname, setFirstName] = useState("");

  //funcion manejadora del evento onChange en el input firstname
  const handleFirstName = ({ target }) => {
    setFirstName( target.value );
    console.log(firstname);
  };

  //funcion handle para las pruebas del boton Enviar
  const handleEnviar = () => {
    alert(`Su FirstName es: ${firstname}`);
  };

  return (
    <>
      <div className="card card-form">
        <h2>RegisterForm</h2>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            First Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="firstname"
            placeholder="Type First Name"
            name="firstname"
            value={firstname}
            onChange={handleFirstName}
          />
        </div>
        <button className="btn btn-primary" onClick={handleEnviar}>
          Enviar
        </button>
      </div>
    </>
  );
};

export default RegisterForm;
