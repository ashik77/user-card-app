import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

function NoMatch() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <div className="text-center">
      <h5 className="mt-5">No Match Found</h5>
      <Button className="mt-2" variant="danger" onClick={handleClick}>
        Go Home
      </Button>
    </div>
  );
}

export default NoMatch;
