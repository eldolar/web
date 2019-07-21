import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Bank.module.scss';

export default function Bank({ bank: { name, sell, buy } }) {
  return (
    <div className={styles.box} data-test='bank-box'>
      <h1 className={styles.name}>{name}</h1>
      <div className={styles.exchange}>
        <p>
          Venta
          <span>{sell}</span>
        </p>
        <p>
          Compra
          <span>{buy}</span>
        </p>
      </div>
    </div>
  );
}

Bank.propTypes = {
  bank: PropTypes.shape({
    name: PropTypes.string.isRequired,
    sell: PropTypes.string,
    buy: PropTypes.string
  })
}
