import React from "react";
import Movie from "../Movie/Movie.jsx";
import "./styles.css";

const array = [
  {
    percentage: "98%",
    movie: "Bigil",
    hero: "Vijay",
    image:
      "https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/bigil-et00105457-22-06-2019-09-25-30.jpg"
  },
  {
    percentage: "85%%",
    movie: "WAR",
    hero: "Hrithik",
    image:
      "https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/war-et00107162-15-07-2019-11-09-39.jpg"
  },
  {
    percentage: "98%",
    movie: "Bigil",
    hero: "Vijay",
    image:
      "https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/bigil-et00105457-22-06-2019-09-25-30.jpg"
  },
  {
    percentage: "85%%",
    movie: "WAR",
    hero: "Hrithik",
    image:
      "https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/war-et00107162-15-07-2019-11-09-39.jpg"
  }
];

class Movies extends React.Component {
  getMovie = (percentage, movie, hero, image) => {
    return (
      <Movie percentage={percentage} movie={movie} hero={hero} image={image} />
    );
  };

  render() {
    return (
      <div className="movie-section">
        {array.map(movieItem =>
          this.getMovie(
            movieItem.percentage,
            movieItem.movie,
            movieItem.hero,
            movieItem.image
          )
        )}
        {/* {this.getMovie(
         
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
          "80%",
          "MALIFICENT",
          "Anjileno",
          "https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/maleficent-mistress-of-evil-et00114486-13-10-2019-12-19-51.jpg"
        )} */}
      </div>
    );
  }
}

export default Movies;
