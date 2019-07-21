import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from '../styles/Navbar.module.scss';

import iconSet from './../fonts/selection.json'
import IcomoonReact from 'icomoon-react'

import PropTypes from 'prop-types';

const Navbar = ({ updatedAt }) => (
  <nav className={styles.navigation}>
    <p>
      <span>Actualizado: </span>
      { updatedAt }
    </p>
    <ul>
      <li>
        <NavLink to="/">Inicio</NavLink>
      </li>
      <li>
        <NavLink to="/about">Sobre</NavLink>
      </li>
      <li className="icon">
        <a href="#">
          <IcomoonReact 
            iconSet={iconSet} 
            color="#5A6978"
            size={25} 
            icon="github" />
        </a>
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
