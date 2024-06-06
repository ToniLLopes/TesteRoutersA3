import React from 'react';
import NavbarComponent from './assets/navbar/NavbarComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import BannerComponent from './assets/banner/BannerComponent';
import FooterComponent from './assets/footer/FooterComponent';
import './App.css';
// para reaproveitar os elementos do app em todas paginas
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* Para reaproveitar elementos */}
       <Outlet/>
      <header>
        <NavbarComponent />
      </header>
      {/* <div className="container-fluid mt-5">
        <BannerComponent />
      </div> */}
      <FooterComponent />
    </div>
  );
}

export default App;
