import React from 'react';
import NavbarTop from '../components/_App/NavbarTop';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import PremiumAccessTwo from '../components/Common/PremiumAccessTwo';
import Footer from '../components/homepage/Footer';
import Link from 'next/link';

const Advisor = () => {
    return (
        <React.Fragment>
            <NavbarTop />
            <Navbar />
            <PageBanner 
                pageTitle="Instructors" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Instructors" 
            />  

            <div className="advisor-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="single-advisor-item">
                                <div className="advisor-image">
                                    <img src="/images/advisor/advisor4.jpg" alt="image" />

                                    <ul className="social-link">
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                                    </ul>
                                </div>

                                <div className="advisor-content">
                                    <h3>
                                        <Link href="#">
                                            <a>john doe</a>
                                        </Link>
                                    </h3>
                                    <span>Project Management Expert</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="single-advisor-item">
                                <div className="advisor-image">
                                    <img src="/images/advisor/advisor5.jpg" alt="image" />

                                    <ul className="social-link">
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                                    </ul>
                                </div>

                                <div className="advisor-content">
                                    <h3>
                                        <Link href="#">
                                            <a>john doe</a>
                                        </Link>
                                    </h3>
                                    <span>Illustrator Expert</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="single-advisor-item">
                                <div className="advisor-image">
                                    <img src="/images/advisor/advisor6.jpg" alt="image" />

                                    <ul className="social-link">
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                                    </ul>
                                </div>

                                <div className="advisor-content">
                                    <h3>
                                        <Link href="#">
                                            <a>john doe</a>
                                        </Link>
                                    </h3>
                                    <span>QA Project Expert</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="single-advisor-item">
                                <div className="advisor-image">
                                    <img src="/images/advisor/advisor7.jpg" alt="image" />

                                    <ul className="social-link">
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                                    </ul>
                                </div>

                                <div className="advisor-content">
                                    <h3>
                                        <Link href="#">
                                            <a>john doe</a>
                                        </Link>
                                    </h3>
                                    <span>QA Project Expert</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="single-advisor-item">
                                <div className="advisor-image">
                                    <img src="/images/advisor/advisor8.jpg" alt="image" />

                                    <ul className="social-link">
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                                    </ul>
                                </div>

                                <div className="advisor-content">
                                    <h3>
                                        <Link href="#">
                                            <a>john doe</a>
                                        </Link>
                                    </h3>
                                    <span>Python Expert</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="single-advisor-item">
                                <div className="advisor-image">
                                    <img src="/images/advisor/advisor9.jpg" alt="image" />

                                    <ul className="social-link">
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                                    </ul>
                                </div>

                                <div className="advisor-content">
                                    <h3>
                                        <Link href="#">
                                            <a>john doe</a>
                                        </Link>
                                    </h3>
                                    <span>Photoshop Expert</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pb-100">
                {/* <PremiumAccessTwo />     */}
            </div>

            <Footer />
        </React.Fragment>
    )
}

export default Advisor;