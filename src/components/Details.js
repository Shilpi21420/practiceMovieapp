import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Details() {
  const [sumry, setSumry] = useState();
  const [id, setId] = useState();
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((d) => setSumry(d));
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
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {sumry && sumry.length > 0 ? (
            sumry.map((item) => {
              const idd = item.show.id;
              if (idd == id) {
                return (
                  <tr>
                    <td>{item.show.name}</td>
                    <td>{item.show.summary}</td>
                    <Link to={`/movies`}>
                      <Button size="sm">Movie</Button>
                    </Link>
                  </tr>
                );
              }
            })
          ) : (
            <h2>No sumry Fount</h2>
          )}
        </tbody>
      </Table>
      <br />
      <Link className="d-grid gap-2" to='/'>
        <Button size='lg'>Back To Home Page</Button>
      </Link>
    </div>
  );
}

export default Details;
