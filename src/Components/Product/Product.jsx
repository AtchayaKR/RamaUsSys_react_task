import React from 'react'
import { Container, Row, Navbar, Col, Image, Placeholder } from 'react-bootstrap'
import './Product.css'

const Product = () => {
    return (
        <>
            <Container className='mt-5'>
                <Row>
                    <Col>
                        <h4>Product Range</h4>
                    </Col>
                    <Col>
                        <h4>Product Range</h4>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col xs={6} md={4}>
                        <Image roundedCircle className='img1' />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image roundedCircle className='img1' />
                    </Col> <Col xs={6} md={4}>
                        <Image roundedCircle className='img1' />
                    </Col>

                </Row>
            </Container></>
    )
}

export default Product