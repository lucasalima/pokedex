import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector, connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from '../../../store';
import { PokemonDetail } from '../../../store/pokemons/types';
import * as PokemonsActions from '../../../store/pokemons/actions';

import BackButton from '../../Templates/Layout/BackButton';
import PokeBall from '../../Templates/Layout/PokeBall';
import NotFound from '../../Templates/Layout/NotFound';

import './styles.scss';

const Detail = () => {
  const dispatch = useDispatch();
  const { name } = useParams();

  const spriteUrl =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other-sprites/official-artwork/';

  const pokemon: PokemonDetail = useSelector(
    (state: ApplicationState) => state.pokemons.detail
  );

  useEffect(() => {
    dispatch(PokemonsActions.requestPokemonDetail(name));
  }, [dispatch, name]);

  return (
    <>
      <BackButton />

      {pokemon.id === 0 ? (
        <PokeBall />
      ) : (
        [
          pokemon.id === -1 ? (
            <NotFound />
          ) : (
            <div key="pokemon-cell" className="pokemon-cell">
              <div className="box">
                <div className="image">
                  <img
                    src={`${spriteUrl}/${pokemon.id}.png`}
                    alt={pokemon.name}
                  />
                </div>

                <div className="info">
                  <div className="title">Pokémon profile</div>
                  <ul className="profile">
                    <li>
                      <span className="name">ID:</span>
                      <span className="detail">{pokemon.id}</span>
                    </li>
                    <li>
                      <span className="name">Name:</span>
                      <span className="detail">{pokemon.name}</span>
                    </li>
                    <li>
                      <span className="name">Height:</span>
                      <span className="detail">{pokemon.height}</span>
                    </li>
                    <li>
                      <span className="name">Weight:</span>
                      <span className="detail">{pokemon.weight}</span>
                    </li>
                  </ul>

                  <div className="title">Other sprites</div>
                  <ul className="sprites">
                    <li>
                      <img
                        src={pokemon.sprites.front_default}
                        alt={pokemon.name}
                      />
                    </li>
                    <li>
                      <img
                        src={pokemon.sprites.back_default}
                        alt={pokemon.name}
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ),
        ]
      )}
    </>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  pokemons: state.pokemons.detail,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(PokemonsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
