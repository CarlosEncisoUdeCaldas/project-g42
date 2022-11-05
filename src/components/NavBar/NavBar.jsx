import { Link } from "react-router-dom";

const NavBar = () => {
  //arreglo que guarda las propiedades de los items de navegacion
  const navItems = [
    {ruta:'/', icono:'bi bi-house', texto:'Home'},
    {ruta:'/contador', icono:'bi bi-calculator', texto:'Contador'},
    {ruta:'/saludo', icono:'bi bi-hand-thumbs-up', texto:'Saludo'},
  ]

  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            {/* declaracion de la funcion map para cada item de la barra de navegacion */}
            { navItems.map( ( { ruta, icono, texto } ) => {
              return (
                <li className="nav-item">
                    <Link className="nav-link" to={ ruta }>
                      <i className={ icono }></i>
                      { texto }
                    </Link>
                </li>
              );
            }) }
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
