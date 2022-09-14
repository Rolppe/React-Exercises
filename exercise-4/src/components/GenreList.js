import Movie from "./Movie";
import "./GenreList.css";

const GenreList = (props) => {
  return (
    <div className="genrelist">
      <h2 className="genrelist h1">{props.genreName}</h2>
      <Movie movieData={props.movies[0]} />
      <Movie movieData={props.movies[1]} />
      <Movie movieData={props.movies[2]} />
    </div>
  );
};

export default GenreList;
