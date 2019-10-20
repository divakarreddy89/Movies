import React from "react";
import Movie from "./Movie/Movie";
import Movies from "./Movies/Movies";
function App() {
  return (
    <div className="App">
      <h1>Helloworld</h1>
      <Movies />
      <Movie
        percentage="98%"
        movie="Avengers"
        hero="RDJ"
        image="https://litreactor.com/sites/default/files/imagecache/header/images/column/headers/avengers-endgame-disney.jpg"
      />
    </div>
  );
}

export default App;
