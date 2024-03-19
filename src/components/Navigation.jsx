import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

import { navLinks } from "../assets/data/index";
import "../styles/component.css"

const Navigation = () => {
  const [bgColor, changeBgColor] = useState(false);

  const toggleChangeColor = () => {
    if (window.scrollY > 10) {
      changeBgColor(true);
    } else {
      changeBgColor(false);
    }
  };

  useEffect(() => {
    toggleChangeColor();

    window.addEventListener("scroll", toggleChangeColor);
  });

  return (
    <div className="navbar-wrapper">
      <Navbar expand="lg" className={bgColor ? "bg-active" : "bg-notActive"}>
        <Container>
          <Navbar.Brand href="/">NAMA CV</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav p-0">
            <Nav className="ms-auto d-flex gap-4 gap-lg-4 gap-md-5 gap-sm-4 text-center">
              {navLinks.map((link) => {
                return (
                  <div key={link.id}>
                    <NavLink
                      to={link.path}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }
                      reloadDocument
                    >
                      {link.text}
                    </NavLink>
                  </div>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
