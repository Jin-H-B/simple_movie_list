import {useState, useEffect} from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const score = 8;
  const getMovies = async () => {
    const res = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=${score}&sort_by=year`
    );
    const json = await res.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);

  return (
    <div>
      {loading ? (
        <h1>Loading now...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <hr />
              <img src={movie.medium_cover_image} alt={movie.title} />
              <h2>{movie.title}</h2>
              <h3>{`Release Year : ${movie.year}`}</h3>
              <h4>SUMMARY</h4>
              <p>{movie.summary? (movie.summary.length < 500? movie.summary : movie.summary.slice(0, 500) + "...") : "No summary.."}</p>
              <ul>
                {movie.genres.map(genre => (
                  <li key={movie.id + genre}>{genre}</li>
                ))}
              </ul>
              </div>

          ))}
        </div>
      )}
    </div>
  );
}

export default App;
