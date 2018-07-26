import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bulma/css/bulma.css';

import Movie from './Movie';

export default class MovieList extends Component {
  static propTypes = {
    movies: PropTypes.array,
  }

  render() {
    const {movies} = this.props;

    return (
        <div className='movie-list'>
        {

                    movies.map(movie => {
                        return (

                            <div className='movielist.item'>
                                <Movie 
                                    key={movie.imdbID}
                                    title={movie.Title}
                                    year={movie.Year}
                                    poster={movie.Poster}
                                    />
                                </div>
            
                        )
                      })
        }
          
        </div>
      )



  }
}
