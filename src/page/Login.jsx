/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import { Form, Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { authenticateAction } from "../redux/actions/authenticateAction";
import { useState } from "react";

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = (event) => {
    event.preventDefault();
    // setAuthenticate(true);
    dispatch(authenticateAction.login(id, password));
    navigate("/");
  };

  return (
    <div>
      <Container>
        <Form onSubmit={(event) => loginUser(event)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              className="login-input"
              type="email"
              placeholder="Enter email"
              onChange={(e) => setId(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              className="login-input"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button className="login-btn" variant="danger" type="submit">
            Login
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
