import React from "react";
import { NavLink } from "react-router-dom";
import "boxicons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?movie=${e.target[0].value}`);
    console.log(e);
  };
  return (
    <nav className="py-4 container backdrop-filter backdrop-blur-lg bg-transparent bg-opacity-50 shadow-lg">
      <main className="flex justify-between items-center w-full">
        <ul className="flex items-center gap-12">
          <li className="text-lg font-medium text-primary-50 tracking-wider">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="text-lg font-medium text-primary-50 tracking-wider">
            <NavLink to="/tv-shows">TV Shows</NavLink>
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
