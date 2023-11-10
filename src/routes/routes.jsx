import { Route, Routes } from "react-router-dom";
import Home from "../components/Home.jsx";
import { PageNotFound } from "../components/PageNotFound.jsx";

export const routes = () => {
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/*" element={<PageNotFound />} />
    <Route path="/movies/:id" element={<Movie />} />
  </Routes>;
};
