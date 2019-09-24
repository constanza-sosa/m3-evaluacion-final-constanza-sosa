import React from 'react';
import './Filters.scss';
import PropTypes from 'prop-types';

const Filters = props => {
  const { getName , query , getSpecie, getEpisodes } = props;

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
      <div className="search-bar-episodes">
        <label htmlFor="episode" className="search-title-episodes">By number of episodes:</label>
          <select id="episode" name="episode" onChange={getEpisodes}>
            <option value="">Select an option:</option>
            <option value="just 1 episode" >Just 1 episode</option>
            <option value="more than 1, but less than 15">More than 1, but less than 15</option>
            <option value="more than 15">More than 15</option>
        </select>
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