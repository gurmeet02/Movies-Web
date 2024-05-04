import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "boxicons";
import UserModal from "./UserModal";

const Navbar = ({ setMovieName, setSearchTV, searchTV, movieName }) => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false);

  const navigate = useNavigate();
  const searchInp = document.getElementById("search_inp");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (movieName.length <= 0) {
      navigate("/");
    } else {
      if (searchTV === false) {
        navigate(`/search?movie=${movieName}`);
      } else {
        navigate(`/search?tv=${movieName}`);
      }
    }
    searchInp.current.blur();
    e.target.reset();
    setShowSearchBar(false);
  };

  return (
    <nav className="py-4 container backdrop-filter backdrop-blur-lg bg-transparent bg-opacity-50 shadow-lg">
      <main className="flex justify-between items-center w-full">
        <ul className="flex items-center gap-12 max-md:gap-8 max-sm:gap-6">
          <li className="text-lg font-medium text-primary-50 tracking-wider">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="text-lg font-medium text-primary-50 tracking-wider">
            <NavLink to="/tv-shows">TV Shows</NavLink>
          </li>
        </ul>
        <div className="w-1/3 max-xl:w-[35%] flex items-center gap-2 max-lg:w-[44%] max-md:w-[55%] max-sm:w-1/2 max-sm:justify-end max-sm:gap-4">
          <form
            onSubmit={handleSubmit}
            className="flex gap-2 rounded-full backdrop-filter backdrop-blur-lg bg-secondary bg-opacity-75 px-4 py-1 w-full  max-sm:hidden"
          >
            <input
              type="text"
              name="movie"
              className="bg-transparent outline-none text-white text-lg w-full"
              placeholder="Search..."
              onChange={(e) => {
                setMovieName(e.target.value);
              }}
              ref={searchInp}
            />
            <div className="flex gap-2">
              <button type="submit">
                <i className="bx bx-search text-2xl text-gray hover:text-primary-100 transition-all"></i>
              </button>
              <button
                type="button"
                onClick={() => {
                  setSearchTV(!searchTV);
                }}
              >
                {searchTV ? (
                  <i className="bx bx-camera-movie text-2xl text-gray hover:text-primary-100 transition-all"></i>
                ) : (
                  <i className="bx bx-tv text-2xl text-gray hover:text-primary-100 transition-all"></i>
                )}
              </button>
            </div>
          </form>
          <div>
            <i
              className="bx bx-user-circle text-3xl text-gray hover:text-primary-100 transition-all cursor-pointer"
              onMouseEnter={() => {
                setShowUserModal(true);
              }}
              onMouseLeave={() => {
                setShowUserModal(false);
              }}
            ></i>
          </div>
          <div
            className={`${
              showUserModal ? "" : "hidden"
            } absolute top-12 pt-8 w-1/5 right-12`}
            onMouseEnter={() => {
              setShowUserModal(true);
            }}
            onMouseLeave={() => {
              setShowUserModal(false);
            }}
          >
            <UserModal />
          </div>
          <button
            onClick={() => {
              setShowSearchBar(!showSearchBar);
            }}
            className="sm:hidden"
          >
            {showSearchBar ? (
              <i className="bx bx-x text-4xl text-gray cursor-pointer"></i>
            ) : (
              <i className="bx bx-search text-3xl text-gray cursor-pointer"></i>
            )}
          </button>
        </div>
      </main>
      <form
        onSubmit={handleSubmit}
        className={`flex sm:hidden gap-2 rounded-full backdrop-filter backdrop-blur-lg bg-secondary bg-opacity-75 px-4 py-1 w-full ${
          showSearchBar ? "mt-5 " : "hidden h-0"
        }`}
      >
        <input
          type="text"
          name="movie"
          className="bg-transparent outline-none text-white text-lg w-full"
          placeholder="Search..."
          onChange={(e) => {
            setMovieName(e.target.value);
          }}
          id="search_inp"
        />
        <div className="flex gap-2">
          <button type="submit">
            <i className="bx bx-search text-2xl text-gray hover:text-primary-100 transition-all"></i>
          </button>
          <button
            type="button"
            onClick={() => {
              setSearchTV(!searchTV);
              setMovieName("");
            }}
          >
            {searchTV ? (
              <i className="bx bx-camera-movie text-2xl text-gray hover:text-primary-100 transition-all"></i>
            ) : (
              <i className="bx bx-tv text-2xl text-gray hover:text-primary-100 transition-all"></i>
            )}
          </button>
        </div>
      </form>
    </nav>
  );
};

export default Navbar;
