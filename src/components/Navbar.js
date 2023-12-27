import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "../scss/navbar.scss";

function OffcanvasExample() {
    const [expandnav, setExpandnav] = useState(false);
    return (
        <>
            {['md'].map((expand) => (
                <Navbar collapseOnSelect key={expand} expand={expand} className="bg-body-tertiary mb-3">
                    <Container fluid>

                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Navbar.Brand href="#home" className="nav-brand">AK</Navbar.Brand>
                                <Nav className="justify-content-end flex-grow-1 pe-3 nav-links">
                                    <Nav.Link href="#aboutme">About Me</Nav.Link>
                                    <Nav.Link href="#myskills">My Skills</Nav.Link><Nav.Link href="#contactme">Contact Me</Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default OffcanvasExample;