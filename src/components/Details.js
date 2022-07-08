import React, { useState, useEffect } from "react";
import { Row, Card, Button } from "react-bootstrap";

import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { axios } from "axios";

function Details() {
  const [detail, setDetail] = useState([]);
  let { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        console.log(res);
        setDetail(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Row>
      {detail.map((detail) => (
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

            <Button variant="primary">MORE DETAILS</Button>
          </Card.Body>
        </Card>
      ))}
    </Row>
  );
}

export default Details;
