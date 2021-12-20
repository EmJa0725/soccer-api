import React from 'react'
import {NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from'react-bootstrap/Nav';
import navbarIcon from "../assets/img/main/navbar-icon.png";
import { leagues } from '../config/leaguesDictionary';


const MyNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={navbarIcon}
                        width="40"
                        height="40"
                        className="d-inline-block align-top me-4"
                    />
                    <span className="d-inline-block align-middle navbar-title">Football leagues standings</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="navbar-items">
                    <Nav>
                        {leagues.map((league, idx) => (
                            <NavLink
                                key={idx}
                                className={({ isActive }) => (isActive ? 'nav-link selected' : 'nav-link')}
                                to={`standings/${league.name}`} state={{ data: { ...league } }}>
                                <img className="navbar-image" src={league.headerLogo} alt={league.name} />
                            </NavLink>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNavbar
