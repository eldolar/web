import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Bank.module.scss';

export default function Bank({ bank: { name, sell, buy } }) {
  const noData = hasExchange(sell, buy) ? '' : `${styles.no_data}`;
  const mainClasses = `${styles.box} ${noData}`;
  return (
    <div className={mainClasses} data-test='bank-box'>
      <h1 className={styles.name}>{name}</h1>
      <div className={styles.exchange}>
        <p>
          Compra
          <span>{buy}</span>
        </p>
        <p>
          Venta
          <span>{sell}</span>
        </p>
      </div>
    </div>
  );
}

function hasExchange(sell, buy) {
  const noExchnage = (sell === '0' || buy === '0') ||
    (sell === '' || buy === '') || (isNaN(sell) || isNaN(buy));

  if (noExchnage) {
    return false;
  }

  return true;
}

Bank.propTypes = {
  bank: PropTypes.shape({
    name: PropTypes.string.isRequired,
    sell: PropTypes.string,
    buy: PropTypes.string
  })
};
