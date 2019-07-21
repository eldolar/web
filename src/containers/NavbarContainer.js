import { connect } from 'react-redux';
import Navbar from './../components/Navbar';

// react-redux
const mapStateToProps = state => {
  return {
    updatedAt: state.updatedAt
  }
}

export default connect(
  mapStateToProps,
)(Navbar);
