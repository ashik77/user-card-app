import React, { useState, useEffect, Suspense } from "react";
import { Row, Card, Button } from "react-bootstrap";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

function Details() {
  const [detail, setDetail] = useState({});
  const [address, setAddress] = useState({});
  const [company, setCompany] = useState({});

  let { id } = useParams();
  console.log(id);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setDetail(data);
        setCompany(data.company);
        setAddress(data.address);
      });
  }, []);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
  };

  return (
    <Row>
      <Card
        className="m-3 p-3 mx-auto shadow p-3 mb-5 bg-white rounded font-weight-bold"
        style={{ width: "22rem" }}
      >
        <Card.Body>
          <p>-name: {detail.name}</p>
          <p>-username: {detail.username}</p>
          <p>-email: {detail.email}</p>
          <p>-phone: {detail.phone}</p>
          <p>-company: {company.name}</p>
          <p>-website: {detail.website}</p>
          <p>-address:</p>
          <ul>
            <li>street: {address.street}</li>
            <li>suite: {address.suite}</li>
            <li>city: {address.city}</li>
            <li>zipcode: {address.zipcode}</li>
          </ul>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={handleClick}
          >
            Back
          </button>
        </Card.Body>
      </Card>
    </Row>
  );
}

export default Details;
