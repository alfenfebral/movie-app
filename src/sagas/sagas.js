import { takeEvery, all, call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_MOVIE,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_FAILED,
  SEARCH_MOVIE,
  SEARCH_MOVIE_SUCCESS,
  SEARCH_MOVIE_FAILED
} from '../actions/types';
import { API_KEY } from '../config/index';

// Worker
export function* fetchMovieApi() {
  try {
    const response = yield call(
      axios.get,
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=a`
    );
    yield put({ type: FETCH_MOVIE_SUCCESS, movies: response.data });
  } catch (e) {
    yield put({ type: FETCH_MOVIE_FAILED, message: 'Movies fetch failed' });
  }
}

export function* fetchSearchMovieApi(action) {
  try {
    const response = yield call(
      axios.get,
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${
        action.name
      }`
    );
    yield put({ type: SEARCH_MOVIE_SUCCESS, movies: response.data });
  } catch (e) {
    yield put({ type: SEARCH_MOVIE_FAILED, message: 'Movies fetch failed' });
  }
}

// Watcher
export function* watchFetchMovie() {
  yield takeEvery(FETCH_MOVIE, fetchMovieApi);
}

export function* watchSearchMovies() {
  yield takeEvery(SEARCH_MOVIE, fetchSearchMovieApi);
}

// Root Watcher and Worker
export default function* rootSaga() {
  yield all([watchFetchMovie(), watchSearchMovies()]);
}
