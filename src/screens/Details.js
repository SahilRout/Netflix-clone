import React from "react";
import { useLocation } from "react-router";
import Nav from "../components/Nav";
import "./css/Details.css";
function Details() {
  const location = useLocation();
  const movie = location.state;
  return (
    <div>
      <Nav />
      <>
        <header
          className="detailsScreen"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
            backgroundPosition: "center center",
          }}
        >
          <div className="detailsScreen_contents">
            <h1 className="detailsScreen_title">
              {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className="detailsScreen_buttons">
              <button className="detailsScreen_button">Play</button>
              <button className="detailsScreen_button">My List</button>
            </div>
            <h1 className="detailsScreen_desc">{movie.overview}</h1>
          </div>
        </header>
      </>
    </div>
  );
}

export default Details;
