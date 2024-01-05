import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className='d-flex justify-content-center align-items-center mt-5'>
                <div className="footer d-flex justify-content-evenly align-items-center">
                    <div className="website" style={{ width: "400px" }}>
                        <h4><i class="fa-solid fa-video text-warning me-3"></i>  Media Player</h4>
                        <p style={{ textAlign: "justify" }}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus laborum vel sed. Molestias nam vero accusamus quasi, veniam, accusan</p>

                    </div>
                    <div className="links d-flex flex-column ms-5">
                        <h4>Links</h4>
                        <Link to='/' style={{ textDecoration: "none", color: "white" }}>Landing Page</Link>
                        <Link to='/home' style={{ textDecoration: "none", color: "white" }}>Home Page</Link>
                        <Link to='/watch' style={{ textDecoration: "none", color: "white" }}>Watch History</Link>
                    </div>
                    <div className="guides d-flex flex-column ms-5">
                        <h4>Guides</h4>
                        <Link to='http://react.dev/' target='_blank' style={{ textDecoration: "none", color: "white" }}>React</Link>
                        <Link to='http://react-bootstrap.netlify.app/' target='_blank' style={{ textDecoration: "none", color: "white" }}>React Bootstrap</Link>
                        <Link to='/http://bootswatch.com/' target='_blank' style={{ textDecoration: "none", color: "white" }}>Boots Watch</Link>
                    </div>
                    <div className='contactus d-flex flex-column ms-5'>
                        <h4>Contact Us</h4>
                        <div className="d-flex">
                            <input type="text" className='form-control' placeholder='Enter your Email' />
                            <button className='btn btn-warning ms-3'>Subscibe</button>
                        </div>
                        <div className='d-flex justify-content-evenly align-item-center mt-3'>

                            <Link ><i class="fa-brands fa-facebook fa-2x"></i></Link>
                            <Link><i class="fa-brands fa-instagram fa-2x"></i></Link>
                            <Link><i class="fa-brands fa-linkedin-in fa-2x"></i></Link>
                            <Link><i class="fa-brands fa-twitter fa-2x"></i></Link>
                        </div>

                    </div>

                </div>

            </div>
            <p className='mt-5 text-center'>Copyright &copy; 2023 media player. Build with React</p>
        </>

    )
}

export default Footer
