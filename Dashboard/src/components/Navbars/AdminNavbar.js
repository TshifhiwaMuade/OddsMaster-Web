import React, { Component } from "react";
import { useLocation } from "react-router-dom";
import { Navbar, Container, Nav, Dropdown, Button } from "react-bootstrap";

import routes from "routes.js";

function Header() {
  const location = useLocation();
  const mobileSidebarToggle = (e) => {
    e.preventDefault();
    document.documentElement.classList.toggle("nav-open");
    var node = document.createElement("div");
    node.id = "bodyClick";
    node.onclick = function () {
      this.parentElement.removeChild(this);
      document.documentElement.classList.toggle("nav-open");
    };
    document.body.appendChild(node);
  };

  const getBrandText = () => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return "Smart Betting AI";
  };

  const styles = {
    navbar: {
      backgroundColor: "#1a1a2e",
      borderBottom: "1px solid #2d2d42",
      padding: "10px 0",
    },
    brand: {
      color: "#ffffff",
      fontWeight: "bold",
      background: "linear-gradient(45deg, #6e45e2, #88d3ce)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    navLink: {
      color: "#ffffff",
      padding: "8px 15px",
      '&:hover': {
        color: "#6e45e2",
      },
    },
    toggleButton: {
      backgroundColor: "#6e45e2",
      border: "none",
      borderRadius: "50%",
      padding: "8px",
    },
    burgerLines: {
      backgroundColor: "#ffffff",
    },
    dropdownMenu: {
      backgroundColor: "#1a1a2e",
      border: "1px solid #2d2d42",
    },
    dropdownItem: {
      color: "#ffffff",
      '&:hover': {
        backgroundColor: "#2d2d42",
        color: "#6e45e2",
      },
    },
  };

  return (
    <Navbar style={styles.navbar} expand="lg">
      <Container fluid>
        <div className="d-flex justify-content-center align-items-center ml-2 ml-lg-0">
          <Button
            style={styles.toggleButton}
            className="d-lg-none btn-fill d-flex justify-content-center align-items-center rounded-circle p-2"
            onClick={mobileSidebarToggle}
          >
            <i className="fas fa-ellipsis-v" style={{color: "#ffffff"}}></i>
          </Button>
          <Navbar.Brand
            href="#home"
            onClick={(e) => e.preventDefault()}
            className="mr-2"
            style={styles.brand}
          >
            {getBrandText()}
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-2">
          <span className="navbar-toggler-bar burger-lines" style={styles.burgerLines}></span>
          <span className="navbar-toggler-bar burger-lines" style={styles.burgerLines}></span>
          <span className="navbar-toggler-bar burger-lines" style={styles.burgerLines}></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav mr-auto" navbar>
            <Nav.Item>
              <Nav.Link
                data-toggle="dropdown"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                className="m-0"
                style={styles.navLink}
              >
                <i className="nc-icon nc-palette" style={{color: "#6e45e2"}}></i>
                <span className="d-lg-none ml-1">Dashboard</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className="ml-auto" navbar>
            <Nav.Item>
              <Nav.Link
                className="m-0"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                style={styles.navLink}
              >
                <span className="no-icon">Account</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className="m-0"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                style={styles.navLink}
              >
                <span className="no-icon">Log out</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;