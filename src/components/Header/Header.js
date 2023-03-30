import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                {/* <Navbar.Brand href="#home">WebMinhvn</Navbar.Brand> */}
                <NavLink to='/' className='navbar-brand'> WebMinhvn</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* <Nav.Link href="/">Home</Nav.Link> */}
                        {/* <Nav.Link href="/user">User</Nav.Link> */}
                        {/* <Nav.Link href="/admin">Admin</Nav.Link> */}
                        <NavLink to="/" className='nav-link'> Home Page </NavLink>
                        <NavLink to='/user' className='nav-link'>User</NavLink>
                        <NavLink to='/admin' className='nav-link'>Admin</NavLink>

                    </Nav>
                    <Nav>
                        <button className='btn-login'>Login</button>
                        <button className='btn-signup'>Sign Up</button>
                        {/* <NavDropdown title="Setting" id="basic-nav-dropdown">

                            <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Log Out
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Profile
                            </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;