import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainSection from "./components/MainSection";

const Movie = () => {
  const [movie, setMovie] = useState(null);
  const movieId = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId.movieId}?api_key=${
        import.meta.env.VITE_MOVIES_API_KEY
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
      });
  }, []);

  return (
    <section className="container py-12">
      <MainSection movie={movie} />
    </section>
  );
};

export default Movie;
