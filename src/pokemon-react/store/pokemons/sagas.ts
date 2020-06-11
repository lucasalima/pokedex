import { call, put, takeLatest, all } from 'redux-saga/effects';
import api from '../../services/api';

import { PokemonsTypes } from './types';
import {
  successPokemonList,
  failurePokemonList,
  successPokemonDetail,
  failurePokemonDetail,
} from './actions';

function* pokemonListRequest({ payload }: any) {
  try {
    const response = yield call(
      api.get,
      `?offset=${payload.params.offset}&limit=${payload.params.limit}`
    );
    if (response) yield put(successPokemonList(response.data));
  } catch (err) {
    yield put(failurePokemonList());
  }
}

function* pokemonDetailsRequest({ payload }: any) {
  try {
    const response = yield call(api.get, `/${payload.params}`);
    if (response) yield put(successPokemonDetail(response.data));
  } catch (err) {
    yield put(failurePokemonDetail());
  }
}

export default all([
  takeLatest(PokemonsTypes.LIST_REQUEST, pokemonListRequest),
  takeLatest(PokemonsTypes.DETAIL_REQUEST, pokemonDetailsRequest),
]);
