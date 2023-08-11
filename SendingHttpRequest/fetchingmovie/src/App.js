import React, { useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: "Some Dummy Movie",
  //     openingText: "This is the opening text of the movie",
  //     releaseDate: "2021-05-18",
  //   },
  //   {
  //     id: 2,
  //     title: "Some Dummy Movie 2",
  //     openingText: "This is the second opening text of the movie",
  //     releaseDate: "2021-05-19",
  //   },
  // ];

  const [movies, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setError] = useState(null);

  const fetchMovieHandler = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("https://swapi.dev/api/films");
      if (!res.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await res.json();
      const transformMovieData = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_Date,
        };
      });
      setMovieData(transformMovieData);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieHandler();
  },[]);

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !hasError && (
          <p>No Movies Found</p>
        )}
        {isLoading && <p>Loading...</p>}
        {!isLoading && hasError && <p>{hasError}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
