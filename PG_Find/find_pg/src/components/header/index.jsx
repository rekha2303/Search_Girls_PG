import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const Header = ({cartItems}, {handleClick}) => {
  const navigate = useNavigate ();

  const handledClick = property => {
    navigate ('/cart', {state: {cartItems}});
  };

  return (
    <header className="Image-container">
      <div className="container-fluid">
        <img src="/mb-logo-web-white (1).svg" alt="img-logo" />
      </div>
      <nav className="navbar fixed-top ">
        <ul className="header-ul">
          <li><a href="/">Home</a></li>
          <li><a href="#features">Feature</a></li>
          <li><a href="#about_us">About</a></li>
          <li><a href="#contact_us">Contact</a></li>
        </ul>
        <div className="cart">
          <span>
            <i
              onClick={() => handledClick (cartItems)}
              className="fas fa-cart-plus"
            />
          </span>
          <span>{cartItems}</span>
        </div>
      </nav>

    </header>
  );
};
export default Header;
