import React, { useState, useEffect, ChangeEvent } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector, connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { FiSearch, FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import { ApplicationState } from '../../../store';
import { PokemonResponse } from '../../../store/pokemons/types';
import * as PokemonsActions from '../../../store/pokemons/actions';

import PokeBall from '../../Templates/Layout/PokeBall';
import Card from './Card';

import './styles.scss';

const PokemonList = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const queryParams = useLocation();

  const maxRecords = 8;

  const [searchBy, setSearchBy] = useState<string>('');

  const [pagination, setPagination] = useState({
    offset: Number(new URLSearchParams(queryParams.search).get('offset')),
    limit: maxRecords,
  });

  const { next, previous, results }: PokemonResponse = useSelector(
    (state: ApplicationState) => state.pokemons.list
  );

  useEffect(() => {
    dispatch(PokemonsActions.requestPokemonList(pagination));
  }, [dispatch, pagination]);

  useEffect(() => {
    history.push({
      pathname: '/',
      search: `?offset=${pagination.offset}`,
    });
  }, [history, pagination]);

  const handleInputSearchBy = (event: ChangeEvent<HTMLInputElement>) => {
    const searchBy = event.target.value;

    setSearchBy(searchBy);
  };

  const handlePrev = () => {
    if (previous === null) {
      return;
    }

    setPagination({
      offset: pagination.offset - maxRecords,
      limit: pagination.limit,
    });
  };

  const handleNext = () => {
    if (next === null) {
      return;
    }

    setPagination({
      offset: pagination.offset + maxRecords,
      limit: pagination.limit,
    });
  };

  const handleSearch = () => {
    if (searchBy.length > 0) {
      history.push(`/detail/${searchBy.toLocaleLowerCase()}`);
    }
  };

  return (
    <>
      <main>
        <div className="filter">
          <div className="field-row">
            <div className="field-group">
              <div className="field">
                <label htmlFor="searchBy">Enter Pokémon name</label>
                <input
                  type="text"
                  id="searchBy"
                  onChange={handleInputSearchBy}
                />
              </div>
            </div>

            <button type="button" onClick={handleSearch}>
              <FiSearch />
              <span>Search</span>
            </button>
          </div>
        </div>

        {Object.keys(results).length === 0 ? (
          <PokeBall />
        ) : (
          <>
            <div className="pokemon-list">
              {results.map((pokemon) => (
                <Card key={pokemon.name} pokemon={pokemon} />
              ))}
            </div>

            <div className="pagination">
              <button
                type="button"
                disabled={previous === null}
                onClick={handlePrev}
              >
                <FiArrowLeft />
                <span>Previous</span>
              </button>
              <button
                type="button"
                disabled={next === null}
                onClick={handleNext}
              >
                <span>Next</span>
                <FiArrowRight />
              </button>
            </div>
          </>
        )}
      </main>
    </>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  pokemons: state.pokemons.list,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(PokemonsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
