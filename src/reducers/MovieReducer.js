import * as types from '../actions/types';

const initialState = {
  movies: {},
  selectedMovie: '',
  isLoading: false
};

export default function MovieReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_SELECTED_MOVIE:
      return {
        ...state,
        selectedMovie: action.id
      };
    case types.FETCH_MOVIE:
      return {
        ...state,
        isLoading: true
      };
    case types.FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        movies: action.movies,
        isLoading: false
      };
    case types.FETCH_MOVIE_FAILED:
      return {
        ...state,
        message: action.message,
        isLoading: false
      };

    case types.SEARCH_MOVIE:
      return {
        ...state,
        isLoading: true
      };
    case types.SEARCH_MOVIE_SUCCESS:
      return {
        ...state,
        movies: action.movies,
        isLoading: false
      };
    case types.SEARCH_MOVIE_FAILED:
      return {
        ...state,
        message: action.message,
        isLoading: false
      };

    default:
      return state;
  }
}
