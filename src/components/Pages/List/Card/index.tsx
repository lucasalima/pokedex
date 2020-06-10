import React from 'react';
import { Link } from 'react-router-dom';

import { PokemonList } from '../../../../store/pokemons/types';

import './styles.scss';

interface OwnProps {
  pokemon: PokemonList;
}

const Card = ({ pokemon }: OwnProps) => {
  const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other-sprites/official-artwork/${
    pokemon.url.split('/')[6]
  }.png`;

  return (
    <Link to={`/detail/${pokemon.name}`} className="pokemon-card">
      <div className="img">
        <img src={spriteUrl} alt={pokemon.name} />
      </div>
      <div className="name">{pokemon.name}</div>
    </Link>
  );
};

export default Card;
