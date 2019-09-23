import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CharacterDetail = props => {
  const { characters, routerProps } = props;
  const ramId = parseInt(routerProps.match.params.ramId);
  
  if (ramId > characters.length) {
    return (
      <div>
        <p>El personaje solicitado no existe</p>
        <Link to="/" className="app__back"> Volver al listado de personajes </Link>
      </div>
    );
  }

  const character = characters.filter(item => item.id === ramId);
  if (character[0]) {
  const {name, image, status, species, origin, episode} = character[0];
    return (
      <React.Fragment>
        <div className="char-det">
          <div className="char-det__img">
            <img src={image} alt={name}/>
          </div>
          <h2 className="char-det__name">Name: {name}</h2>
          <p className="char-det__status">Status: {status}</p>
          <p className="char-det__species">Specie: {species}</p>
          <p className="char-det__origin">Origin: {origin.name}</p>
          <p className="char-det__episodes">Episodes: {episode.length}</p>
        </div>
        <Link to="/" className="app__back">Volver</Link>
      </React.Fragment>
    );
} else {
  return (
    <React.Fragment>
      <p>El personaje solicitado no existe</p>
      <Link to="/" className="app__back">Volver al listado de personajes</Link>
    </React.Fragment>
  );
}
}

CharacterDetail.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  routerProps: PropTypes.object.isRequired,
};

export default CharacterDetail;