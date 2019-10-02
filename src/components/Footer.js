import React from 'react';
import styles from '../styles/Footer.module.scss';
import iconSet from './../fonts/selection.json';
import IcomoonReact from 'icomoon-react';
import base from './../styles/_variables.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <ul>
      <li>
        <a href="https://github.com/eldolar/web">
          <IcomoonReact
            iconSet={iconSet}
            color={base.number}
            size={25}
            icon="github" />
        </a>
      </li>
      <li>
        <a href="/">
          <IcomoonReact
            iconSet={iconSet}
            color={base.number}
            size={25}
            icon="android" />
        </a>
      </li>
      <li>
        <a href="/">
          <IcomoonReact
            iconSet={iconSet}
            color={base.number}
            size={25}
            icon="appleinc" />
        </a>
      </li>

    </ul>
  </footer>
);

export default Footer;
