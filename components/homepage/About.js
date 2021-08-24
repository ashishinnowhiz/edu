import React from 'react';

const About = () => {
    return (
        <>
    <div className="about-area pd-top-90 pd-bottom-90">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 order-lg-12">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="thumb about-thumb  wow animated zoomIn" data-wow-duration="0.8s" data-wow-delay="0.1s">
                                <img src="images/about/2.png" alt="img"/>
                            </div>
                            <div className="thumb about-thumb  wow animated zoomIn" data-wow-duration="0.8s" data-wow-delay="0.2s">
                                <img src="images/about/3.png" alt="img"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="thumb about-thumb  wow animated zoomIn" data-wow-duration="0.8s" data-wow-delay="0.3s">
                                <img src="images/about/1.png" alt="img"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 order-lg-1 align-self-center mt-3 mt-lg-0 pb-4 pb-lg-0">
                    <div className="section-title mb-0">
                        <h5 className="sub-title">Innowhiz</h5>
                        <h2 className="title">Welcome to Our Online Learning Center</h2>
                        <p className="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </p>
                        <a className="btn btn-base" href="#">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

        </>
    );
};

export default About;