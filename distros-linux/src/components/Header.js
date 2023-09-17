import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import '../css/Header.css';


function Header () {
  const [active, setActive] = useState(false);

  function toggleHamburger() {
    const menu = document.querySelector(".menu");
    
    if (!menu) {
      console.error("Element with class 'menu' not found");
      return;
    }

    if (active) {
      menu.style.display = 'none';
      setActive(false);
    } else {
      menu.style.display = 'block';
      setActive(true);
    }
  }

  return (
    <header className="header">
      <div>
        <Link to="/">
          <img className="logo-header" src="/img/penguin-logo.png" alt="Penguin Logo Linux" />
        </Link>
      </div>
      <ul className="header-items">
        <li>
          <a href='a'>News</a>
        </li>
        <li>
          <Link to="/distros">Distros</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
      <div className="hamburguer" onClick={toggleHamburger}>
        <i className="bi bi-list"></i>
        <ul className="menu">
          <li>
            <a href='a'>News</a>
          </li>
          <li>
            <a href='a'>Distros</a>
          </li>
          <li>
            <a href='a'>Login</a>
          </li>
          <li>
            <a href='a'>Register</a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
