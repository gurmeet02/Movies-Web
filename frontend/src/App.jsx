import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import TVShows from "./pages/TVShows/TVShows";
import Search from "./pages/Search/Search";
import Movie from "./pages/Movie/Movie";
import TVShow from "./pages/TVShow/TVShow";
import { useState } from "react";

function App() {
  const [movieName, setMovieName] = useState("");
  return (
    <>
      <BrowserRouter>
        <Navbar setMovieName={setMovieName} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tv-shows" element={<TVShows />} />
          <Route path={`/search`} element={<Search movieName={movieName} />} />
          <Route path={`/movie/:movieId`} element={<Movie />} />
          <Route path={`/tv/:showId`} element={<TVShow />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
