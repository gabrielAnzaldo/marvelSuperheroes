import { SET_SUPERHEROS, SET_SELECTED_SUPERHERO } from '../constants';

export default (state = {}, action) => {
  switch (action.type) {
    case SET_SUPERHEROS:
      return Object.assign({}, state, { superHeros: action.superHeros });
    case SET_SELECTED_SUPERHERO:
      return Object.assign({}, state, {
        selectedSuperhero: action.selectedSuperhero,
      });
    default:
      return state;
  }
};
