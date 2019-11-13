import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from "./MovieCard"

const MovieList = props => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, []);
  
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} title={movie.title} director={movie.director} metascore={movie.metascore} stars={movie.stars}  />
      ))}
    </div>
  );
}

export default MovieList;
