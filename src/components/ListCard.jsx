import { NavLink } from "react-router-dom";

export const ListCard = ({ movie }) => {
  return (
    <div>
      <div className="card">
        <div>
          <NavLink to={`/movies/${movie.id}`} info={movie}>
            <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} />
          </NavLink>
          <div className="card-title">{movie.title}</div>
        </div>
      </div>
    </div>
  );
};
