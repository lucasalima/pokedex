import { PokemonsTypes } from './types';

export const requestPokemonList = (params: any) => {
  return {
    type: PokemonsTypes.LIST_REQUEST,
    payload: { params },
  };
};

export const successPokemonList = (data: any) => {
  return {
    type: PokemonsTypes.LIST_SUCCCES,
    payload: { data },
  };
};

export const failurePokemonList = () => {
  return {
    type: PokemonsTypes.LIST_FAILURE,
  };
};

export const requestPokemonDetail = (params: any) => {
  return {
    type: PokemonsTypes.DETAIL_REQUEST,
    payload: { params },
  };
};

export const successPokemonDetail = (data: any) => {
  return {
    type: PokemonsTypes.DETAIL_SUCCCES,
    payload: { data },
  };
};

export const failurePokemonDetail = () => {
  return {
    type: PokemonsTypes.DETAIL_FAILURE,
  };
};
