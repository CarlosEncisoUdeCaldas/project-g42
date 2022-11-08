import { useState } from "react";

const RegisterForm = () => {
  //este useState va a controlar el input llamado firstname
  const [ firstname, setFirstName ] = useState("");
  const [ lastname, setLastName ] = useState("")
  const [ email, setEmail ] = useState("");

  //funcion manejadora del evento onChange en el input firstname
  const handleFirstName = ( { target } ) => {
    setFirstName( target.value );
    console.log(firstname);
  };

  const handleLastName = ( e ) => {
    setLastName ( e.target.value );
    console.log(lastname);
  }

  const handleEmail = ( e ) => {
    setEmail ( e.target.value );
    console.log( email )
  }

  //funcion handle para las pruebas del boton Enviar
  const handleEnviar = () => {
    alert(`Su fullname es: ${firstname} ${lastname}, correo ${email}`);
    //ToDo: Envio de los datos al API Rest
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
            onChange={ handleFirstName }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Last Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            placeholder="Type Last Name"
            name="lastname"
            value={lastname}
            onChange={ handleLastName }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Type Email"
            name="email"
            value={ email }
            onChange={ handleEmail }
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
