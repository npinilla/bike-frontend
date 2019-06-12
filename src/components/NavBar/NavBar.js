import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

const NavBar = () => {
  return (
    <div>
      <h5>NAVBAR</h5>
      <ul>
        <li key="home"><Link to="/Home">Inicio</Link></li>
        <li key="stations"><Link to="/Stations">Estaciones</Link></li>
      </ul>
      <hr />
    </div>
  );
};

export default NavBar;
