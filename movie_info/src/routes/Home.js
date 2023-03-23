import { useState, useEffect } from "react";
import Movie from "../components/Movie.js";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [score, setScore] = useState(8); // Add a state variable for the score

  const getMovies = async (selectedScore) => {
    const res = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=${selectedScore}&sort_by=year`
    );
    const json = await res.json();
    console.log(json.data.movies);
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies(score);
  }, [score]);

  const handleScoreChange = (event) => {
    setScore(event.target.value);
  };

  return (
    <div>
      <div>
        <label htmlFor="score">Choose minimum rating: </label>
        <input
          type="number"
          id="score"
          name="score"
          value={score}
          onChange={handleScoreChange}
          min="0"
          max="10"
          step="0.1"
        />
      </div>
      {loading ? (
        <h1>Loading now...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              cover={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
