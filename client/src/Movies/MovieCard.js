import React from 'react';
import {Link} from 'react-router-dom';

const MovieCard = props => {
  return (
    <Link to={`/Movies/${props.id}`}>
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>
      </div>
    </Link>
  );
};

export default MovieCard;
