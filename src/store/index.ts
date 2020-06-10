import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { PokemonsState } from './pokemons/types';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

export interface ApplicationState {
  pokemons: PokemonsState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
