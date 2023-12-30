import React from 'react'
import { NavLink } from 'react-router-dom'
import css from './Header.module.css'


const Header = () => {
  return (
    <div className={css.Headerdiv}>
    <nav className={css.Headernav}>
      <ul className={css.Headerlist}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </ul>
      </nav>
      </div>
  );
};

export default Header;