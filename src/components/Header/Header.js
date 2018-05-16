import React from 'react';
import {Link} from 'react-router-dom';
const Header =props=>
  <header>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
         <div className="container">
             <a className="navbar-brand" href="/"><img src="https://www.sportclub.com.ar/themes/default/pics/logo.png" alt="logo" width="200px"/></a>
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
             </button>

             <div className="collapse navbar-collapse" id="navbarsExample07">
                 <ul className="navbar-nav mr-auto">
                     <li className="nav-item">
                         <Link to="/" className="nav-link">Clientes</Link>
                     </li>
                     <li className="nav-item">
                         <Link to="/clientes" className="nav-link">Agregar Cliente</Link>
                     </li>
                 </ul>
             </div>
         </div>
     </nav>
   </header>

export default Header;
