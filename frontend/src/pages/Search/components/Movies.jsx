import React from "react";
import MoviesCard from "../../Home/components/MovieCard";

const Movies = ({ movies }) => {
  console.log(movies);
  return (
    <section className="container py-12">
      <main className="grid grid-cols-4 gap-12">
        {!movies || movies.length <= 0 ? (
          <div className="flex items-center justify-center text-center">
            <h2 className="text-white">Not Found.</h2>
          </div>
        ) : (
          movies.map((movie, index) => {
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
          })
        )}
      </main>
    </section>
  );
};

export default Movies;
