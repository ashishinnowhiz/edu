import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    margin: 60,
    dots: false,
    smartSpeed: 1500,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
        "<i class='bx bx-chevron-left courseleft'></i>",
        "<i class='bx bx-chevron-right courseright'></i>"
    ],
    responsive: {
        0: {
            items: 1,

        },
        600: {
            items: 3
        },
        768: {
            items: 3,
            margin: 30,
        },
        1000: {
            items: 3
        }
    }
};

const Course = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <div class="course-area pd-top-115 pd-bottom-90 bg-parallax" style={{ background: "#222242;" }}>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="section-title style-white text-md-right text-center">
                            <h5 class="sub-title">New Courses</h5>
                            <h2 class="title">Featured Courses</h2>
                        </div>
                    </div>
                </div>
                {display ? <OwlCarousel
                    className="partner-slides owl-carousel owl-theme courseSlider"
                    {...options}
                >

                    <div class="item">
                        <div class="single-course-inner">
                            <div class="thumb">
                                <img src="images/course/1.png" alt="img" />
                                <div class="cat-area">
                                    <a class="cat-yellow" href="#">btn1</a>
                                    <a class="cat-green" href="#">btn2</a>
                                </div>
                            </div>
                            <div class="details">
                                <h5><a href="#">Lorem Ipsum is simply dummy text of the printing. </a></h5>
                                <div class="meta">
                                    <div class="row">
                                        <div class="col-6 align-self-center">
                                            <span><i class="fa fa-clock-o"></i>12 Week</span>
                                        </div>
                                        <div class="col-6 align-self-center">
                                            <div class="rating-inner text-right">
                                                <i class='bx bxs-star' style={{ color: '#f84c00' }}  ></i>
                                                <i class='bx bxs-star' style={{ color: '#f84c00' }}  ></i>
                                                <i class='bx bxs-star' style={{ color: '#f84c00' }}  ></i>
                                                <i class='bx bxs-star' style={{ color: '#f84c00' }}  ></i>
                                                <i class='bx bxs-star' style={{ color: '#f84c00' }}  ></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="btn-area">
                                    <div class="row">
                                        <div class="col-6 align-self-center">
                                            <span class="price">$250.00</span>
                                        </div>
                                        <div class="col-6 align-self-center text-right">
                                            <a class="btn btn-border-base b-animate-3" href="#">Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="single-course-inner">
                            <div class="thumb">
                                <img src="images/course/2.png" alt="img" />
                                <div class="cat-area">
                                    <a class="cat-yellow" href="#">btn1</a>
                                    <a class="cat-green" href="#">Btn2</a>
                                </div>
                            </div>
                            <div class="details">
                                <h5><a href="#">Lorem Ipsum is simply dummy text of the printing. </a></h5>
                                <div class="meta">
                                    <div class="row">
                                        <div class="col-6 align-self-center">
                                            <span><i class="fa fa-clock-o"></i>12 Week</span>
                                        </div>
                                        <div class="col-6 align-self-center">
                                            <div class="rating-inner text-right">
                                                <i class='bx bxs-star' style={{ color: '#f84c00' }}  ></i>
                                                <i class='bx bxs-star' style={{ color: '#f84c00' }}  ></i>
                                                <i class='bx bxs-star' style={{ color: '#f84c00' }}  ></i>
                                                <i class='bx bxs-star' style={{ color: '#f84c00' }}  ></i>
                                                <i class='bx bxs-star' style={{ color: '#f84c00' }}  ></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="btn-area">
                                    <div class="row">
                                        <div class="col-6 align-self-center">
                                            <span class="price">$150.00</span>
                                        </div>
                                        <div class="col-6 align-self-center text-right">
                                            <a class="btn btn-border-base b-animate-3" href="#">Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="single-course-inner">
                            <div class="thumb">
                                <img src="images/course/3.png" alt="img" />
                                <div class="cat-area">
                                    <a class="cat-yellow" href="#">btn1</a>
                                    <a class="cat-green" href="#">Btn2</a>
                                </div>
                            </div>
                            <div class="details">
                                <h5><a href="#">Lorem Ipsum is simply dummy text of the printing. </a></h5>
                                <div class="meta">
                                    <div class="row">
                                        <div class="col-6 align-self-center">
                                            <span><i class="fa fa-clock-o"></i>11 Week</span>
                                        </div>
                                        <div class="col-6 align-self-center">
                                            <div class="rating-inner text-right">
                                                <i class='bx bxs-star' style={{ color: '#f84c00' }}  ></i>
                                                <i class='bx bxs-star' style={{ color: '#f84c00' }}  ></i>
                                                <i class='bx bxs-star' style={{ color: '#f84c00' }}  ></i>
                                                <i class='bx bxs-star' style={{ color: '#f84c00' }}  ></i>
                                                <i class='bx bxs-star' style={{ color: '#f84c00' }}  ></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="btn-area">
                                    <div class="row">
                                        <div class="col-6 align-self-center">
                                            <span class="price">$350.00</span>
                                        </div>
                                        <div class="col-6 align-self-center text-right">
                                            <a class="btn btn-border-base b-animate-3" href="#">Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="single-course-inner">
                            <div class="thumb">
                                <img src="images/course/4.png" alt="img" />
                                <div class="cat-area">
                                    <a class="cat-green" href="#">Btn2</a>
                                </div>
                            </div>
                            <div class="details">
                                <h5><a href="#">Lorem Ipsum is simply dummy text of the printing. </a></h5>
                                <div class="meta">
                                    <div class="row">
                                        <div class="col-6 align-self-center">
                                            <span><i class="fa fa-clock-o"></i>12 Week</span>
                                        </div>
                                        <div class="col-6 align-self-center">
                                            <div class="rating-inner text-right">
                                                <i class='bx bxs-star' style={{ color: '#f84c00' }}  ></i>
                                                <i class='bx bxs-star' style={{ color: '#f84c00' }}  ></i>
                                                <i class='bx bxs-star' style={{ color: '#f84c00' }}  ></i>
                                                <i class='bx bxs-star' style={{ color: '#f84c00' }}  ></i>
                                                <i class='bx bxs-star' style={{ color: '#f84c00' }}  ></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="btn-area">
                                    <div class="row">
                                        <div class="col-6 align-self-center">
                                            <span class="price">$250.00</span>
                                        </div>
                                        <div class="col-6 align-self-center text-right">
                                            <a class="btn btn-border-base b-animate-3" href="#">Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel> : ''}
            </div>
        </div>
    )
}

export default Course;