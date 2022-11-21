import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import { Link } from "react-router-dom";

function BootBar() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Sähkön hinnat</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Home">
              Koti
            </Nav.Link>
            <Nav.Link as={Link} to="/Expenses">
              Expenses
            </Nav.Link>
            <Nav.Link as={Link} to="/Invoices">
              Invoices
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}
export default BootBar;
