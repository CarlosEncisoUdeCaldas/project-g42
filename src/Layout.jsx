import Contador from "./Contador/Contador";
import "./Layout.css"
import NavBar from "./NavBar/NavBar";
import Saludo from "./Saludo/Saludo";


//nuestro primer componente creado en React
const Layout = ( ) => {
    const grupo = 32 ;
    const nombre =  'Carlitos';
    const h2Style = { color: 'green', backgroundColor: 'white', padding:'20px' } //estilo para la etiqueta h2

    return (
        <>  
            <header>
                <NavBar />
            </header>

            <main>
                
            </main>
        </>
        
    );
}

export default Layout;