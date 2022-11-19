import { useState } from "react";
import { userSignUp } from "../../api/userApi";
import InputRegister from "./InputRegister";
import { Button } from 'primereact/button'

const RegisterForm = () => {
  
  //useState que va a manejar los valores de todos los inputs del formulario
  const [ inputs, setInputs ] = useState( { 
    firstname:'',
    lastname:'',
    email: '',
    password:'',
  } )

  // desestructuracion del objeto inputs
  const { firstname, lastname, email, password } = inputs

  //funcion que maneja los cambios de valores de los inputs
  const handleInputsForm = ( e ) => {
      setInputs( { ...inputs, [e.target.name]: e.target.value } )
  }
  
  //funcion handle para las pruebas del boton Enviar
  const handleEnviar = async ( e ) => {
    e.preventDefault();  //con esto evitamos que los formularios se reinicien
    
    //ToDo: Envio de los datos al API Rest
    if( !lastname || !firstname || !email || !password) {
      alert('All inputs are required')
    }else{
      const result = await userSignUp(inputs)
      // console.log('Mensaje de Result desde RegisterForm');
      // console.log( result );
      if(result.status === 200){
        alert(result.message);
        // limpiar formulario
        setInputs({
          firstname:'',
          lastname:'',
          email:'',
          password:''
        })
        window.location.href='/'
      }else{
        alert(result.message)
      }
    }

    
    
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
          
          <Button label="Submit" icon="pi pi-check" />
        </form>
        {/* fin del formulario de registro */}
      </div>
    </>
  );
};

export default RegisterForm;
