import React from 'react';
import logo from '../logo.svg';


const Header = props => {
  return (
    <header {...props}>
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to My React APP</h1>
    </header>
  )
}

export default Header;
