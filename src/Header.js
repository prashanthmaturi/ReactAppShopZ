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
        <Link to="/products" className='nav-link'>Products</Link><span>&nbsp;|&nbsp;</span>
        <Link to="/men" className='nav-link'>Men's Clothing</Link><span>&nbsp;|&nbsp;</span>
        <Link to="/women" className='nav-link'>Women's Clothing</Link><span>&nbsp;|&nbsp;</span>
        <Link to="/jewelery" className='nav-link'>Jewelery</Link><span>&nbsp;|&nbsp;</span>
        <Link to="/electronics" className='nav-link'>Electronics</Link><span>&nbsp;|&nbsp;</span>
        <Link to="/About" className='nav-link'>About</Link><span>&nbsp;|&nbsp;</span>
        <Link to="/Contact" className='nav-link'>Contact</Link>
      </nav>
    </div>
  );
}
export { Header, AppNav };