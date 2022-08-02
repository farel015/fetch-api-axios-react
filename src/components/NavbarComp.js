import React from "react";
import { Navbar, Nav, Container, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComp = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Fetch-API
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Stack direction="horizontal" gap={4}>
                <Nav.Link as={Link} to="/">
                  Beranda
                </Nav.Link>
                <Nav.Link as={Link} to="/seluruhdata">
                  Seluruh Data
                </Nav.Link>
                <Nav.Link as={Link} to="/satudata">
                  Satu Data
                </Nav.Link>
              </Stack>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
