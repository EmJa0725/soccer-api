import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import navbarIcon from "../assets/navbar-icon.png";

const Nav = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={navbarIcon}
                        width="40"
                        height="40"
                        className="d-inline-block align-top me-4"
                    />
                    <span className="d-inline-block align-middle navbar-title">Soccer leagues standings</span>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Nav
