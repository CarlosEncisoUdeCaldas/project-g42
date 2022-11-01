import PropTypes from "prop-types"
import { useState } from 'react'

const Contador = ( { value } ) => {
    // let { value } = props ; //desestructurando la props value

    const [ count, setCount ] =  useState (value);

    //inicio de las funciones manejadoras
    const handleAdicionar = ( event ) => {
        // console.log( value += 1 )
        // console.log(event.target.id);
        // const { name, id } = target
        // console.log(name);
        // console.log(id);
        // document.getElementById('add').innerHTML = value += 1
        setCount(count + 1)
    }
    //fin de las funciones manejadoras

    return(
        <>
            <h1>Contador</h1>
            <p id= "add" >{ count } { count } Hola</p>
            <button id="g42" type="button" name="adicionar" onClick={ handleAdicionar }>+ 1</button>
            <p> { count } </p>
        </>
    )
}

export default Contador;

//declaramos el tipo de dato para value usando PropTypes
Contador.propTypes = {
    value: PropTypes.number
}

//declaramos las defaultProps
Contador.defaultProps = {
    value: 42
}