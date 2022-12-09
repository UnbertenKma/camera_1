import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/" className="nav-link">
                2D View
              </NavLink>
              <NavLink to="/navigation" className="nav-link">
                Tree View
              </NavLink>
              <Nav.Link href="/mapview" className="nav-link">
                Map View
              </Nav.Link>
              <NavLink to="/livecam" className="nav-link">
                LivestreamRTSP
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
