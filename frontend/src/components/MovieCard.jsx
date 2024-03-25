import React, { useState } from "react";

const MoviesCard = ({ title, poster }) => {
  const [showTitle, setShowTitle] = useState(false);
  return (
    <main className="w-60 rounded px-2 relative text-center flex justify-center items-center">
      <h5
        className={`text-white tracking-wider text-center absolute z-10 px-6 duration-300 ${
          showTitle ? "opacity-100 top-5" : "opacity-0 top-0"
        }`}
      >
        {title}
      </h5>
      <img
        src={`https://image.tmdb.org/t/p/original${poster}`}
        alt="image"
        className="w-full rounded-2xl opacity-80 transition-all duration-300 cursor-pointer hover:brightness-[60%] hover:opacity-60"
        onMouseOver={() => {
          setShowTitle(true);
        }}
        onMouseLeave={() => {
          setShowTitle(false);
        }}
      />
    </main>
  );
};

export default MoviesCard;
