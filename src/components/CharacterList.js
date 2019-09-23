import React from 'react';
import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';

const CharacterList = props => {
  const { characters , query } = props;

  return (
    <div className="results">
    <ol className="character-list">
      {characters
      .filter(character => character.name.toUpperCase().includes(query.toUpperCase()))
      .map (character => {
        return (
        <li className="character-item" key={character.id}>
        
        <CharacterCard 
        character={character}
        />

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
};

export default CharacterList;




          
          


