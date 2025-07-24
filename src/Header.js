import React from 'react';
import {Link } from 'react-router-dom';


function Header() {

  return (
    <header className="App-header">
        <h1 className='logo'>ShopZ</h1>
        <AppNav/>
    </header>
  );
}
function AppNav(){
  return(
    <div>
      <nav className='App-Navigation'>
        <Link to="/" className='nav-link'>Home</Link><span>&nbsp;|&nbsp;</span>
        <Link to="/login" className='nav-link'>Login</Link><span>&nbsp;|&nbsp;</span>
        <Link to="/signup" className='nav-link'>Sign Up</Link>
      </nav>
    </div>
  );
}
export { Header, AppNav };