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
  error: false,
  loading: false,
};

const reducer: Reducer<PokemonsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PokemonsTypes.LIST_REQUEST:
      return {
        ...state,
        loading: true,
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
        loading: false,
        error: false,
        list: action.payload.data,
      };
    case PokemonsTypes.LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
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
        loading: true,
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
        loading: false,
        error: false,
        detail: action.payload.data,
      };
    case PokemonsTypes.DETAIL_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
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
