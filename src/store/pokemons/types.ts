/**
 * Action types
 */
export enum PokemonsTypes {
  LIST_REQUEST = '@pokemons/LIST_REQUEST',
  LIST_SUCCCES = '@pokemons/LIST_SUCCCES',
  LIST_FAILURE = '@pokemons/LIST_FAILURE',
  DETAIL_REQUEST = '@pokemons/DETAIL_REQUEST',
  DETAIL_SUCCCES = '@pokemons/DETAIL_SUCCCES',
  DETAIL_FAILURE = '@pokemons/DETAIL_FAILURE',
}

/**
 * Data types
 */
export interface PokemonList {
  name: string;
  url: string;
}

export interface PokemonResponse {
  count: number;
  next: string;
  previous: string;
  results: PokemonList[];
}

export interface PokemonDetail {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
  };
}

/**
 * State type
 */
export interface PokemonsState {
  readonly list: PokemonResponse;
  readonly detail: PokemonDetail;
  readonly loading: boolean;
  readonly error: boolean;
}
