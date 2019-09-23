import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CharacterDetail = props => {
  const { characters, routerProps } = props;
  const ramId = parseInt(routerProps.match.params.ramId);
  
  const character = characters.filter(item => item.id === ramId);

  if (character[0]) {
  const {name, image, status, species, origin, episode} = character[0];
    return (
      <React.Fragment>
        <div className="character-detail">
          <div className="character-detail__img">
            <img src={image} alt={name}/>
          </div>
          <h2 className="character-detail__name">Name: {name}</h2>
          <p className="character-detail__status">Status: {status}</p>
          <p className="character-detail__species">Specie: {species}</p>
          <p className="character-detail__origin">Origin: {origin.name}</p>
          <p className="character-detail__episodes">Episodes: {episode.length}</p>
        </div>
        <Link to="/" className="app__back">Volver</Link>
      </React.Fragment>
    );
};
}

CharacterDetail.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  routerProps: PropTypes.object.isRequired,
};

export default CharacterDetail;