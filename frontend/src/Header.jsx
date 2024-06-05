// import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function Header() {
  const user = JSON.parse(localStorage.getItem("user-info"));
  console.warn(user);
  function logout() {
    localStorage.clear();
    history("/register");
  }

  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto nav-bar">
          {localStorage.getItem("user-info") ? (
            <>
              <Link to="/list">List</Link>
              <Link to="/add">AddProduct</Link>
              <Link to="/update">Update</Link>
              <Link to="/search">Search</Link>
            </>
          ) : (
            <>
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
            </>
          )}
        </Nav>
        {localStorage.getItem("user-info") ? (
          <>
            <Nav>
              <NavDropdown title="user">
                <NavDropdown.Item>profile</NavDropdown.Item>
                <NavDropdown.Item onClick={logout}>logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>{" "}
          </>
        ) : (
          <>null </>
        )}
      </Navbar>
    </div>
  );
}

export default Header;
