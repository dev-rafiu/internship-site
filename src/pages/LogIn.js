import React, { useRef, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function LogIn() {
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
    <section className="login-section">
      <div className="form-container">
        <h2>LogIn</h2>
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

          <Button disabled={loading} type="submit" className="signin-btn w-100">
            Sign In
          </Button>
        </Form>

        <div className="text-center w-100 mt-2">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </section>
  );
}

export default LogIn;
