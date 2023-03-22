import {useState, useEffect} from "react";
import Movie from "../components/Movie.js";

function Home() {
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
			  <Movie
				key={movie.id}
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
