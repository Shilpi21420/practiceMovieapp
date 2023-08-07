import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((d) => setData(d));
  },[]);
  const handleData = (id) => {
    localStorage.setItem("Id", id);
  };
  return (
    <div style={{ margin: "10rem" }}>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            data.map((item) => {
              return (
                <tr>
                  <td>{item.show.id}</td>
                  <td>{item.show.name}</td>
                  <td>{item.show.type}</td>
                  <Link to={`/details`}>
                    <Button size="sm" onClick={() => handleData(item.show.id)}>
                      Summary
                    </Button>
                  </Link>
                </tr>
              );
            })
          ) : (
            <h2>No Data Fount</h2>
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default Home;
