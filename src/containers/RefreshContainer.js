import { connect } from 'react-redux';
import Refresh from './../components/RefreshBanks';
import { fetchBanks } from './../actions/banksActions';

// react-redux
const mapDispatchToProps = dispatch => {
  return {
    refresh: () => { dispatch( fetchBanks() ); },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Refresh);
