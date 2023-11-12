import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

export const Movie = () => {
  const params = useParams();
  console.log("params: ", params);

  const [info, setInfo] = useState({});

  const fetchMovieInfo = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=3f5fc34e0d0ca38204d5ccfc5579347c&language=en-US`
      );
      const data = await response.json();
      console.log("info data", data);
      setInfo(data);
    } catch (error) {
      console.log("info error", error);
    }
  };

  useEffect(() => {
    fetchMovieInfo();
  }, []);

  const backdropUrl = `https://image.tmdb.org/t/p/w1280/${info.backdrop_path}`;

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${backdropUrl})`,
          backgroundSize: "cover",
          minWidth: "100%",
          minHeight: "100vh",
          position: "fixed",
          top: "0",
          left: "0",
        }}
      >
        <div className="back-to-list">
          <NavLink to="/">Back to movie list</NavLink>
        </div>
        <span>
          <h1 className="title">{info.title}</h1>
        </span>
        <div className="details-container movies-page">
          <div className="poster">
            {info && (
              <img
                src={`https://image.tmdb.org/t/p/w154/${info.poster_path}`}
              />
            )}
          </div>
          <div>{Math.round(info.vote_average * 10) / 10}</div>
          <div className="overview">The plot: {info.overview}</div>
        </div>
      </div>
    </div>
  );
};
// make vote_average only on decimal
// https://api.themoviedb.org/3/movie/{movie_id}?api_key={api_key}&language=en-US

// https://api.themoviedb.org/3/configuration?api_key=3f5fc34e0d0ca38204d5ccfc5579347c
// https://api.themoviedb.org/3/w92?api_key=3f5fc34e0d0ca38204d5ccfc5579347c
// https://image.tmdb.org/t/p/w92${poster_path}
// https://image.tmdb.org/t/p/w92${poster_path}
