import React from 'react';
import './CharacterList.scss';
import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';

const CharacterList = props => {
  const { 
    characters,
    query,
    querySpecie,
    queryEpisode,
    queryGender } = props;

  return (
    <div className="results">
      <ol className="character-list">
        {characters
        .filter(character => character.name.toUpperCase().includes(query.toUpperCase()))

        .filter(character => {
          if (queryEpisode === '') {
            return true;
          } else if (queryEpisode === 'just 1 episode'){
            return (
            character.episode.length === 1
            );
          } else if (queryEpisode === 'more than 1, but less than 15'){
            return (
            character.episode.length > 1 && character.episode.length < 15 
            );
          } else {
            return (
            character.episode.length >= 15
            );
          }
        })
        .filter(character => {
          if (querySpecie === '' || querySpecie.length > 1) {
            return true;
          } else {
            return (
            character.species.includes(querySpecie)
            );
          }
        })

        .filter(character => {
          if (queryGender === '' || queryGender === 'all') {
            return true;
          } else {
              return (
                queryGender === character.gender
              );
          } 
        })
        .map (character => {
          return (
            <li className="character-item" key={character.id}>
              <Link to={`/character-detail/${character.id}`} className="character-link">
                <CharacterCard 
                  character={character}
                />
              </Link>
            </li>
        )})
        }
      </ol>
    </div>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  query: PropTypes.string.isRequired,
  querySpecie: PropTypes.arrayOf(PropTypes.string).isRequired,
  queryEpisode: PropTypes.string.isRequired
};

export default CharacterList;




          
          


