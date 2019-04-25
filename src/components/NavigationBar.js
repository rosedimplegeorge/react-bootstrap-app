import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.navbar {
    background-color: grey;
}

.navbar-brand, .navbar-nav, .navbar-link{
    color: black;

    &:hover {
        color: white;
    }
}
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
        <Navbar.Brand href="/">Code Life</Navbar.Brand>
        <Navbar.Toggle area-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto"  >
            <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/About">About</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/Contact">Contact</Nav.Link></Nav.Item>
            </Nav>      
        </Navbar.Collapse>
        </Navbar>
    </Styles>
)