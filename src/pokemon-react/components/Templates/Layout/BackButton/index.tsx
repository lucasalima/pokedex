import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.scss';

const BackButton = () => {
  const history = useHistory();

  const handleClick = () => {
    history.goBack();
  };

  return (
    <button type="button" className="back-button" onClick={handleClick}>
      <FiArrowLeft />
      <span>Back</span>
    </button>
  );
};

export default BackButton;
