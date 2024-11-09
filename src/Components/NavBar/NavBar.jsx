import React from 'react'
import './NavBar.css'
import { Navbar, Container, Nav, Form, Row, NavDropdown } from 'react-bootstrap'

const NavBar = () => {
    return (
        <><Container>
            <Navbar bg="success" data-bs-theme="dark" expand="xl" className="bg-body-tertiar ">
                <Container>
                    <Navbar.Brand href="#" className='center'>You can save up to 80%* on monthly electricity bills. Get a quote!</Navbar.Brand>
                </Container>
            </Navbar>
        </Container>
            <Container>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container fluid>
                        <h2>Getin Solar</h2>
                        <Navbar.Collapse id="navbarScroll">

                            <Form className="d-flex w-100 m-2">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="mr-xl-2"
                                    aria-label="Search"
                                />
                            </Form>
                            <Row className='m-2'>
                                <Navbar.Brand href="#">Login/Sign Up</Navbar.Brand>
                                <Navbar.Brand href="#">My  Account</Navbar.Brand>
                            </Row>
                            <h4 className='m-2'>Cart</h4>
                        </Navbar.Collapse>
                    </Container>

                </Navbar>
                <Container fluid>
                    <Nav defaultActiveKey="/home" as="ul">
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <NavDropdown title="Shop" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#action2">Contact</Nav.Link>

                        <NavDropdown title="Learn" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>



            </Container></>
    )
}

export default NavBar