import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home.jsx";
import { Movie } from "./components/Movie.jsx";
import { PageNotFound } from "./components/PageNotFound.jsx";

export const App = () => {
  const routes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<PageNotFound />} />
      {<Route path="/movies/:id" element={<Movie />} />}
    </Routes>
  );
  return (
    <BrowserRouter>
      <div>{routes}</div>
    </BrowserRouter>
  );
};

// API key
// 3f5fc34e0d0ca38204d5ccfc5579347c

//fetch the data
//make a link for each movie and connect with slug
