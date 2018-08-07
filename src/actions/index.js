import * as types from './types';

export const selectMovie = id => ({
  type: types.SET_SELECTED_MOVIE,
  id
});

export const fetchMovie = () => ({
  type: types.FETCH_MOVIE
});

export const searchMovies = name => ({
  type: types.SEARCH_MOVIE,
  name
});
