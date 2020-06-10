import React from 'react';

import logo from '../../../../assets/pokemon-logo.png';
import './styles.scss';

const Header = () => {
  return (
    <header className="app-header">
      <img src={logo} alt="Pokémon" height="80" />
    </header>
  );
};

export default Header;
