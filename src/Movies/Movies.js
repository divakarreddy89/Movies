import React from "react";
import Movie from "../Movie/Movie.jsx";
import "./styles.css";

class Movies extends React.Component {
  getMovie = (percentage, movie, hero, image) => {
    return (
      <Movie percentage={percentage} movie={movie} hero={hero} image={image} />
    );
  };
  render() {
    return (
      <div className="movie-section">
        {this.getMovie(
          "98%",
          "Bigil",
          "Vijay",
          "https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/bigil-et00105457-22-06-2019-09-25-30.jpg"
        )}
        {this.getMovie(
          "88%",
          "WAR",
          "Hrithik",
          "https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/war-et00107162-15-07-2019-11-09-39.jpg"
        )}
        {this.getMovie(
          "85%",
          "SYERAA",
          "Chiranjeevi",
          "https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/uyyalawada-narasimha-reddy-et00055035-18-08-2017-11-57-31.jpg"
        )}
        {this.getMovie(
          "81%",
          "MALIFICENT",
          "Anjileno",
          "https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/maleficent-mistress-of-evil-et00114486-13-10-2019-12-19-51.jpg"
        )}
      </div>
    );
  }
}

export default Movies;
