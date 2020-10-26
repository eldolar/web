import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Bank.module.scss';

export default function Bank({ bank: { name, sell, buy, url } }) {
  const noData = hasExchange(sell, buy) ? '' : `${styles.no_data}`;
  const mainClasses = `${styles.box} ${noData}`;

  return (
    <div className={mainClasses} data-test='bank-box'>
      <h1 className={styles.name} onClick={ () => window.open(url, '_blank') }>
        {name}
      </h1>
      <div className={styles.exchange}>
        <p>
          Venta
          <span>{currencyFormat(sell)}</span>
        </p>
        <p>
          Compra
          <span>{currencyFormat(buy)}</span>
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

function currencyFormat(price) {
  const parsePrice = Number.parseFloat(price);

  return parsePrice.toLocaleString('es-AR', { currency: 'ARS', style: 'currency' });
}

Bank.propTypes = {
  bank: PropTypes.shape({
    name: PropTypes.string.isRequired,
    sell: PropTypes.string,
    buy: PropTypes.string,
    url: PropTypes.string,
  })
};
