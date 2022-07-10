import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Row, Card, Button } from "react-bootstrap";

function UserCard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Row>
      {users.map((user) => (
        <Card
          className="m-3 p-3 mx-auto shadow p-3 mb-5 bg-white rounded"
          style={{ width: "18rem" }}
          key={user.id}
        >
          <Card.Body>
            <span class="avatar avatar-96 bg-secondary text-white rounded-circle">
              {user.name.charAt(0)}
            </span>

            <Card.Title>{user.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              @{user.username}
            </Card.Subtitle>
            <Card.Link href="#">{user.email}</Card.Link>

            <Link
              className="text-decoration-none"
              style={{ color: "#f06c4e" }}
              to={`/${user.id}`}
            >
              View Detail
            </Link>
          </Card.Body>
        </Card>
      ))}
    </Row>
  );
}

export default UserCard;
