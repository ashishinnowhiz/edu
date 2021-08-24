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
        "<i className='bx bx-chevron-left'></i>",
        "<i className='bx bx-chevron-right'></i>"
    ],
    responsive:{
        0:{
            items: 1,
            
        },
        600:{
            items: 3
        },
        768:{
            items: 4,
            margin: 30,
        },
        1000:{
            items: 4
        }
    }
};

const IntroSlider = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <div className="partner-area pb-70 pt-70 ">
            <div className='banner-area' >
            <div className="container">
                {display ? <OwlCarousel 
                    className="partner-slides owl-carousel owl-theme"
                    {...options}
                >  
            
                <div className="item">
                    <div className="single-intro-inner bg-base style-white text-center">
                        <div className="thumb">
                            <img src="images/introsliderimg/1.png" alt="img"/>
                        </div>
                        <div className="details">
                            <h5>Apply Online</h5>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="single-intro-inner bg-red style-white text-center">
                        <div className="thumb">
                            <img src="images/introsliderimg/2.png" alt="img"/>
                        </div>
                        <div className="details">
                            <h5>Press Release</h5>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="single-intro-inner bg-purple style-white text-center">
                        <div className="thumb">
                            <img src="images/introsliderimg/3.png" alt="img"/>
                        </div>
                        <div className="details">
                            <h5>Online Class</h5>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="single-intro-inner bg-pink style-white text-center">
                        <div className="thumb">
                            <img src="images/introsliderimg/4.png" alt="img"/>
                        </div>
                        <div className="details">
                            <h5>Scholarship</h5>
                        </div>
                    </div>
                </div>
         
  

                </OwlCarousel> : ''}
                </div>
            </div>
        </div>
    )
}

export default IntroSlider;