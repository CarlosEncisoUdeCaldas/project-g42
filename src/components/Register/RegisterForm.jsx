import { useState } from "react";
import InputRegister from "./InputRegister";

const RegisterForm = () => {
  
  //useState que va a manejar los valores de todos los inputs del formulario
  const [ inputs, setInputs ] = useState( { 
    firstname:'',
    lastname:'',
    email: '',
    password:'',
  } )

  //funcion que maneja los cambios de valores de los inputs
  const handleInputsForm = ( e ) => {
      setInputs( { ...inputs, [e.target.name]: e.target.value } )
      console.log( inputs );
  }
  
  //funcion handle para las pruebas del boton Enviar
  const handleEnviar = ( e ) => {
    e.preventDefault();  //con esto evitamos que los formularios se reinicien
    alert(`Su fullname es: ${inputs.firstname} ${inputs.lastname}, correo ${inputs.email}, password: ${inputs.password}`);
    //ToDo: Envio de los datos al API Rest

    //limpiar formulario
    setInputs({
      firstname:'',
      lastname:'',
      email:'',
      password:''
    })
  };

  return (
    <>
      <div className="card card-form">
        <h2>RegisterForm</h2>

        {/* inicio del formulario de registro */}
        <form action="" onSubmit = { handleEnviar }>
          <InputRegister title='First Name:' name='firstname' type='text' value={inputs.firstname} handle={handleInputsForm}/>
          <InputRegister title='Last Name:' type='text' name='lastname' value={inputs.lastname} handle={handleInputsForm}/>
          <InputRegister title='Email:' type='email' name='email' value={inputs.email} handle={handleInputsForm}/>
          <InputRegister title='Password:' type='password' name='password' value={inputs.password} handle={handleInputsForm}/>
          
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
