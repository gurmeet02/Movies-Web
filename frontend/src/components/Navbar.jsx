import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "boxicons";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setMovieName }) => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const searchInp = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.length <= 0) {
      useNavigate("/movie");
    } else {
      navigate(`/search?movie=${input}`);
      setMovieName(input);
    }
    searchInp.current.blur();
    e.target.reset();
  };
  return (
    <nav className="py-4 container backdrop-filter backdrop-blur-lg bg-transparent bg-opacity-50 shadow-lg">
      <main className="flex justify-between items-center w-full">
        <ul className="flex items-center gap-12">
          <li className="text-lg font-medium text-primary-50 tracking-wider">
            <NavLink to="/" className="home">
              Home
            </NavLink>
          </li>
          <li className="text-lg font-medium text-primary-50 tracking-wider">
            <NavLink to="/tv-shows" className="tv-shows">
              TV Shows
            </NavLink>
          </li>
        </ul>
        <form
          onSubmit={handleSubmit}
          className="flex gap-2 w-[30%] rounded-full backdrop-filter backdrop-blur-lg bg-secondary bg-opacity-75 px-4 py-1"
        >
          <input
            type="text"
            name="movie"
            className="bg-transparent outline-none text-white text-lg w-full"
            placeholder="Search..."
            onChange={(e) => {
              setInput(e.target.value);
            }}
            ref={searchInp}
          />
          <button>
            <i className="bx bx-search text-2xl text-gray hover:text-primary-100 transition-all"></i>
          </button>
        </form>
      </main>
    </nav>
  );
};

export default Navbar;
