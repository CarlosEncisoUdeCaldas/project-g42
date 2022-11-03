import PropTypes from 'prop-types'

const Saludo = ( { nombre, apellido } ) => {
    // const { nombre, apellido } = props; //desestructuracion del objeto props

  return (
    <>
        <h1> Saludo Sr(a). { nombre } { apellido }  </h1>
    </>
  )
}

export default Saludo

//aqui voy a definir el tipo de dato para las props a través de PropTypes
Saludo.propTypes = {
    nombre: PropTypes.string,
    apellido: PropTypes.string
}

//tambien tenemos la opcion de crear valores por defecto para las props
//defaultProps
Saludo.defaultProps = {
    nombre: '@sinNombre',
    apellido: '@sinApellido'
}