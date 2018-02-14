import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginRequest, logoutRequest } from 'actions/authActions';
import Header from './Header';

const mapStateToProps = (state) => {
  const {
    auth: { isAuthorized, user, isGoogleApiInit: isAuthorizationEnabled }
  } = state;
  return { isAuthorized, user, isAuthorizationEnabled };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      login: loginRequest,
      logout: logoutRequest
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Header);
