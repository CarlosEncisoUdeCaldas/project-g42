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

    const handleResta = () => {
        setCount(count - 1)
    }

    const handleReset = () => {
        setCount(0)
    }
    //fin de las funciones manejadoras

    return(
        <>
            <h1>Contador</h1>
            <p id= "add" >{ count }</p>
            <button className="btn btn-success" type="button" name="adicionar" onClick={ handleAdicionar }>+ 1</button>
            <button className="btn btn-primary" type="button" name="restar" onClick={ handleResta }>- 1</button>
            <button className="btn btn-secondary" type="button" name="reset" onClick={ handleReset }>Reset</button>
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