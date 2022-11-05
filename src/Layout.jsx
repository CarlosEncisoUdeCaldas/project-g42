import { Outlet } from "react-router-dom";
import "./Layout.css"
import NavBar from "./components/NavBar/NavBar";


//nuestro primer componente creado en React
const Layout = ( ) => {
    
    return (
        <>  
            <header>
                <NavBar />
            </header>

            <main>
                <Outlet />
            </main>
        </>
        
    );
}

export default Layout;