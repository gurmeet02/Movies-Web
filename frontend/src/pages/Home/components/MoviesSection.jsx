import React, { useState, useEffect } from "react";
import MovieCard from "../../../components/MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/navigation";

const MoviesSection = () => {
  const [ratedMovies, setRatedMovies] = useState([]);
  const number = 4.5;

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${
        import.meta.env.VITE_MOVIES_API_KEY
      }`
    )
      .then((response) => response.json())
      .then((data) => setRatedMovies(data.results));
  }, []);

  return (
    <section className="container py-10">
      <h1 className="text-gray tracking-wider pb-6">Top Rated</h1>
      <Swiper
        initialSlide={0}
        modules={[Navigation, Autoplay]}
        navigation={true}
        spaceBetween={24}
        slidesPerView={number}
        loop={true}
        allowSlideNext={true}
        className="mySwiper"
      >
        {ratedMovies.length < 0
          ? null
          : ratedMovies.map((movie, index) => {
              return (
                <SwiperSlide key={index}>
                  <MovieCard title={movie.title} poster={movie.poster_path} />
                </SwiperSlide>
              );
            })}
      </Swiper>
    </section>
  );
};

export default MoviesSection;
