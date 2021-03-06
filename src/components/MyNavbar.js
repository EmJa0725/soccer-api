import React from 'react'
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import navbarIcon from "../assets/img/navbar/navbar-icon.png";
import { leagues } from '../config/leaguesDictionary';
import { useNavigate } from 'react-router-dom';
import { Collapse } from 'bootstrap';


const MyNavbar = () => {
    const navigate = useNavigate();

    const collapseToogle  = () => {
        if (window.innerWidth <= 992) { //Hide nav items only on width less than 992px
            let myCollapse = document.getElementById('navbar-items')
            new Collapse(myCollapse, {
                show: false
            })
        }
    }

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="pt-xs-0 pt-md-0 pt-xs-0 pb-md-0 fixed-top" id="main-navbar">
            <Container>
                <Navbar.Brand className="navbar-brand" onClick={() => navigate("/")}>
                    <img
                        alt=""
                        src={navbarIcon}
                        width="40"
                        height="40"
                        className="d-inline-block align-top me-3 me-sm-4"
                    />
                    <span className="d-inline-block align-middle navbar-title">Football leagues standings</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="navbar-items">
                    <Nav>
                        {leagues.map((league, idx) => (
                            <NavLink
                                key={idx}
                                onClick={() => collapseToogle()}
                                className={({ isActive }) => (isActive ? 'nav-link selected' : 'nav-link')}
                                to={`standings/${league.name}`} state={{ data: { ...league } }}
                                >
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
