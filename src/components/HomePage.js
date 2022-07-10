import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Container } from "react-bootstrap";
import UserCard from "./UserCard";

function HomePage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        //console.log(res);
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
          <UserCard key={user.id} user={user}></UserCard>
        ))}
      </Row>
    </Container>
  );
}

export default HomePage;
