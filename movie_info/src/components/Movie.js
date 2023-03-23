import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({id, cover, title, summary, genres, year}) {
	return (
    <div>
      <hr />
      <img src={cover} alt={title} />
      <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
      <h3>{`Release Year : ${year}`}</h3>
      <h4>SUMMARY</h4>
      <p>
        {summary
          ? summary.length < 500
            ? summary
            : summary.slice(0, 500) + "..."
          : "No summary.."}
      </p>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
	cover: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
