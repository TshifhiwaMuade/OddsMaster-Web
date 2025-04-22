import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Footer extends Component {
  render() {
    const styles = {
      footer: {
        backgroundColor: "#1a1a2e",
        borderTop: "1px solid #2d2d42",
        padding: "20px 0",
        color: "#ffffff",
      },
      footerMenu: {
        listStyle: "none",
        padding: 0,
        margin: 0,
        display: "flex",
        gap: "20px",
      },
      footerLink: {
        color: "#ffffff",
        textDecoration: "none",
        transition: "color 0.3s ease",
        '&:hover': {
          color: "#6e45e2",
          textDecoration: "none",
        },
      },
      copyright: {
        color: "#ffffff",
        opacity: 0.7,
        fontSize: "0.9rem",
      },
    };

    return (
      <footer className="footer px-0 px-lg-3" style={styles.footer}>
        <Container fluid>
          <nav>
            <ul className="footer-menu" style={styles.footerMenu}>
              <li>
                <a 
                  href="#pablo" 
                  onClick={(e) => e.preventDefault()}
                  style={styles.footerLink}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#pablo" 
                  onClick={(e) => e.preventDefault()}
                  style={styles.footerLink}
                >
                  Company
                </a>
              </li>
              <li>
                <a 
                  href="#pablo" 
                  onClick={(e) => e.preventDefault()}
                  style={styles.footerLink}
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a 
                  href="#pablo" 
                  onClick={(e) => e.preventDefault()}
                  style={styles.footerLink}
                >
                  Blog
                </a>
              </li>
            </ul>
            <div className="copyright float-right" style={styles.copyright}>
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" style={{color: "#6e45e2"}} /> by Smart Betting AI
            </div>
          </nav>
        </Container>
      </footer>
    );
  }
}

export default Footer;