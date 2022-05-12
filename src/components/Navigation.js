import React, {Component} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Error from "../pages/Error";

class Navigation extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar bg="" variant="light" scrolling expand="md" fixed="top">
                    <Navbar.Brand as={Link} to="/">mdsakir.com</Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="justify-content-end">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                            <Nav.Link as={Link} to="contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Routes>
                    <Route index path={'/'} element={<Home/>}/>
                    <Route path={'about'} element={<About/>}/>
                    <Route path={'contact'} element={<Contact/>}/>
                    <Route path={'*'} element={<Error/>}/>
                </Routes>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
            </BrowserRouter>
        );
    }
}

export default Navigation;