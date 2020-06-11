import { Reducer } from 'redux';
import { PokemonsState, PokemonsTypes } from './types';

const INITIAL_STATE: PokemonsState = {
  list: {
    count: 0,
    next: '',
    previous: '',
    results: [],
  },
  detail: {
    id: 0,
    name: '',
    height: 0,
    weight: 0,
    sprites: {
      back_default: '',
      back_shiny: '',
      front_default: '',
      front_shiny: '',
    },
  },
};

const reducer: Reducer<PokemonsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PokemonsTypes.LIST_REQUEST:
      return {
        ...state,
        list: {
          count: 0,
          next: '',
          previous: '',
          results: [],
        },
      };
    case PokemonsTypes.LIST_SUCCCES:
      return {
        ...state,
        list: action.payload.data,
      };
    case PokemonsTypes.LIST_FAILURE:
      return {
        ...state,
        list: {
          count: 0,
          next: '',
          previous: '',
          results: [],
        },
      };
    case PokemonsTypes.DETAIL_REQUEST:
      return {
        ...state,
        detail: {
          id: 0,
          name: '',
          height: 0,
          weight: 0,
          sprites: {
            back_default: '',
            back_shiny: '',
            front_default: '',
            front_shiny: '',
          },
        },
      };
    case PokemonsTypes.DETAIL_SUCCCES:
      return {
        ...state,
        detail: action.payload.data,
      };
    case PokemonsTypes.DETAIL_FAILURE:
      return {
        ...state,
        detail: {
          id: -1,
          name: '',
          height: 0,
          weight: 0,
          sprites: {
            back_default: '',
            back_shiny: '',
            front_default: '',
            front_shiny: '',
          },
        },
      };
    default:
      return state;
  }
};

export default reducer;
