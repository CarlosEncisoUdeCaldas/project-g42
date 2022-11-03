import ReactDOM from "react-dom/client";
import Layout from "./Layout";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import React from "react";
import Home from "./Home";
import Contador from "./Contador/Contador";
import Saludo from "./Saludo/Saludo";

//creacion de las rutas de nuestro proyecto
//las rutas se insertan dentro de un array, dicho array se enviará al RouterProvider
const router = createBrowserRouter( 
    createRoutesFromElements([
        <Route path="/" element={ <Layout/> }>
            <Route path="/home" element={ <Home/> } />,
            <Route path="/contador" element={ <Contador/> } />,
            <Route path="/saludo" element={ <Saludo/> } />
        </Route>
     ])
)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={ router } />
    </React.StrictMode>
);
