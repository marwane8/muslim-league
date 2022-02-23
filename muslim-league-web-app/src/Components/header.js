import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../Assets/App.css';
import logo from '../Assets/images/logo.png';
import { Container } from 'react-bootstrap';

class Header extends Component{
    render(){
        return(

                <Navbar className="Navbar" expand="lg">
                    <Container fluid="xl">
                    <Navbar.Brand href="/"><img className="Logo" src={logo} alt="Logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="About" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/About">About Us</NavDropdown.Item>
                            <NavDropdown.Item href="/Policy"> League Policy</NavDropdown.Item>
                            <NavDropdown.Item href="/Contact"> Contact Us</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/Schedule">Schedule</Nav.Link>
                        <Nav.Link href="/Stats">Stats</Nav.Link>
                        <Nav.Link href="/Standings">Standings</Nav.Link>
                        <Nav.Link href="/Awards">Awards</Nav.Link>
                        <Nav.Link href="/Teams">Teams</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>

        );
    }
}

export default Header;