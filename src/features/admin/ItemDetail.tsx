import React, { useEffect, useState, FC } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

type MovieProps = PropTypes.InferProps<typeof propTypes>;

const ItemDetail: FC<MovieProps> = (props: MovieProps) => {
  const [movie, setMovie] = useState<any>();

  const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";
  const BACKDROP_SIZE = "w1280";
  const POSTER_SIZE = "w500";

  useEffect(() => {
    console.log(props.match.params.id);
    async function fetchMovie() {
      const API_URL = "https://api.themoviedb.org/3/";
      const API_KEY = "405186b5458e6a03edaf4627d2589da0";
      const api = `${API_URL}movie/${props.match.params.id}?api_key=${API_KEY}&language=en-US`;
      await axios.get(api).then((response) => setMovie(response.data));
    }

    fetchMovie();
  }, []);

  return (
    <div style={{ marginTop: "57px" }}>
      {movie ? (
        <div
          className="movie-cover"
          style={{
            background: movie.backdrop_path
              ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path})`
              : "#000",
          }}
        >
          <div className="movie-content">
            <div className="movie-poster">
              <img
                src={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`}
              ></img>
            </div>
            <div className="movie-content-text">
              <h1>{movie.original_title}</h1>
              <h2>PLOT</h2>
              <p>{movie.overview}</p>
              <h2>HOMEPAGE</h2>
              <p>{movie.homepage === "" ? "Not available" : movie.homepage}</p>
              <h2>STATUS</h2>
              <p>{movie.status}</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

ItemDetail.propTypes = propTypes;

export default ItemDetail;
