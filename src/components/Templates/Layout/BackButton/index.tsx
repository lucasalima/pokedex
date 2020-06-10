import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.scss';

const BackButton = () => {
  return (
    <Link className="back-button" to="/">
      <FiArrowLeft />
      <span>Back</span>
    </Link>
  );
};

export default BackButton;
