import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    // nav: true,
    margin: 60,
    dots: true,
    dotsEach: true,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
        "<i className='bx bx-chevron-left'></i>",
        "<i className='bx bx-chevron-right'></i>"
    ],
    responsive: {
        0: {
            items: 1,

        },
        600: {
            items: 3
        },
        768: {
            items: 2,
            margin: 30,
        },
        1000: {
            items: 2,
            slideBy: 2,
            smartSpeed: 1500,
        }
    }
};

const Testimonial = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <div class="testimonial-area pd-top-115 pd-bottom-120">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-8 col-lg-10 col-md-11">
                        <div class="section-title text-center">
                            <h5 class="sub-title">Testimonials</h5>
                            <h2 class="title">Student Community Feedback</h2>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-12">
                        {display ? <OwlCarousel
                            className="testimonial-slider owl-carousel owl-theme"
                            {...options}
                        >

                            <div class="item">
                                <div class="testimonial-content text-center">
                                    <div class="author-thumb">
                                        <img src="images/testimonial/1.png" alt="img" />
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's </p>
                                    <div class="icon">
                                        <img src="images/testimonial/quote.png" alt="img" />
                                    </div>
                                    <h5><a href="#">john doe</a></h5>
                                    <span class="author-meta">University</span>
                                </div>
                            </div>
                            <div class="item">
                                <div class="testimonial-content text-center">
                                    <div class="author-thumb">
                                        <img src="images/testimonial/1.png" alt="img" />
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's </p>
                                    <div class="icon">
                                        <img src="images/testimonial/quote.png" alt="img" />
                                    </div>
                                    <h5><a href="#">john doe</a></h5>
                                    <span class="author-meta">University</span>
                                </div>
                            </div>
                            <div class="item">
                                <div class="testimonial-content text-center">
                                    <div class="author-thumb">
                                        <img src="images/testimonial/1.png" alt="img" />
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry'sm Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                    <div class="icon">
                                        <img src="images/testimonial/quote.png" alt="img" />
                                    </div>
                                    <h5><a href="#">Andra Farno</a></h5>
                                    <span class="author-meta">University</span>
                                </div>
                            </div>
                            <div class="item">
                                <div class="testimonial-content text-center">
                                    <div class="author-thumb">
                                        <img src="images/testimonial/1.png" alt="img" />
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's </p>
                                    <div class="icon">
                                        <img src="images/testimonial/quote.png" alt="img" />
                                    </div>
                                    <h5><a href="#">john doe</a></h5>
                                    <span class="author-meta">University</span>
                                </div>
                            </div>
                            <div class="item">
                                <div class="testimonial-content text-center">
                                    <div class="author-thumb">
                                        <img src="images/testimonial/1.png" alt="img" />
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's </p>
                                    <div class="icon">
                                        <img src="images/testimonial/quote.png" alt="img" />
                                    </div>
                                    <h5><a href="#">Jesika Doe</a></h5>
                                    <span class="author-meta">University</span>
                                </div>
                            </div>

                        </OwlCarousel> : ''}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial;