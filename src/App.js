import React from 'react';
import './App.scss';
import { fetchCharacters } from './services/fetchCharacters'

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        characters: [],
        query: ''
      };
  
    this.getCharacters = this.getCharacters.bind(this)
  }

  componentDidMount(){
    this.getCharacters()
  }

  getCharacters() {
    fetchCharacters()
      .then(data => {
        this.setState({
          characters: data.results
        });
      });
  }


  render() {
    const { characters } = this.state;

    return (
      <div className="app">
        <header className="app-header">
          <h1 className="header-title">Rick and Morty</h1>
          <img src="https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png" alt="Rick and Morty" className="header-title--img"></img>
        </header>
        <main>
          <label className="search-label">Busca tu personaje favorito</label>
          <input type="text" className="search-input"></input>
          <div className="results">
            <ol className="character-list">
              {characters
              .map (character => {
                return (
                <li className="character-item" key={character.id}>
                <div className="character-detail">
                  <img className="character-item" src={character.image} alt={character.name}></img>
                  <p className="character-name">Name:{character.name}</p>
                  <p className="character-specie">Specie:{character.species}</p>
                </div>
              </li>
              )})
              }
            </ol>
          </div>
        </main>

      </div>
    );
  }
}

export default App;
