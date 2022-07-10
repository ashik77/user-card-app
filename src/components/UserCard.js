import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Row, Card, Button, Container } from "react-bootstrap";

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
    <Container>
      <Row>
        {users.map((user) => (
          <Card
            className="m-3 p-3 mx-auto shadow p-3 mb-5 bg-white rounded text-center"
            style={{ width: "18rem" }}
            key={user.id}
          >
            <Card.Body>
              <span className="avatar avatar-96 bg-secondary text-white rounded-circle">
                {user.name.charAt(0)}
              </span>
              <Card.Title className="mt-2">{user.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                @{user.username}
              </Card.Subtitle>
              <Card.Link className="mb-2" href="#">
                {user.email}
              </Card.Link>
              <Link to={`/${user.id}`}>
                <Button className="mt-3" variant="primary">
                  MORE DETAILS
                </Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
}

export default UserCard;
