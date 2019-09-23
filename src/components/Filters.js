import React from 'react';
import './Filters.scss';
import PropTypes from 'prop-types';

const Filters = props => {
  const { getName , query , getSpecie } = props;

  return (
    <div className="search-bar">
      <p className="search-title">Find your favourite character:</p>
      <div className="search-bar-name">
        <label htmlFor="input" className="search-label">By name: </label>
        <input id="input" type="text" className="search-input" onChange={getName} value={query} placeholder="Enter a name"></input>
      </div>
      <div className="search-bar-specie">
        <p className="search-title-specie">By specie:</p>
        <label htmlFor="inputHuman" className="search-label-checkbox">
        Human
          <input id="inputHuman" type="checkbox" className="search-input-cb" value="Human" onChange={getSpecie}></input>
        </label>
        <label htmlFor="inputAlien" className="search-label-checkbox">
        Alien
          <input id="inputAlien" type="checkbox" className="search-input-cb" value="Alien" onChange={getSpecie}></input>
        </label>
      </div>
    </div>
  );
};

Filters.propTypes = {
  getName: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
  getSpecie: PropTypes.func.isRequired,
};

export default Filters;