import React from 'react';

import pokeball from '../../../../assets/pokeball.png';
import './styles.scss';

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="error">
        <h1>4</h1>
        <img src={pokeball} alt="PokeBall" />
        <h1>4</h1>
      </div>

      <div className="message">
        <h2>Uh-oh!</h2>
        <h3>You look lost on your journey!</h3>
      </div>
    </div>
  );
};

export default NotFound;
