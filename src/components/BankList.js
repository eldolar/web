import React from 'react';
import Bank from './Bank';
import PropTypes from 'prop-types';
import styles from '../styles/BankList.module.scss';

function BankList({ loading, banks }) {
  if (loading) {
    return(
      <div className={styles.loadingBox}>
        <h1>Cargando</h1>
      </div>
    )
  }

  if (banks.length === 0) {
    return <h1>No hay información</h1>
  }

  return (
    <div className={styles.bankList}>
      { banks.map( (bank, index) => <Bank key={index} bank={bank} />) }
    </div>
  );
}

export default BankList;

BankList.propTypes = {
  loading: PropTypes.bool,
  banks: PropTypes.arrayOf(Bank.propTypes.bank).isRequired
};

BankList.defaultProps = {
  loading: false,
  banks: []
};
