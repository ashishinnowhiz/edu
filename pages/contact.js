import React from 'react';
import NavbarTop from '../components/_App/NavbarTop';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ContactForm from '../components/Contact/ContactForm';
import Footer from '../components/homepage/Footer';
import GoogleMap from '../components/Contact/GoogleMap';

const Contact = () => {
    return (
        <React.Fragment>
            <NavbarTop />
            <Navbar />
            <PageBanner 
                pageTitle="Contact" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Contact" 
            />  

            <div className="contact-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="contact-info">
                                <span className="sub-title">Contact Details</span>
                                <h2>Get in Touch</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra.</p>

                                <ul>
                                    <li>
                                        <div className="icon">
                                            <i className='bx bx-map'></i>
                                        </div>
                                        <h3>Our Address</h3>
                                        <p>30/A Frederick Street, Rockdale, New South Wales, 2216</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className='bx bx-phone-call'></i>
                                        </div>
                                        <h3>Contact</h3>
                                        <p>Mobile: <a href="tel:+61452497919">+61 452 497 919</a></p>
                                        <p>Mail: <a href="mailto:farhanhossain583@gmail.com">farhanhossain583@gmail.com</a></p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className='bx bx-time-five'></i>
                                        </div>
                                        <h3>Hours of Operation</h3>
                                        <p>Monday - Friday: 09:00 - 20:00</p>
                                        <p>Sunday & Saturday: 10:30 - 22:00</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>

            <GoogleMap />
     
            <Footer />
        </React.Fragment>
    )
}

export default Contact;