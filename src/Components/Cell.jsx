import React from 'react';
import '../Styles/Cell.css';

const Cell = ({ value }) => {
  return (
    <div className={`cell ${value === 0 ? 'empty' : ''}`}>
      {value !== 0 ? value : ""}
    </div>
  );
};

export default Cell;
