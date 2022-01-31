import React from 'react';
import {NavLink} from "react-router-dom";

function NavBar() {
  return (<ul>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/products'>Products</NavLink></li>
  </ul>)
}

export default NavBar;
