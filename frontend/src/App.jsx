import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Trending from "./pages/Trending/Trending";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending-movies" element={<Trending />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
