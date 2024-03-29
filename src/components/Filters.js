import React from 'react';
import './Filters.scss';
import PropTypes from 'prop-types';

const Filters = props => {
  const { 
    getName,
    query,
    getSpecie, 
    getEpisodes,
    getGender, 
    queryGender } = props;

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
          <select id="episode" name="episode" onChange={getEpisodes} className="select">
            <option value="">Select an option:</option>
            <option value="just 1 episode" >Just 1 episode</option>
            <option value="more than 1, but less than 15">More than 1, but less than 15</option>
            <option value="more than 15">More than 15</option>
        </select>
      </div>
      <div className="search-bar-gender"> By gender:
        <div>
          <label htmlFor="genderFemale">
            <input
              id="genderFemale"
              type="radio"
              value="Female"
              name="genderFemale"
              className="input-gender"
              checked = {queryGender === 'Female'}
              onChange = { getGender }
            />
            Female
          </label>
        </div>
        <div>
          <label htmlFor="genderMale">
            <input
              id="genderMale"
              type="radio"
              value="Male"
              name="genderMale"
              className="input-gender"
              checked = {queryGender === 'Male'}
              onChange = { getGender }
            />
            Male
          </label>
        </div>
        <div>
          <label htmlFor="genderunknown">
            <input
              id="genderunknown"
              type="radio"
              value="unknown"
              name="genderunknown"
              className="input-gender"
              checked = {queryGender === 'unknown'}
              onChange = { getGender }
            />
            unknown
          </label>
        </div>
        <div>
          <label htmlFor="genderAll">
            <input
              id="genderAll"
              type="radio"
              value="all"
              name="genderAll"
              className="input-gender"
              checked = {queryGender === 'all'}
              onChange = { getGender }
            />
            all
          </label>
        </div>
      </div>
    </div>
  );
};

Filters.propTypes = {
  getName: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
  getSpecie: PropTypes.func.isRequired,
  getEpisodes: PropTypes.func.isRequired,
};

export default Filters;