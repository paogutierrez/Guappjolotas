import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './containers/Nav';
import Titled from './containers/Title';
import Buscador from './containers/Buscador';
import Link from './containers/Link';







ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <Titled />
    <Buscador />
    <Link />
    
  </React.StrictMode>,
  document.getElementById('root')
);


