import React from 'react'
import './Residential.css'
import { Card, Row, Col, Container } from 'react-bootstrap'


const Residential = () => {
    return (
        <Container className='mt-5'>
            <Row>
                <Col xs={6} md={4}>
                    <Card.Img variant="top" src="" className='img1' />
                </Col>
                <Col xs={6} md={4}>
                    <Card.Img variant="top" src="" className='img2' />
                </Col>
                <Col xs={6} md={4}>
                    <Card.Img variant="top" src="" className='img3' />
                </Col>
            </Row>
        </Container>
    )
}

export default Residential