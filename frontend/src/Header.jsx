// import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

function Header() {
  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto nav-bar">
          {localStorage.getItem("user-info") ? (
            <>
              <Link to="/add">AddProduct</Link>
              <Link to="/update">Update</Link>
            </>
          ) : (
            <>
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
            </>
          )}
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;
