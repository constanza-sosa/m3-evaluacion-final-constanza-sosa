import React, { Fragment } from 'react';
import Filters from './Filters';
import CharacterList from './CharacterList';
import PropTypes from 'prop-types';

const Home = props => {
  const { getName , characters , query , getSpecie , querySpecie } = props;

  return (
    <Fragment>
      <Filters 
        getName={getName}
        query={query}
        getSpecie={getSpecie}
        querySpecie = {querySpecie}
      />

      <CharacterList
        characters={characters}
        query={query}
        querySpecie = {querySpecie}
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