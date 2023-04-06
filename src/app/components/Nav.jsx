import React from "react";

function handleNavToggleClick() {
  document.body.classList.toggle('nav-open');
}

function handleNavLinkClick() {
  document.body.classList.remove('nav-open');
}

export default function Nav() {
  return (
    <>
    <button type="button" className="nav-toggle" aria-label="toggle navigation" onClick={handleNavToggleClick}>
      <span className="hamburger" />
    </button>
    <nav className="nav">
      <ul className="nav__list">
          <li className="nav__item"><a href="#home" className="nav__link" onClick={handleNavLinkClick}>Home</a></li>
          <li className="nav__item"><a href="#services" className="nav__link" onClick={handleNavLinkClick}>My Services</a></li>
          <li className="nav__item"><a href="#about" className="nav__link" onClick={handleNavLinkClick}>About Me</a></li>
          <li className="nav__item"><a href="#work" className="nav__link" onClick={handleNavLinkClick}>My Work</a></li>
      </ul>
    </nav>
    </>
  );
}
