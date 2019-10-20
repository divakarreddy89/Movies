import * as React from "react";
import "./style.css";
function Movie(props) {
  return (
    <div className="movie-card">
      <img src={props.image} />
      <label>
        {props.percentage} {props.movie} {props.hero}
      </label>
    </div>
  );
}

function Cinema(props) {
  return (
    <div className="movie-card">
      <img src={props.image} />
      <label>
        {props.percentage} {props.movie} {props.hero}
      </label>
    </div>
  );
}

export default Movie;
