import { SELECT_LOCATION, SELECT_LOCATION_RADIUS } from 'actions/mapActions';

const initialState = {
  lat: 59.95,
  lng: 30.33,
  radius: 10
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SELECT_LOCATION:
      return {
        ...state,
        lat: action.lat,
        lng: action.lng
      };
    case SELECT_LOCATION_RADIUS:
      return {
        ...state,
        radius: action.radius
      };
    default:
      return state;
  }
};
