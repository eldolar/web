import React from "react";
import { NavLink } from "react-router-dom";
import Refresh from "../containers/RefreshContainer";
import styles from "../styles/Navbar.module.scss";

import PropTypes from "prop-types";
import ToggleTheme from "./ToggleTheme";

const Navbar = ({ updatedAt }) => (
  <nav className={styles.navigation}>
    <p>
      <span>Actualizado: </span>
      {updatedAt}
      <Refresh />
      <ToggleTheme />
    </p>
    <ul>
      <li>
        <NavLink to="/">Inicio</NavLink>
      </li>
      <li>
        <a href="https://stats.uptimerobot.com/wjJZJfGPGY">Status</a>
      </li>
    </ul>
  </nav>
);

Navbar.propTypes = {
  updatedAt: PropTypes.string,
};

Navbar.defaultProps = {
  updatedAt: "",
};

export default Navbar;
