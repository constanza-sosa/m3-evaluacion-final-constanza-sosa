import React from 'react';
import './CharacterList.scss';
import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';

const CharacterList = props => {
  const { characters , query , querySpecie } = props;

  return (
    <div className="results">
      <ol className="character-list">
        {characters
        .filter(character => character.name.toUpperCase().includes(query.toUpperCase()))
        .filter(character => {
          if (querySpecie === '' || querySpecie.length > 1) {
            return true;
          } else {
            return (
            character.species.includes(querySpecie)
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
};

export default CharacterList;




          
          


