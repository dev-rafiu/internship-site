import React, { useRef, useState } from "react";
import { Form, Button, Card, Container, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";

function SignUp() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { signup } = UserAuth();

  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/internships");
    } catch {
      setError("Failed to sign up");
    }
    setLoading(false);

    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <Container className="text-center section-center d-flex flex-column align-items-center justify-content-center p-0">
      <Card className="w-100 mw=50">
        <Card.Body>
          <h2>Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Control
                className="my-3"
                ref={emailRef}
                type="email"
                placeholder="email address"
              />
            </Form.Group>

            <Form.Group id="password">
              <Form.Control
                className="my-3"
                ref={passwordRef}
                type="password"
                placeholder="password"
              />
            </Form.Group>

            <Form.Group id="confirm-password">
              <Form.Control
                className="my-3"
                ref={confirmPasswordRef}
                type="password"
                placeholder="confirm password"
              />
            </Form.Group>

            <Button
              disabled={loading}
              type="submit"
              className="action-btn w-100"
            >
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <div className="text-center w-100 mt-2">
        Already have an account? <Link to="/">sign in</Link>
      </div>
    </Container>
  );
}

export default SignUp;
