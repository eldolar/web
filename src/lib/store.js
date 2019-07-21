import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { reducer } from './../reducers/banks';

import { watchFetchBanks } from './../sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(watchFetchBanks);

export default store;
