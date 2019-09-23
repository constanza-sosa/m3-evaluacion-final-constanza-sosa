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
        query:'',
        querySpecie: [],
      };
  
    this.getName = this.getName.bind(this)
    this.getSpecie = this.getSpecie.bind(this)
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
      this.setState({ query: query });
    }
  getSpecie(event) {
    const query = event.currentTarget.value;
    this.setState(prevState => {
      const NewSpecie = [...prevState.querySpecie];
      const result = NewSpecie.findIndex(item => item === query);

      if (result < 0 ) {
        NewSpecie.push(query);
      } 
      else {
        NewSpecie.splice(result,1);
      }
      return {
        querySpecie: NewSpecie
      }
    });
  }
  render() {
    const { characters , query , querySpecie } = this.state;
    console.log(this.state)

    return (
      <div className="app">
        <Header />

        <main className="app-main">
          <Switch>
            <Route exact path="/" render={ () => {
              return (
                <Home 
                  characters = {characters}
                  query = {query}
                  querySpecie = {querySpecie}
                  getName = {this.getName}
                  getSpecie = {this.getSpecie}
                />
              );
            }} />
            <Route path="/character-detail/:ramId" render={ routerProps => {
                return (
                  <CharaterDetail 
                    routerProps={routerProps}
                    characters = {characters}
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
