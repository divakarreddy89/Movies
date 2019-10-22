import * as React from "react";
import "./style.css";

class Movie extends React.Component {
  render() {
    return (
      <div className="movie-card">
        <img src={this.props.image} />
        <label>
          {this.props.percentage} {this.props.movie} {this.props.hero}
        </label>
      </div>
    );
  }
}

export default Movie;
