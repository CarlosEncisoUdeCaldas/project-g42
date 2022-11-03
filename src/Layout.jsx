import Contador from "./Contador/Contador";
import "./Layout.css"
import Saludo from "./Saludo/Saludo";


//nuestro primer componente creado en React
const Layout = ( ) => {
    const grupo = 32 ;
    const nombre =  'Carlitos';
    const h2Style = { color: 'green', backgroundColor: 'white', padding:'20px' } //estilo para la etiqueta h2

    return (
        <>
            {/* <h1 className = "saludo" > Hola Mundo Grupo { grupo }</h1> */}
            {/* <h2 style={ h2Style } > Bievenido { nombre } </h2>
            <p>Esto es un parrafo</p> */}
            {/* importacion del componente Saludo */}
            {/* <Saludo /> */}
            <Contador value={ 0 }/>
        </>
        
    );
}

export default Layout;