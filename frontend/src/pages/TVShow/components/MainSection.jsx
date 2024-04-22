import React from "react";

const MainSection = ({ show }) => {
  console.log(show);
  return (
    <section>
      {!show || show === undefined || show === null ? (
        <div>Nothing.</div>
      ) : (
        <main>
          <div className="flex">
            <img
              src={`https://image.tmdb.org/t/p/original${show.poster_path}`}
              alt={show.name}
              className="rounded-2xl w-1/3"
            />
            <div className="px-12">
              <h1 className="pt-8 text-white">{show.name}</h1>
              <p className="text-gray py-2 tracking-wide leading-relaxed">
                {show.overview}
              </p>
              <h6 className="pt-8 text-white tracking-wide font-medium">
                <span className="font-semibold">Release Date: </span>{" "}
                {show.first_air_date}
              </h6>
              <h6 className="py-4 text-white tracking-wide font-medium">
                <span className="font-semibold">Genres: </span>
                {show.genres
                  ? show.genres.map((genre, index) => {
                      return (
                        <span key={index}>
                          {genre.name}
                          {index != show.genres.length - 1 ? ", " : ""}
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
