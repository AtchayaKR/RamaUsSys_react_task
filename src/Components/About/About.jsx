import React from 'react'
import './About.css'
import { FaPaperPlane } from 'react-icons/fa'

const About = () => {
    return (
        <div className='container mt-5'>
            <div className='header-content text-center flex flex-column'>
                <h1 className='text-uppercase header-title'>About Us</h1>
                <p className='text-lowercase'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste doloremque dolore quia omnis maxime corporis deserunt neque voluptatum.Lorem
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque cupiditate sint possimus numquam suscipit consequuntur pariatur hic earum. Fugiat aliquid ut quae voluptatem, dolorem rerum sunt cum eum necessitatibus.
                </p>
                <a href="/" className='btn header-btn btn-blue'>
                    <FaPaperPlane /> <span>get started</span>
                </a>
            </div>
        </div>
    )
}

export default About