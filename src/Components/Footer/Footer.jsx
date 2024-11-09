import React from 'react'
import { Container, Col, Row, ListGroup, Card } from 'react-bootstrap'

const Footer = () => {
    return (
        <Container>
            <Col>
                <Row>
                    <Card>
                    <Card.Title>About Us</Card.Title>
                        <Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>

                </Row>
            </Col>
        </Container>
    )
}

export default Footer