import React, { useState } from "react";
import { Card, Form, Button, Container, Row, Col, Alert } from "react-bootstrap";

function UserProfile() {
  // Custom styles to match the dashboard
  const styles = {
    dashboardContainer: {
      backgroundColor: "#0f0f1a",
      minHeight: "100vh",
      color: "#ffffff",
      padding: "2rem",
    },
    card: {
      backgroundColor: "#1a1a2e",
      border: "none",
      borderRadius: "15px",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
      maxWidth: "500px",
      margin: "0 auto",
    },
    header: {
      color: "#6e45e2",
      textAlign: "center",
      marginBottom: "2rem",
      fontWeight: "bold",
    },
    subheader: {
      color: "#88d3ce",
      textAlign: "center",
      marginBottom: "2rem",
    },
    formLabel: {
      color: "#88d3ce",
      marginBottom: "0.5rem",
      fontWeight: "500",
    },
    formControl: {
      backgroundColor: "#2d2d42",
      border: "1px solid #2d2d42",
      color: "#ffffff",
      borderRadius: "8px",
      padding: "12px 15px",
      marginBottom: "1.5rem",
      '&:focus': {
        backgroundColor: "#2d2d42",
        borderColor: "#6e45e2",
        boxShadow: "0 0 0 0.2rem rgba(110, 69, 226, 0.25)",
        color: "#ffffff",
      }
    },
    primaryButton: {
      background: "linear-gradient(45deg, #6e45e2, #88d3ce)",
      border: "none",
      fontWeight: "bold",
      borderRadius: "8px",
      padding: "12px",
      width: "100%",
      marginBottom: "1rem",
    },
    secondaryButton: {
      backgroundColor: "transparent",
      border: "1px solid #6e45e2",
      color: "#6e45e2",
      borderRadius: "8px",
      padding: "12px",
      width: "100%",
      marginBottom: "1rem",
    },
    divider: {
      display: "flex",
      alignItems: "center",
      margin: "1.5rem 0",
      color: "#88d3ce",
      '&::before, &::after': {
        content: '""',
        flex: 1,
        borderBottom: "1px solid #2d2d42",
      },
      '&::before': {
        marginRight: "1rem",
      },
      '&::after': {
        marginLeft: "1rem",
      }
    },
    socialButton: {
      backgroundColor: "transparent",
      border: "1px solid #2d2d42",
      color: "#ffffff",
      borderRadius: "8px",
      padding: "12px",
      width: "100%",
      marginBottom: "1rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      '& i': {
        marginRight: "10px",
      }
    },
    linkText: {
      color: "#6e45e2",
      textAlign: "center",
      marginTop: "1rem",
      cursor: "pointer",
    },
    checkboxLabel: {
      color: "#88d3ce",
      marginLeft: "0.5rem",
    }
  };

  // Sample user data
  const [user, setUser] = useState({
    fullName: "John Doe",
    email: "user@example.com",
    password: "",
    receiveUpdates: true
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUser({
      ...user,
      [name]: type === 'checkbox' ? checked : value
    });
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    
    if (!user.fullName) newErrors.fullName = "Full name is required";
    if (!user.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(user.email)) newErrors.email = "Email is invalid";
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      console.log("Profile updated:", user);
      setSuccessMessage("Profile updated successfully!");
      setTimeout(() => setSuccessMessage(""), 3000);
    }
  };

  return (
    <Container fluid style={styles.dashboardContainer}>
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card style={styles.card}>
            <Card.Body style={{ padding: "2.5rem" }}>
              <h2 style={styles.header}>USER PROFILE</h2>
              <p style={styles.subheader}>Update your account details</p>
              
              {successMessage && (
                <Alert 
                  variant="success" 
                  onClose={() => setSuccessMessage("")} 
                  dismissible
                  style={{ 
                    backgroundColor: "rgba(110, 69, 226, 0.2)", 
                    borderColor: "#6e45e2", 
                    color: "#ffffff",
                    marginBottom: "1.5rem"
                  }}
                >
                  {successMessage}
                </Alert>
              )}
              
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label style={styles.formLabel}>Full name</Form.Label>
                  <Form.Control
                    type="text"
                    name="fullName"
                    value={user.fullName}
                    onChange={handleChange}
                    isInvalid={!!errors.fullName}
                    style={styles.formControl}
                    placeholder="Enter your full name"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.fullName}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                  <Form.Label style={styles.formLabel}>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                    style={styles.formControl}
                    placeholder="your@email.com"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                  <Form.Label style={styles.formLabel}>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    style={styles.formControl}
                    placeholder="Enter new password"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Check
                    type="checkbox"
                    name="receiveUpdates"
                    checked={user.receiveUpdates}
                    onChange={handleChange}
                    label="I want to receive updates via email"
                    style={styles.checkboxLabel}
                  />
                </Form.Group>

                <Button style={styles.primaryButton} type="submit">
                  UPDATE PROFILE
                </Button>

                
               

                <p style={styles.linkText}>
                  Need to change more settings? <span style={{ color: "#88d3ce" }}>Advanced options</span>
                </p>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default UserProfile;