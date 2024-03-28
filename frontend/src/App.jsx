import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Trending from "./pages/Trending/Trending";
import Upcoming from "./pages/Upcoming/Upcoming";
import TVShows from "./pages/TVShows/TVShows";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/tv-shows" element={<TVShows />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
