export const SELECT_LOCATION = 'SELECT_LOCATION';
export const SELECT_LOCATION_RADIUS = 'SELECT_LOCATION_RADIUS';

export function selectLocation(lat, lng) {
  return {
    type: SELECT_LOCATION,
    lat,
    lng
  };
}

export function selectLocationRadius(radius) {
  return {
    type: SELECT_LOCATION_RADIUS,
    radius
  };
}
