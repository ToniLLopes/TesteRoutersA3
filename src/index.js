import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './assets/paginas/Home';
import Cardapio from './assets/paginas/Cardapio';
import ErroPage from './assets/paginas/ErroPage';
//configurando os routers
const router = createBrowserRouter([
  {
    //Classe pai App para reaproveitamento de elementos
    path: "/",
    element: <App/>,
    //Pagina de erro
    errorElement: <ErroPage/>,
    //Paginas 
    children:[
      {
        path: "/", element: <Home/>
      },
      {
        path:"/Cardapio", element: <Cardapio/>
      }
    ] 
  }
])


const container = document.getElementById('root'); // Certifique-se de que o id corresponde ao que está no HTML
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>
);
