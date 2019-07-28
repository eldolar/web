import React from 'react'
import { NavLink } from 'react-router-dom';
import Refresh from '../containers/RefreshContainer';
import styles from '../styles/Navbar.module.scss';

import PropTypes from 'prop-types';

const Navbar = ({ updatedAt }) => (
  <nav className={styles.navigation}>
    <p>
      <span>Actualizado: </span>
      { updatedAt }
      <Refresh />
    </p>
    <ul>
      <li>
        <NavLink to="/">Inicio</NavLink>
      </li>
      <li>
        <NavLink to="/about">Sobre</NavLink>
      </li>
    </ul>
  </nav>
)

Navbar.propTypes = {
  updatedAt: PropTypes.string
}

Navbar.defaultProps = {
  updatedAt: ''
};

export default Navbar
