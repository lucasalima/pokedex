import React from 'react';

import gif from '../../../../assets/pokeball.gif';
import './styles.scss';

const PokeBall = () => {
  return (
    <div className="pokeball-loader">
      <div className="title">Loading, please wait...</div>
      <div className="image">
        <img src={gif} alt="PokeBall" />
      </div>
    </div>
  );
};

export default PokeBall;
