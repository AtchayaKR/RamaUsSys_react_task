import React from 'react'
import NavBar from '../NavBar/NavBar'
import './Header.css'
import { Image, Container } from 'react-bootstrap'

const Header = () => {
    return (
        <><header className='header flex flex-center flex-column'>
            <NavBar />
        </header>
            <Container>
                <Image src='' fluid className='img' />
            </Container>

        </>
    )
}

export default Header