import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import TVShows from "./pages/TVShows/TVShows";
import Search from "./pages/Search/Search";
import Movie from "./pages/Movie/Movie";
import TVShow from "./pages/TVShow/TVShow";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import { useState } from "react";

function App() {
  const [movieName, setMovieName] = useState("");
  const [searchTV, setSearchTV] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Navbar
          setMovieName={setMovieName}
          setSearchTV={setSearchTV}
          searchTV={searchTV}
          movieName={movieName}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tv-shows" element={<TVShows />} />
          <Route
            path={`/search`}
            element={
              <Search
                movieName={movieName}
                searchTV={searchTV}
                setMovieName={setMovieName}
              />
            }
          />
          <Route path={`/sign-up`} element={<SignUp />} />
          <Route path={`/login`} element={<Login />} />
          <Route path={`/movie/:movieId`} element={<Movie />} />
          <Route path={`/tv/:showId`} element={<TVShow />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
