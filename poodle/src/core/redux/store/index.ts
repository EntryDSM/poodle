import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import rootSaga from '../sagas';
import rootReducer from '../reducer';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

export type ReducerType = ReturnType<typeof rootReducer>;
export default store;
