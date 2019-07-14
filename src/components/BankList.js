import React from 'react';
import Bank from './Bank';
import PropTypes from 'prop-types';
import styles from '../styles/BankList.module.css';
import { connect } from 'react-redux';

export class BankList extends React.Component {
  constructor (props) {
    super(props)

    this.state = { loading: false, banks: [] }
  }

  render () {
    if (this.props.loading) {
      return(
        <div className={styles.loadingBox}>
          <h1>Cargando</h1>
        </div>
      )
    }

    if (this.props.banks.length === 0) {
      return <h1>No hay información</h1>
    }

    return (
      <div className={styles.bankList}>
        { this.props.banks.map( (bank, index) => <Bank key={index} bank={bank} />) }
      </div>
    );
  }
}

BankList.propTypes = {
  loading: PropTypes.bool,
  banks: PropTypes.arrayOf(Bank.propTypes.bank).isRequired
};

BankList.defaultProps = {
  loading: false,
};

// react-redux
const mapStateToProps = state => {
  return {
    loading: state.loading,
    banks: state.banks
  }
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BankList);
