import React, { useState, useEffect } from "react";
import MoviesSection from "./components/MoviesSection";

const Home = () => {
  const [ratedMovies, setRatedMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${
        import.meta.env.VITE_MOVIES_API_KEY
      }`
    )
      .then((response) => response.json())
      .then((data) => setRatedMovies(data.results));
  }, []);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${
        import.meta.env.VITE_MOVIES_API_KEY
      }`
    )
      .then((response) => response.json())
      .then((data) => setPopularMovies(data.results));
  }, []);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${
        import.meta.env.VITE_MOVIES_API_KEY
      }`
    )
      .then((response) => response.json())
      .then((data) => setUpcomingMovies(data.results));
  }, []);

  return (
    <section className="py-6">
      <main className="container flex flex-col gap-10">
        <MoviesSection title={"Top Rated"} movies={ratedMovies} />
        <MoviesSection title={"Trending"} movies={popularMovies} />
        <MoviesSection title={"Upcoming"} movies={upcomingMovies} />
      </main>
    </section>
  );
};

export default Home;
