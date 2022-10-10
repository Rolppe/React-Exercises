import MoviesList from "./components/MoviesList";
import React from "react";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = async () => {
    try {
      const response = await fetch("https://swapi.dev/api/films/");

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      //console.log(data);

      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    }
  };

  let content;

  if (error) {
    content = <p>{error}</p>;
  } else {
    content = <MoviesList movies={movies} />;
  }

  return (
    <>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <selection>{content}</selection>
    </>
  );
};

export default App;
