import { useState, useEffect } from "react";
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

      setMovies(data.results);
    } catch (error) {
      console.log("Error fetching movie list", error);
    }
  };

  //call function when component is mounted
  useEffect(() => {
    fecthMovies();
  }, []);

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
