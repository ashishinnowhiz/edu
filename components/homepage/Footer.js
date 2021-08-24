import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <>
             <footer className="footer-area bg-overlay-rgba" style={{backgroundImage: "url('images/other/1.png');"}}>
        <div className="footer-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="widget widget_contact">
                            <h4 className="widget-title">Contact Us</h4>
                            <ul className="details">
                                <li><i className="bx bxs-map"></i>  30/A Frederick Street, Rockdale, New South Wales, 2216</li>
                                <li><i className="bx bxs-envelope"></i> farhanhossain583@gmail.com</li>
                                <li><i className="bx bxs-phone"></i> +61 452 497 919</li>
                            </ul>
                            <ul className="social-media">
                                <li>
                                    <a href="#"><i className='bx bxl-facebook' aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className='bx bxl-twitter' aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="bx bxl-instagram" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="bx bxl-pinterest" aria-hidden="true"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="widget widget_nav_menu">
                            <h4 className="widget-title">Categorys</h4>
                            <ul>
                                <li><a href="">Category 1</a></li>
                                <li><a href="">Category 2 </a></li>
                                <li><a href="">Category 3</a></li>
                                <li><a href="">Category 4</a></li>
                                <li><a href="">Category 5</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <div className="widget widget_nav_menu">
                            <h4 className="widget-title">Learnxyz</h4>
                            <ul>
                                <li><a href="">Course</a></li>
                                <li><a href="">Instructors</a></li>
                                <li><a href="">Sign In </a></li>
                                <li><a href="">Sign Up</a></li>
                                <li><a href="">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pl-lg-5 pr-5 pr-lg-0">
                        <div className="widget widget_instagram">
                            <h4 className="widget-title">Gallery</h4>
                            <div className="instagram-inner">
                                <div className="row custom-gutters-10">
                                    <div className="col-6">
                                        <div className="thumb">
                                            <a href=""><img src="images/instagram/1.png" alt="img"/></a>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="thumb">
                                            <a href=""><img src="images/instagram/2.png" alt="img"/></a>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="thumb">
                                            <a href=""><img src="images/instagram/3.png" alt="img"/></a>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="thumb">
                                            <a href=""><img src="images/instagram/4.png" alt="img"/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 align-self-center">
                    <Link href="/" activeClassName="active">
                                    <a className="nav-link"> <h4 style={{ color: "white" }}> Global Education Platform</h4></a>
                                </Link>
                        {/* <a href=""><img src="images/logo.jpg" alt="img"/></a> */}
                    </div>
                    <div className="col-md-8 text-md-right align-self-center mt-lg-0 mt-3">
                        <p>© 2021 Global Education Platform. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
     </div>
    </footer>
        </>
    );
};

export default Footer;