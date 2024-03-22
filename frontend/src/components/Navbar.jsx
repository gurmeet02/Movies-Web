import React from "react";
import { NavLink } from "react-router-dom";
import "boxicons";

const Navbar = () => {
  return (
    <nav className="py-4 container backdrop-filter backdrop-blur-lg bg-transparent bg-opacity-50 shadow-lg">
      <main className="flex justify-between items-center w-full">
        <ul className="flex items-center gap-12">
          <li className="text-lg font-medium text-primary-50 tracking-wider">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="text-lg font-medium text-primary-50 tracking-wider">
            <NavLink to="/trending">Trending</NavLink>
          </li>
          <li className="text-lg font-medium text-primary-50 tracking-wider">
            <NavLink to="/upcoming">Upcoming</NavLink>
          </li>
          <li className="text-lg font-medium text-primary-50 tracking-wider">
            <NavLink to="/top-rated">Top Rated</NavLink>
          </li>
        </ul>
        <div className="flex gap-2 w-1/4 rounded-full backdrop-filter backdrop-blur-lg bg-secondary bg-opacity-75 px-4 py-1.5">
          <input
            type="text"
            className="bg-transparent outline-none text-white text-lg w-full"
            placeholder="Search..."
          />
          <button>
            <i className="bx bx-search text-2xl text-gray hover:text-primary-100 transition-all"></i>
          </button>
        </div>
      </main>
    </nav>
  );
};

export default Navbar;
