import React from 'react'
import styles from '../styles/Footer.module.scss';
import iconSet from './../fonts/selection.json'
import IcomoonReact from 'icomoon-react'

const Footer = () => (
  <footer className={styles.footer}>
    <ul>
      <li>
        <a href="/">Licencia</a>
      </li>
      <li>
        <a href="/">
          <IcomoonReact
            iconSet={iconSet}
            color="#5A6978"
            size={25}
            icon="github" />
        </a>
      </li>

    </ul>
  </footer>
)

export default Footer
