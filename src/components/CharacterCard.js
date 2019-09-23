import React from 'react';
import PropTypes from 'prop-types';

const CharacterCard = props => {
  const { character } = props;
  const { image, name, species } = character;

  return (
    
        <div className="character-detail">
          <img className="character-item" src={image} alt={name}></img>
          <h2 className="character-name">Name: {name}</h2>
          <p className="character-specie">Specie: {species}</p>
        </div>

  );
};

CharacterCard.propTypes = {
  character: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CharacterCard;




          
          


