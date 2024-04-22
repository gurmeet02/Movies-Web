import React from "react";

const MainSection = ({ movie }) => {
  console.log(movie);
  return (
    <section>
      {!movie || movie === undefined || movie === null ? null : (
        <main>
          <div className="flex">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.name}
              className="rounded-2xl w-1/3"
            />
            <div className="px-12">
              <h1 className="pt-8 text-white">{movie.name}</h1>
              <p className="text-gray py-2 tracking-wide leading-relaxed">
                {movie.overview}
              </p>
              <h6 className="pt-8 text-white tracking-wide font-medium">
                <span className="font-semibold">Release Date: </span>{" "}
                {movie.release_date}
              </h6>
              <h6 className="py-4 text-white tracking-wide font-medium">
                <span className="font-semibold">Genres: </span>
                {movie.genres
                  ? movie.genres.map((genre, index) => {
                      return (
                        <span key={index}>
                          {genre.name}
                          {index != movie.genres.length - 1 ? ", " : ""}
                        </span>
                      );
                    })
                  : null}
              </h6>
            </div>
          </div>
        </main>
      )}
    </section>
  );
};

export default MainSection;
