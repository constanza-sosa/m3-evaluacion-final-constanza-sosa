import React from 'react';
import './Filters.scss';
import PropTypes from 'prop-types';

const Filters = props => {
  const { getName , query } = props;

  return (
   <div className="search-bar">
    <p className="search-title">Find your favourite character</p>
    <div className="sear-bar-name">
      <label htmlFor="input" className="search-label">By Name: </label>
      <input id="input" type="text" className="search-input" onChange={getName} value={query} placeholder="Enter a name"></input>
    </div>
   </div>
  );
};

Filters.propTypes = {
  getName: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

export default Filters;