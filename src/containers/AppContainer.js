import React from 'react';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/sagas';

// components / reducers
import HomePage from '../pages/HomePage';
import rootReducer from '../reducers';

// create saga middleware
const sagaMiddleware = createSagaMiddleware();

// initial store setup
const configureStore = initialState => {
  const enhancers = applyMiddleware(sagaMiddleware, logger);

  return createStore(rootReducer, initialState, enhancers);
};

// create store
const store = configureStore({});

// Run saga middleware
sagaMiddleware.run(rootSaga);

// wrap rest of the App in a provider
const AppContainer = () => (
  <Provider store={store}>
    <HomePage />
  </Provider>
);

export default AppContainer;
