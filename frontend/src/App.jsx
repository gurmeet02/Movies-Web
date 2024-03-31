import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import TVShows from "./pages/TVShows/TVShows";
import Navbar from "./components/Navbar";
import Search from "./pages/Search/Search";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tv-shows" element={<TVShows />} />
          <Route path={`/search`} element={<Search />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
