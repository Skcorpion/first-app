import React from 'react';
import './MoviesList.scss';
import MovieCard from '../MovieCard/MovieCard';
import PropTypes from 'prop-types';

const MoviesList = ({ movies }) => {
  const cardsList = movies.map(movie => (
    <MovieCard key={movie.imdbId} movie={movie} />
  ));

  return <div className="movies">{cardsList}</div>;
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      imdbId: PropTypes.string.isRequired
    })
  )
};

export default MoviesList;
