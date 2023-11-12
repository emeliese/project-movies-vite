import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home.jsx";
import { Movie } from "./components/Movie.jsx";
import { PageNotFound } from "./components/PageNotFound.jsx";

export const App = () => {
  const routes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<PageNotFound />} />
      <Route path="/movies/:id" element={<Movie />} />
    </Routes>
  );
  return (
    <BrowserRouter>
      <div>{routes}</div>
    </BrowserRouter>
  );
};
