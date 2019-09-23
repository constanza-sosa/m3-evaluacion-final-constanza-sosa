import React, { Fragment } from 'react';
import Filters from './Filters';
import CharacterList from './CharacterList';
import PropTypes from 'prop-types';

const Home = props => {
  const {getName, characters, query} = props;

  return (
    <Fragment>
      <Filters 
        getName={getName}
        query={query}
      />

      <CharacterList
        characters={characters}
        query={query}
      />
    </Fragment>
  );
};

Home.propTypes = {
  getName: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
  characters: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Home;