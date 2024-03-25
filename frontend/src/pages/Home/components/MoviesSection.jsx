import React, { useState, useEffect } from "react";
import MovieCard from "../../../components/MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/navigation";

const MoviesSection = ({ title, movies }) => {
  const number = 4.5;

  return (
    <section className="py-8">
      <h2 className="text-gray tracking-wider pb-6">{title}</h2>
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
        {movies.length <= 0 || !movies ? (
          <div className="flex justify-center">
            <div
              className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] text-primary"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          </div>
        ) : (
          movies.map((movie, index) => {
            return (
              <SwiperSlide key={index}>
                <MovieCard
                  title={movie.title}
                  poster={movie.poster_path}
                  releaseDate={movie.release_date}
                />
              </SwiperSlide>
            );
          })
        )}
      </Swiper>
    </section>
  );
};

export default MoviesSection;
