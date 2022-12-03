import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <div>
       <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className='nav-link'>Home</NavLink>
                        <NavLink to="/navigation" className='nav-link'>SideBar</NavLink>

                        <NavLink to="/livecam" className='nav-link'>Live-Cam</NavLink>
                        {/* <Nav.Link href="/test" className='nav-link'>test</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header
