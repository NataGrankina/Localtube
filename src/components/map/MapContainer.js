import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectLocation } from 'actions/mapActions';
import Map from './Map';

const mapStateToProps = (state) => {
  const { map: { lat, lng, radius } } = state;
  return { lat, lng, radius };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      selectLocation
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Map);
