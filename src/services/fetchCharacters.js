const endpoint = 'https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json';
const endpoint2 = 'https://rickandmortyapi.com/api/character/';

const fetchCharacters = () => {
  return fetch(endpoint2 || endpoint)
  .then(response => response.json());
};

export {fetchCharacters};