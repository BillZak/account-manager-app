import { Navbar,Container,Nav } from 'react-bootstrap'

import React from 'react';

const NavBar = () => {
    return (
        <div>
         <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home" style={{marginLeft: '0px'}}>Employee Account Manager</Navbar.Brand>
            <Nav className="me-auto" style={{marginLeft: '700px'}}>
            <Nav.Link href="#home">Log In</Nav.Link>
            <Nav.Link href="#features">Sign Up</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        </div>
    );
}

export default NavBar;
