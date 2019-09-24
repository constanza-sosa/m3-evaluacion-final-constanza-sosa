import React, { Fragment } from 'react';
import Filters from './Filters';
import CharacterList from './CharacterList';
import PropTypes from 'prop-types';

const Home = props => {
  const { 
    getName,
    characters,
    query,
    getSpecie, 
    querySpecie, 
    queryEpisode, 
    getEpisodes, 
    queryGender, 
    getGender } = props;

  return (
    <Fragment>
      <Filters 
        getName = {getName}
        query = {query}
        getSpecie = {getSpecie}
        getEpisodes = {getEpisodes}
        getGender = {getGender}
        queryGender = {queryGender}
      />

      <CharacterList
        characters = {characters}
        query = {query}
        querySpecie = {querySpecie}
        queryEpisode = {queryEpisode}
        queryGender = {queryGender}
      />
    </Fragment>
  );
};

Home.propTypes = {
  getName: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  getSpecie: PropTypes.func.isRequired,
  querySpecie: PropTypes.array.isRequired,
  getEpisodes: PropTypes.func.isRequired,
  queryEpisode: PropTypes.string.isRequired,
  getGender: PropTypes.func.isRequired,
  queryGender: PropTypes.string.isRequired,
};

export default Home;