export default (state = true, action) => {
  switch (action.type) {
  case 'TOGGLE_DETAIL':
    return !state;
  default:
    return state;
  }
};