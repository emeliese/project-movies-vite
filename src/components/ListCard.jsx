/* eslint-disable react/prop-types */
// import React from "react";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const ListCard = ({ movie }) => {
  // const posterUrl = `https://image.tmdb.org/t/p/w154/${movie.poster_path}`
  return (
    <div>
      <div className="card">
        <NavLink to={`/movies/${movie.id}`} info={movie}>
          <div>{movie.title}</div>
          <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} />
        </NavLink>
      </div>
    </div>
  );
};

// style={{
//     backgroundImage: `url(${posterUrl})`,

//     minWidth: "100%",
//     minHeight: "100vh",
//     position: "fixed",
//     top: "0",
//     left: "0",
//   }}
// {movie.title}
// <img src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
// />
