import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';

import {Title} from './components/Title';
import SearchForm from './components/SearchForm';
import MovieList from './components/MovieList';

class App extends Component {

  state = { usedSearch:false,
            results:[]};

  _handleResults = (results) => {
    this.setState({results})
  }


  render() {
    return (
      <div className="App">

        <Title>Search Movies</Title>
        <div className='SearchForm-wrapper'>
          <SearchForm onResults={this._handleResults}/>
        </div>
        {this.state.usedSearch}
        {this.state.results.length === 0 
          ? <p>NO tenemos resultados</p>
          : <MovieList movies={this.state.results}/>
        }
      </div>
    );
  }
}

export default App;
