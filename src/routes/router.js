import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../Layout";
import Home from "../Home";
import Contador from "../components/Contador/Contador";
import Saludo from "../components/Saludo/Saludo";

//creacion de las rutas de nuestro proyecto
//las rutas se insertan dentro de un array, dicho array se enviará al RouterProvider
export const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />,
      <Route path="/contador" element={<Contador />} />,
      <Route path="/saludo" element={<Saludo />} />,
    </Route>,
  ])
);
