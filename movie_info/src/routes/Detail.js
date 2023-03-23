import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [movieInfo, setMovieInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const {id} = useParams();

  console.log(id);
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    // console.log(json.data.movie);
	setMovieInfo(json.data.movie);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>{movieInfo.title_long}</h1>
		  <img src={movieInfo.medium_cover_image} alt={movieInfo.title} />
		  <p>{movieInfo.description_full}</p>
        </div>
      )}
    </div>
  );
}

export default Detail;
