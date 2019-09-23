import React, { Component } from 'react';
import './App.scss';
import { fetchCharacters } from './services/fetchCharacters'
import Header from './components/Header';
import Home from './components/Home'
import CharaterDetail from './components/CharacterDetail';
import Footer from './components/Footer';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        characters: [],
        query: '',
        loading: true,
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
          characters: data.results,
          loading: false,
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
    const { characters, loading, query } = this.state;

    return (
      <div className="app">
        <Header />

        <main className="app-main">
          <Switch>
            <Route exact path="/" render={ () => {
              return (
                <Home 
                  getName = {this.getName}
                  characters = {characters}
                  query = {query}
                />
              );
            }} />
            <Route path="/character-detail/:ramId" render={ routerProps => {
                return (
                  <CharaterDetail 
                    routerProps={routerProps}
                    characters = {characters}
                    leading = {loading}
                  />
                );
              }} />
          </Switch> 
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
