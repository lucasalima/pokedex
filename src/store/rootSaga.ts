import { all } from 'redux-saga/effects';

import pokemon from './pokemons/sagas';

export default function* rootSaga() {
  return yield all([pokemon]);
}
