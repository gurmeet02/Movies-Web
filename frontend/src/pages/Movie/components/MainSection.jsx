import React from "react";

const MainSection = ({ movie }) => {
  console.log(movie);
  const addMovieToList = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch("http://localhost:8080/list/add-movie", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(movie),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section>
      {!movie || movie === undefined || movie === null ? null : (
        <main>
          <div className="flex items-center">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.name}
              className="rounded-2xl w-1/3"
            />
            <div className="p-12">
              <h1 className="text-white">{movie.original_title}</h1>
              <p className="text-gray py-2 tracking-wide leading-relaxed">
                {movie.overview}
              </p>
              <div className="py-10 flex flex-col gap-6">
                <h6 className="text-white tracking-wide font-medium">
                  <span className="font-semibold">Release Date: </span>{" "}
                  {movie.release_date}
                </h6>
                <h6 className="text-white tracking-wide font-medium">
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
                <form
                  action="http://localhost:3000/list/add-movie"
                  method="POST"
                  className="pt-8"
                  onSubmit={addMovieToList}
                >
                  <button
                    type="submit"
                    className="text-lg flex items-center gap-2 text-white py-2 px-6 rounded-full transition-all bg-primary hover:brightness-105"
                  >
                    <i class="bx bx-bookmark-plus text-2xl"></i>Add to Watchlist
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      )}
    </section>
  );
};

export default MainSection;
