import React from "react";
import { FaGithub, FaLinkedin, FaFreeCodeCamp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <a href="mailto:sparrow.kristinab@gmail.com" className="footer__link">sparrow.kristinab@gmail.com</a>
        <ul className="social-list">
          <li className="social-list__item">
            <a
                className="social-list__link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/kristina-sparrow"
              >
                <FaGithub />
              </a>
          </li>
          <li className="social-list__item">
            <a
                className="social-list__link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.freecodecamp.org/ksparrow"
              >
                <FaFreeCodeCamp />
              </a>
          </li>
          <li className="social-list__item">
            <a
                className="social-list__link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/kristina-sparrow/"
              >
                <FaLinkedin />
              </a>
          </li>
      </ul>
    </footer>
  );
};