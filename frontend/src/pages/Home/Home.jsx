import React, { useState, useEffect } from "react";
import MoviesSection from "../../components/MoviesSection";

const Home = () => {
  const [ratedMovies, setRatedMovies] = useState({
    loaded: false,
    movies: [],
  });
  const [popularMovies, setPopularMovies] = useState({
    loaded: false,
    movies: [],
  });
  const [upcomingMovies, setUpcomingMovies] = useState({
    loaded: false,
    movies: [],
  });

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${
        import.meta.env.VITE_MOVIES_API_KEY
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setRatedMovies({
          loaded: true,
          movies: data.results,
        });
      });
  }, []);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${
        import.meta.env.VITE_MOVIES_API_KEY
      }`
    )
      .then((response) => response.json())
      .then((data) =>
        setPopularMovies({
          loaded: true,
          movies: data.results,
        })
      );
  }, []);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${
        import.meta.env.VITE_MOVIES_API_KEY
      }`
    )
      .then((response) => response.json())
      .then((data) =>
        setUpcomingMovies({
          loaded: true,
          movies: data.results,
        })
      );
  }, []);

  return (
    <section className="py-6">
      <main className="container flex flex-col gap-10">
        <MoviesSection
          title={"Top Rated"}
          movies={ratedMovies.movies}
          loaded={ratedMovies.loaded}
        />
        <MoviesSection
          title={"Popular"}
          movies={popularMovies.movies}
          loaded={popularMovies.loaded}
        />
        <MoviesSection
          title={"Upcoming"}
          movies={upcomingMovies.movies}
          loaded={upcomingMovies.loaded}
        />
      </main>
    </section>
  );
};

export default Home;
