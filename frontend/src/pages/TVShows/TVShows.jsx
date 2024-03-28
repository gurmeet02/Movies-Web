import React, { useEffect, useState } from "react";
import MoviesSection from "../../components/MoviesSection";

const TVShows = () => {
  const [ratedShows, setRatedShows] = useState({
    shows: [],
    loaded: false,
  });
  const [popularShows, setPopularShows] = useState({
    shows: [],
    loaded: false,
  });
  const [upcomingShows, setUpcomingShows] = useState({
    shows: [],
    loaded: false,
  });

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${
        import.meta.env.VITE_MOVIES_API_KEY
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setRatedShows({
          shows: data.results,
          loaded: true,
        });
      });
  }, []);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${
        import.meta.env.VITE_MOVIES_API_KEY
      }`
    )
      .then((response) => response.json())
      .then((data) =>
        setPopularShows({
          shows: data.results,
          loaded: true,
        })
      );
  }, []);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/airing_today?api_key=${
        import.meta.env.VITE_MOVIES_API_KEY
      }`
    )
      .then((response) => response.json())
      .then((data) =>
        setUpcomingShows({
          shows: data.results,
          loaded: true,
        })
      );
  }, []);

  return (
    <section className="container py-6">
      <main className="flex flex-col gap-10">
        <MoviesSection
          title={"Top Rated"}
          loaded={ratedShows.loaded}
          movies={ratedShows.shows}
        />
        <MoviesSection
          title={"Popular"}
          loaded={popularShows.loaded}
          movies={popularShows.shows}
        />
        <MoviesSection
          title={"Airing Today"}
          loaded={upcomingShows.loaded}
          movies={upcomingShows.shows}
        />
      </main>
    </section>
  );
};

export default TVShows;
