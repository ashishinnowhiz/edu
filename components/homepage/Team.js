import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    margin: 60,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
        "<i class='bx bx-chevron-left'></i>",
        "<i class='bx bx-chevron-right'></i>"
    ],
    responsive: {
        0: {
            items: 1,

        },
        600: {
            items: 3
        },
        768: {
            items: 4,
            margin: 30,
        },
        1000: {
            items: 4
        }
    }
};

const Team = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <div className="team-area bg-gray pd-top-115 pd-bottom-90">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title text-md-right text-center">
                            <h5 className="sub-title">Instructors</h5>
                            <h2 className="title">World-class Instructors</h2>
                        </div>
                    </div>
                </div>
                {display ? <OwlCarousel
                    className="owl-carousel owl-theme team-slider slider-control-round owl-loaded owl-drag"
                    {...options}
                >

                    <div className="item">
                        <div className="single-team-inner text-center">
                            <div className="thumb">
                                <img src="images/team/1.png" alt="img" />
                            </div>
                            <div className="details">
                                <h5><a href="#">john doe</a></h5>
                                <p>student</p>
                                <ul className="social-media">
                                    <li>
                                        <a href="#"><i className="bx bxl-facebook" aria-hidden="true"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="bx bxl-twitter" aria-hidden="true"></i></a>
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
                    </div>
                    <div className="item">
                        <div className="single-team-inner text-center">
                            <div className="thumb">
                                <img src="images/team/2.png" alt="img" />
                            </div>
                            <div className="details">
                                <h5><a href="#">john doe</a></h5>
                                <p>student</p>
                                <ul className="social-media">
                                    <li>
                                        <a href="#"><i className="bx bxl-facebook" aria-hidden="true"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="bx bxl-twitter" aria-hidden="true"></i></a>
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
                    </div>
                    <div className="item">
                        <div className="single-team-inner text-center">
                            <div className="thumb">
                                <img src="images/team/3.png" alt="img" />
                            </div>
                            <div className="details">
                                <h5><a href="#">john doe</a></h5>
                                <p>student</p>
                                <ul className="social-media">
                                    <li>
                                        <a href="#"><i className="bx bxl-facebook" aria-hidden="true"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="bx bxl-twitter" aria-hidden="true"></i></a>
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
                    </div>
                    <div className="item">
                        <div className="single-team-inner text-center">
                            <div className="thumb">
                                <img src="images/team/4.png" alt="img" />
                            </div>
                            <div className="details">
                                <h5><a href="#">john doe</a></h5>
                                <p>student</p>
                                <ul className="social-media">
                                    <li>
                                        <a href="#"><i className="bx bxl-facebook" aria-hidden="true"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="bx bxl-twitter" aria-hidden="true"></i></a>
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
                    </div>
                    <div className="item">
                        <div className="single-team-inner text-center">
                            <div className="thumb">
                                <img src="images/team/5.png" alt="img" />
                            </div>
                            <div className="details">
                                <h5><a href="#">john doe</a></h5>
                                <p>student</p>
                                <ul className="social-media">
                                    <li>
                                        <a href="#"><i className="bx bxl-facebook" aria-hidden="true"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="bx bxl-twitter" aria-hidden="true"></i></a>
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
                    </div>

                </OwlCarousel> : ''}
            </div>
        </div>

    )
}

export default Team;