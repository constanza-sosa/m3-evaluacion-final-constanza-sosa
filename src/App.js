import React from 'react';
import './App.scss';
import { fetchCharacters } from './services/fetchCharacters'
import Home from './components/Home'
import Header from './components/Header';

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        characters: [],
        query: ''
      };
  
    this.getName = this.getName.bind(this)
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

  getName(event) {
    const query = event.currentTarget.value;
      this.setState({
        query: query
      });
    }

  render() {
    const { characters, query } = this.state;

    return (
      <div className="app">
        <Header />

        <Home 
        getName = {this.getName}
        characters = {characters}
        query = {query}
        />

      </div>
    );
  }
}

export default App;
