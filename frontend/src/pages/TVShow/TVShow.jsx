import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainSection from "./components/MainSection";

const Movie = () => {
  const [show, setShow] = useState(null);
  const showId = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/${showId.showId}?api_key=${
        import.meta.env.VITE_MOVIES_API_KEY
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setShow(data);
      });
  }, []);

  return (
    <section className="container py-16">
      <MainSection show={show} />
    </section>
  );
};

export default Movie;
