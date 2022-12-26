import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Card, Alert, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Account() {
  const [error, setError] = useState("");
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      setError("");
      await logout();
      navigate("/");
      setError("Logged out");
    } catch {
      setError("Logout failed");
    }
  };

  return (
    <>
      <Container className="text-center d-flex section-center flex-column align-items-center justify-content-center p-0">
        <Card className="text-center w-100">
          <Card.Body>
            {error && <Alert variant="danger">{error}</Alert>}
            <h2 className="fs-2 mb-2">Account Info</h2>
            <p className="">Email: {user && user.email}</p>
            <Button
              onClick={handleLogOut}
              className="px-3 py-1 my-2 cta-logout"
              type="button"
            >
              Log Out
            </Button>
          </Card.Body>
        </Card>

        <div className="text-center mt-3">
          <Link className="back-link action-btn px-5 py-1" to="/internships">
            Back To Home
          </Link>
        </div>
      </Container>
    </>
  );
}

export default Account;
