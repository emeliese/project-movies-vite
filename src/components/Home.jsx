import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export const Home = () => {
  const [movies, setMovies] = useState([]);

  const fecthMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=3f5fc34e0d0ca38204d5ccfc5579347c&language=en-US&page=1"
      );
      const data = await response.json();
      console.log("data", data);
      setMovies(data.results);
      console.log("movies state: ", movies);
      if (response.ok) {
        console.log("ok");
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    fecthMovies();
  }, []);
  return (
    <div>
      <p>{movies.length}</p>
      <div>
        {movies.map((mov) => (
          <ul key={mov.id}>
            <li>{mov.title}</li>
          </ul>
        ))}
      </div>
      Home
      <NavLink to="/*">page not found</NavLink>
      <NavLink to="/movies/:id">MOVIE</NavLink>
    </div>
  );
};

// {data.results.map((mov) => (
//   <p key={mov.name}>{mov.name}</p>
// ))}
