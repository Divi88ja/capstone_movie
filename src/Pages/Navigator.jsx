import { Outlet,  Navigate } from "react-router-dom";
import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";

export default function Navbar1() {
  return (
    <>
      {/* <ul>
                <li>
                    <NavLink to="/" style={(isActive) => { return { fontWeight: isActive ? "bold" : "", color: "green" } }} >
                        /
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/home" style={({isActive}) => { return { fontWeight: isActive ? "bold" : "", "color": isActive ? "red":"" } }} >
                        HOME
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" style={({isActive}) => { return { fontWeight: isActive ? "bold" : "", "color": isActive ? "red":"" } }}>
                        MOVIES
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/contact" style={({isActive}) => { return { fontWeight: isActive ? "bold" : "", "color": isActive ? "red":"" } }}>
                        INPUT
                    </NavLink>
                </li>
                <li>
                    <NavLink>
                        Error
                    </NavLink>
                </li>
            </ul> */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <span>C</span>ine<span>F</span>licks
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/movie">Movies</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}
