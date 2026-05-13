import MovieCard from './MovieCard';
import movies, { type Movie } from '../data/movies';

const MovieList = () => {
  return (
    <div className="movie-list">
      {movies.map((movie: Movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;