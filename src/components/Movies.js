import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Movies() {
  const [movies, setMovies] = useState();
  const [id, setId] = useState();
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((d) => setMovies(d));
  }, []);
  useEffect(() => {
    setId(localStorage.getItem("Id"));
  }, []);
  return (
    <div style={{ margin: "10rem" }}>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {movies && movies.length > 0 ? (
            movies.map((item) => {
              const idd = item.show.id;
              if (idd == id) {
                return (
                  <tr>
                    <td>{item.show.name}</td>
                    <td>{item.show.genres}</td>
                    <td>
                      
                      <br />
                      <Link className="d-grid gap-2" to="/booking">
                        <Button size="lg">Booking</Button>
                      </Link>
                    </td>
                  </tr>
                );
              }
            })
          ) : (
            <h2>No movies Fount</h2>
          )}
        </tbody>
      </Table>

      <br />
      <Link className="d-grid gap-2" to="/">
        <Button size="lg">Back To Home Page</Button>
      </Link>
    </div>
  );
}

export default Movies;
