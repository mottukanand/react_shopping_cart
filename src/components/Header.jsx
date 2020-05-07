import React, { Component, Fragment } from 'react';
import {  Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <Fragment>
                <Navbar className="header">
                    <Navbar.Brand >Shopping</Navbar.Brand>
                    <Navbar.Toggle label="button">Burr</Navbar.Toggle>
                    <Nav activeKey="/home">
                    </Nav>
                    <Navbar.Collapse>
                        <Nav className="justify-content-end" activeKey="/home" style={{ width: "100%  " }}>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/">Signup</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </Fragment>
        )
    }
}

export default Header