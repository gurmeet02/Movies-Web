import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Trending from "./pages/Trending/Trending";
import Upcoming from "./pages/Upcoming/Upcoming";
import TopRated from "./pages/TopRated/TopRated";
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
          <Route path="/top-rated" element={<TopRated />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
