import { SET_SUPERHEROS, SET_SELECTED_SUPERHERO } from '../constants';
import getSuperHerosAPI from '../api';

export const setSuperheros = superHeros => ({
  type: SET_SUPERHEROS,
  superHeros,
});

export const getSuperHeros = () => dispatch =>
  getSuperHerosAPI().then(response =>
    dispatch(setSuperheros(response.data.results)),
  );

export const setSelectedHero = selectedSuperhero => ({
  type: SET_SELECTED_SUPERHERO,
  selectedSuperhero,
});
