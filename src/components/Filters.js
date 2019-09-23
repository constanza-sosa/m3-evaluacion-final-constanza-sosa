import React from 'react';
import './Filters.scss';
import PropTypes from 'prop-types';

const Filters = props => {
  const { getName , query , getSpecie , querySpecie } = props;

  return (
   <div className="search-bar">
    <p className="search-title">Find your favourite character</p>
    <div className="search-bar-name">
      <label htmlFor="input" className="search-label">By name: </label>
      <input id="input" type="text" className="search-input" onChange={getName} value={query} placeholder="Enter a name"></input>
    </div>
    <div className="search-bar-specie">
      <label htmlFor="inputHuman" className="search-label-checkbox">
      <input id="inputHuman" type="checkbox" className="search-input" value="Human" onChange={getSpecie}></input>
      Human:
      </label>
      <label htmlFor="inputAlien" className="search-label-checkbox">
      <input id="inputAlien" type="checkbox" className="search-input" value="Alien" onChange={getSpecie}></input>
      Alien:
      </label>
    </div>
   </div>
  );
};

Filters.propTypes = {
  getName: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

export default Filters;