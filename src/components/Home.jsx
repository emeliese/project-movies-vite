import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ListCard } from "./ListCard";

export const Home = () => {
  const [movies, setMovies] = useState([]);

  //fetch movies from API and parse to JSON
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

  //call function when component is mounted
  useEffect(() => {
    fecthMovies();
  }, []);

  // const backdropUrl = `https://image.tmdb.org/t/p/w1280/${info.backdrop_path}`;
  // const posterUrl = `https://image.tmdb.org/t/p/w154/${mov.poster_path}`

  //render card component for every movie
  return (
    <div>
      <div className="list-container">
        {movies.map((mov) => (
          <div key={mov.id}>
            <ListCard movie={mov} />
          </div>
        ))}
      </div>
    </div>
  );
};

// {data.results.map((mov) => (
//   <p key={mov.name}>{mov.name}</p>
// ))}
