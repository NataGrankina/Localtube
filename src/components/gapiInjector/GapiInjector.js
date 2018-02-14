import { Component } from 'react';
import PropTypes from 'prop-types';

// HACK to handle async gapi client library loading to get access to Google Api
// Issue link: https://github.com/google/google-api-javascript-client/issues/319
export default class GapiInjector extends Component {
  static propTypes = {
    initGoogleApiRequest: PropTypes.func.isRequired
  };

  componentDidMount() {
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/client.js';

    script.onload = () => {
      this.props.initGoogleApiRequest();
    };

    document.body.appendChild(script);
  }

  render() {
    return null;
  }
}
