import "./Movie.css";

const Movie = (props) => {
  return (
    <div className="movie">
      <p className="movie__title">{props.movieData.title}</p>
      <p className="movie__director">{props.movieData.director}</p>
      <p className="movie__year">{props.movieData.year}</p>
    </div>
  );
};

export default Movie;
