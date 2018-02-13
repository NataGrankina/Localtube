export const SELECT_LOCATION = 'SELECT_LOCATION';
export const SET_RADIUS = 'SET_RADIUS';

export function selectLocation(lat, lng) {
  return {
    type: SELECT_LOCATION,
    lat,
    lng
  };
}

export function setRadius(radius) {
  return {
    type: SET_RADIUS,
    radius
  };
}
