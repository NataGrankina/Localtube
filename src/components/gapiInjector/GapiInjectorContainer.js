import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { initGoogleApiRequest } from 'actions/authActions';
import GapiInjector from './GapiInjector';

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      initGoogleApiRequest
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(GapiInjector);
