import React from 'react';
import { Link } from 'react-router-dom';

function Footer({ association }) {
  return (
    <footer className="crancy-wc__footer--top">
      <div className="crancy-wc__footer">
        <ul className="crancy-wc__footer--list list-none">
          <li>
            <Link to="#">Términos y condiciones</Link>
          </li>
          <li>
            <Link to="#">Política de privacidad</Link>
          </li>
          <li>
            <Link to="#">Ayuda</Link>
          </li>
        </ul>
      </div>
      <p className="crancy-wc__footer--copyright">
        @ {new Date().getFullYear()}{' '}
        <a href="#">{association?.businessName}.</a> Todos los derechos
        reservados.{' '}
      </p>
    </footer>
  );
}

export default Footer;
