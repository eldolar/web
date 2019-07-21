import React from 'react';
import BankList from './../components/BankList';
import { connect } from 'react-redux';
import { fetchBanks } from './../actions/banksActions';

class BankListContainer extends React.Component {
  componentDidMount() {
    if (this.props.banks.length === 0)
      this.props.fetchBanks()
  }

  render() {
    const { loading, banks } = this.props
    return(
      <BankList loading={loading} banks={banks}/>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchBanks: () => { dispatch( fetchBanks() ) },
  }
}

// react-redux
const mapStateToProps = state => {
  return {
    loading: state.loading,
    banks: state.banks
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BankListContainer);
