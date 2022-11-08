import { useState } from "react";

const RegisterForm = () => {
  //este useState va a controlar el input llamado firstname
  // const [firstname, setFirstName] = useState("");
  // const [lastname, setLastName] = useState("");
  // const [email, setEmail] = useState("");

  //useState que va a manejar los valores de todos los inputs del formulario
  const [ inputs, setInputs ] = useState( { 
    firstname:'',
    lastname:'',
    email: ''
  } )

  const handleInputsForm = ( e ) => {
      setInputs( { ...inputs, [e.target.name]: e.target.value } )
      console.log( inputs );
  }

  //funcion manejadora del evento onChange en el input firstname
  // const handleFirstName = ({ target }) => {
  //   setFirstName(target.value);
  //   console.log(firstname);
  // };

  // const handleLastName = (e) => {
  //   setLastName(e.target.value);
  //   console.log(lastname);
  // };

  // const handleEmail = (e) => {
  //   setEmail(e.target.value);
  //   console.log(email);
  // };

  //funcion handle para las pruebas del boton Enviar
  const handleEnviar = () => {
    
    alert(`Su fullname es: ${inputs.firstname} ${inputs.lastname}, correo ${inputs.email}`);
    //ToDo: Envio de los datos al API Rest
  };

  return (
    <>
      <div className="card card-form">
        <h2>RegisterForm</h2>

        {/* inicio del formulario de registro */}
        <form action="" onSubmit = { handleEnviar }>
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
              value={ inputs.firstname }
              onChange={ handleInputsForm }
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
              value={ inputs.lastname }
              onChange={ handleInputsForm }
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
              value={ inputs.email }
              onChange={ handleInputsForm }
            />
          </div>
          <button type='submit' className="btn btn-primary">
            Enviar
          </button>
        </form>
        {/* fin del formulario de registro */}
      </div>
    </>
  );
};

export default RegisterForm;
