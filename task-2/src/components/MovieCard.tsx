import type { Movie } from '../data/movies';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>Genre: {movie.genre}</p>
        <span className="rating">⭐ {movie.rating}</span>
        <button className="watch-btn">Watch Now</button>
      </div>
    </div>
  );
};

export default MovieCard;