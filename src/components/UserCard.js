import React from "react";
import { Link } from "react-router-dom";
import { Col, Card, Button } from "react-bootstrap";

function UserCard(props) {
  const { id, name, username, email } = props.user;

  return (
    <Col>
      <Card
        className="mt-5 m-3 p-3 mx-auto shadow p-3 mb-5 bg-white rounded text-center"
        style={{ width: "18rem" }}
        key={id}
      >
        <Card.Body>
          <span className="avatar avatar-96 bg-secondary text-white rounded-circle">
            {name.charAt(0)}
          </span>
          <Card.Title className="mt-2">{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">@{username}</Card.Subtitle>
          <Card.Link className="mb-2" href="#">
            {email}
          </Card.Link>
          <Link to={`/users/${id}`}>
            <Button className="mt-3" variant="primary">
              MORE DETAILS
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default UserCard;
