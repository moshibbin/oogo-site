"use client"
import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
const NavBar: React.FC = () => {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    return (
        <> <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
            <Navbar.Collapse id="basic-navbar-nav" className={`${expanded ? 'show' : ''}`}>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar></>);
}


export default NavBar;