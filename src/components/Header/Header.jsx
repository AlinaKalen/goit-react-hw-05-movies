import React from 'react'
import { NavLink } from 'react-router-dom'
import css from './Header.module.css'


// const Header = () => {
//   return (
//     <Header>
//       <NavLink to="/" className={({isActive}) => isActive ? "Active" : null}>HOME</NavLink>
//       <NavLink to="movies" className={({isActive}) => isActive ? "Active" : null}>MOVIES</NavLink>
//     </Header>
//   )
// }

// export default Header

const Header = () => {
  return (
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
  );
};

export default Header;