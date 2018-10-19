import React from 'react';
import {Link} from 'react-router-dom';

const Menu = () => {
  return(
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/simple-form">Simple Form</Link>
      <Link to="/image-slider">Image Slider</Link>
      <Link to="/todo-list">Todo list</Link>
      <Link to="/fetch-random-user">Random user</Link>
    </nav>
  )
}

export default Menu;
