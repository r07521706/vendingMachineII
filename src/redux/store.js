import {createStore,applyMiddleware} from 'redux';
// import logger from 'redux-logger';
// import createSagaMiddleware from 'redux-saga'
import rootReducer from './root.reducer';
// import rootSaga from './root.saga'
// import thunk from 'redux-thunk';

// const sagaMiddleware = createSagaMiddleware()

// const middlewares=[logger,sagaMiddleware,thunk];

const store = createStore(rootReducer);

export default store ;