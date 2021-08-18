import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Table.css";

const Table: FC = () => {
  const [movies, setMovies] = useState<any>([]);

  const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";
  const POSTER_SIZE = "w200";

  useEffect(() => {
    function fetchMovies() {
      const API_URL = "https://api.themoviedb.org/3/";
      const API_KEY = "405186b5458e6a03edaf4627d2589da0";
      const api = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
      axios.get(api).then((response) => setMovies(response.data.results));
    }

    fetchMovies();
  }, []);
  return (
    <div style={{ marginTop: "80px" }}>
      <table cellSpacing="0">
        <thead>
          <tr>
            <th>Poster</th>
            <th>Name</th>
            <th>Overview</th>
          </tr>
        </thead>
        {movies.map((movie: any) => (
          <tbody key={movie.id}>
            <tr key={movie.id}>
              <td>
                <Link to={{ pathname: `/${movie.id}` }}>
                  <img
                    src={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`}
                    alt=""
                  ></img>
                </Link>
              </td>
              <td>{movie.title}</td>
              <td>{movie.overview}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Table;
