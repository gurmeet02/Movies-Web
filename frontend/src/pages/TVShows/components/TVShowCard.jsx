import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const TVShowCard = ({ title, poster, releaseDate, id }) => {
  const [showInfo, setShowInfo] = useState(false);
  const { showId } = useParams();
  const navigate = useNavigate();
  return (
    <main
      className="w-60 rounded relative text-center flex justify-center items-center transition-all duration-300 hover:scale-[98%] cursor-pointer"
      onMouseOver={() => {
        setShowInfo(true);
      }}
      onMouseLeave={() => {
        setShowInfo(false);
      }}
      onClick={() => {
        navigate(`/tv/${id}`);
      }}
    >
      <h5
        className={`text-white tracking-wider text-center absolute z-10 px-6 duration-300 ${
          showInfo ? "opacity-100 top-5 z-[1]" : "opacity-0 top-0 z-[0]"
        }`}
      >
        {title}
      </h5>
      <h6
        className={`text-white tracking-wider text-center absolute z-10 px-6 duration-300 ${
          showInfo ? "opacity-100 bottom-5 z-[1]" : "opacity-0 bottom-0 z-[0]"
        }`}
      >
        {releaseDate}
      </h6>
      <img
        src={`https://image.tmdb.org/t/p/original${poster}`}
        alt="image"
        className={`w-full rounded-2xl opacity-80 transition-all duration-300 object-cover h-[23rem] ${
          showInfo ? "brightness-[55%] opacity-60" : "opacity-0 bottom-0 z-[0]"
        }`}
        loading="lazy"
      />
    </main>
  );
};

export default TVShowCard;
