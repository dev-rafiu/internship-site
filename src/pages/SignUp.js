import React, { useRef, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

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
    <section className="signup-section">
      <div className="form-container">
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

          <Button disabled={loading} type="submit" className="signup-btn w-100">
            Sign Up
          </Button>
        </Form>

        <div className="text-center w-100 mt-2">
          Already have an account? <Link to="/">sign in</Link>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
