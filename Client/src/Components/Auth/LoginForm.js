import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import './login.css';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log(formData);
  };

  return (
    <Container>
      <div className="row justify-content-center">
        <div className="col-md-6 login-form-container">
          <div className="form-container">
            <h2>Login</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formShowPassword">
                <Form.Check
                  type="checkbox"
                  label="Show Password"
                  onChange={handleShowPassword}
                />
              </Form.Group>

              <Form.Group controlId="formRememberMe">
                <Form.Check
                  type="checkbox"
                  label="Remember me"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
            <div className="forgot-password">
              <a href="/forgot-password">Forgot Password?</a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LoginForm;
