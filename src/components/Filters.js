import React from 'react';
import PropTypes from 'prop-types';

const Filters = props => {
  const { getName , query } = props;

  return (
   <div>
    <label className="search-label">Busca tu personaje favorito</label>
    <input type="text" className="search-input" onChange={getName} value={query}></input>
   </div>
  );
};

Filters.propTypes = {
  getName: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

export default Filters;