import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';



function NavBar() {

    const history = useHistory()

    const closeSession = () => {

        localStorage.removeItem("token")

        history.push('/')
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container className="justify-content-start">
                <Navbar.Brand href="#home">AlkemyChallenge</Navbar.Brand>
            </Container>
            <Container className="justify-content-end">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav ">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} to="/Home">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/Edit">Edit</Nav.Link>
                        <Nav.Link onClick={() => closeSession()}>Log out</Nav.Link>    
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
