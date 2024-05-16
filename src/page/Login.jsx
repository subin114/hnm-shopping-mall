import { useNavigate } from "react-router-dom";
import "./Login.scss";
import { Form, Button, Container } from "react-bootstrap";

const Login = ({ setAuthenticate }) => {
  const loginUser = (event) => {
    event.preventDefault();
    console.log("giogigigi");
    setAuthenticate(true);
    navigate("/");
  };

  const navigate = useNavigate();

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
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              className="login-input"
              type="password"
              placeholder="Password"
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
