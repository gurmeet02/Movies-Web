import React from "react";
import MoviesCard from "../../Home/components/MovieCard";
import TVShowCard from "../../TVShows/components/TVShowCard";

const Movies = ({ movies, searchTV }) => {
  console.log(movies);
  return (
    <section className="container py-12">
      {!movies || movies.length <= 0 ? (
        <div className="flex items-center">
          <h2 className="text-white">Not Found.</h2>
        </div>
      ) : (
        <main className="grid grid-cols-4 gap-x-10 gap-y-16 max-lg:grid-cols-3 max-lg:gap-y-20 max-lg:gap-x-10 max-md:grid-cols-2 max-[520px]:grid-cols-1">
          {searchTV
            ? movies.map((movie, index) => {
                return (
                  <TVShowCard
                    key={index}
                    title={!movie.title ? movie.name : movie.title}
                    poster={movie.poster_path}
                    releaseDate={
                      !movie.release_date
                        ? movie.first_air_date
                        : movie.release_date
                    }
                  />
                );
              })
            : movies.map((movie, index) => {
                return (
                  <MoviesCard
                    key={index}
                    title={!movie.title ? movie.name : movie.title}
                    poster={movie.poster_path}
                    releaseDate={
                      !movie.release_date
                        ? movie.first_air_date
                        : movie.release_date
                    }
                  />
                );
              })}
        </main>
      )}
    </section>
  );
};

export default Movies;
