import { Button } from "@material-ui/core";
import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { authActions } from "../auth/authSlice";
import "./Table.css";

const Table: FC = () => {
  const dispatch = useAppDispatch();
  const [movies, setMovies] = useState<any>([]);

  const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";
  const POSTER_SIZE = "w200";
  const handelLogoutClick = () => {
    dispatch(authActions.logout());
  };

  useEffect(() => {
    async function fetchMovies() {
      const API_URL = "https://api.themoviedb.org/3/";
      const API_KEY = "405186b5458e6a03edaf4627d2589da0";
      const api = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
      axios.get(api).then((response) => setMovies(response.data.results));
    }

    fetchMovies();
  }, []);
  return (
    <div>
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
                <img
                  src={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`}
                  alt=""
                ></img>
              </td>
              <td>{movie.title}</td>
              <td>{movie.overview}</td>
            </tr>
          </tbody>
        ))}
      </table>
      <div>
        <Button
          onClick={handelLogoutClick}
          style={{
            width: "240px",
            border: "1px solid",
            margin: "300px 550px 300px 550px",
          }}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Table;
