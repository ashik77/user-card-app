import React, { useState, useEffect } from "react";
import { Row, Card, Button } from "react-bootstrap";

import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { axios } from "axios";

function Details() {
  const [detail, setDetail] = useState({});
  let { id } = useParams();
  console.log(id);
  const navigate = useNavigate();

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, []);

  return (
    <Row>
      <Card
        className="m-3 p-3 mx-auto shadow p-3 mb-5 bg-white rounded"
        style={{ width: "18rem" }}
        key={detail.id}
      >
        <Card.Body>
          <Card.Title>{detail.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            @{detail.username}
          </Card.Subtitle>
          <Card.Link href="#">{detail.email}</Card.Link>

          <Button variant="primary">Go Back</Button>
        </Card.Body>
      </Card>
    </Row>
  );
}

export default Details;
