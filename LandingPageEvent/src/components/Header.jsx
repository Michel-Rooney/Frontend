import { useState } from 'react';
import "../styles/Header.css";

function Header() {
  const [active, setActive] = useState(false);

  function toggleHamburguer() {
    const hamburguer = document.querySelector(".Header-nav-hamburguer-items");

    if (active) {
      hamburguer.style.display = "none";
      setActive(false);
    } else {
      hamburguer.style.display = "flex";
      setActive(true);
    }
  }

  return (
    <>
      <header className="Header">
        <nav className="Header-nav-bar">
          <img src="/vite.svg" alt="Vite Logo" className="Header-nav-image" />
          <ul className="Header-nav-items">
            <li>
              <a href="">Inicio</a>
            </li>
            <li>
              <a href="">Eventos</a>
            </li>
            <li>
              <a href="">Contanto</a>
            </li>
          </ul>
          <nav className="Header-nav-hamburguer">
            <i
              className="bi bi-list Header-nav-hamburguer-icon"
              onClick={toggleHamburguer}
            ></i>
            <ul className="Header-nav-hamburguer-items">
              <li>
                <a href="">Inicio</a>
              </li>
              <li>
                <a href="">Eventos</a>
              </li>
              <li>
                <a href="">Contanto</a>
              </li>
            </ul>
          </nav>
        </nav>
      </header>
      <main></main>
      <footer></footer>
    </>
  );
}

export default Header;
