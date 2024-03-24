import React, { useState } from "react";

const TopRatedCard = ({ title, poster }) => {
  return (
    <main className="w-60 rounded px-2 relative">
      {/* <h5
        className={`text-white tracking-wider text-center absolute z-10 px-4 duration-200 ${
          showTitle ? "opacity-100 bottom-4" : "opacity-0 bottom-0"
        }`}
      >
        {title}
      </h5> */}
      <img
        src={`https://image.tmdb.org/t/p/original${poster}`}
        alt="image"
        className="w-full rounded-2xl opacity-80"
      />
    </main>
  );
};

export default TopRatedCard;
