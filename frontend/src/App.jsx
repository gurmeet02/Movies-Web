import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Trending from "./pages/Trending/Trending";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending-movies" element={<Trending />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
