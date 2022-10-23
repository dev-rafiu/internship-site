import React, { createRef, useEffect, useRef, useState } from "react";
import { Form, Button, Card, Container, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";

function SignIn() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { signin } = UserAuth();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await signin(emailRef.current.value, passwordRef.current.value);
      navigate("/internships");
    } catch {
      setError("Failed to sign in");
    }
    setLoading(false);

    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <Container className="section-center  text-center d-flex flex-column align-items-center justify-content-center p-0">
      <p className="py-5">
        Use the email <b>user@login.net</b> and password <b>userlogin</b> or
        create your own email and password{" "}
      </p>
      <Card className="w-100">
        <Card.Body>
          <h2>Sign In</h2>
          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Control
                className="my-3"
                ref={emailRef}
                type="email"
                required
                placeholder="email address"
              />
            </Form.Group>

            <Form.Group id="password">
              <Form.Control
                className="my-3"
                ref={passwordRef}
                type="password"
                required
                placeholder="password"
              />
            </Form.Group>

            <Button
              disabled={loading}
              type="submit"
              className="action-btn w-100"
            >
              Sign In
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <div className="text-center w-100 mt-2">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </div>
    </Container>
  );
}

export default SignIn;
