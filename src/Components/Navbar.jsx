import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import {
  Link
} from "react-router-dom";

const Navb = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">RoomWoom</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                    <Nav.Link>
                        <Link to="/postProperty">Post a Property</Link>
                    </Nav.Link>
                    {/* <Nav.Link to="/postProperty">Post a Property</Nav.Link> */}
                    <Nav.Link href="#home">Login</Nav.Link>
                    <Nav.Link href="#link">SignUP</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navb;
