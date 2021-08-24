import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    smartSpeed: 1500,
    margin: 60,
    dotsEach: true,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
        "<i class='bx bx-chevron-left Bannerlefticon'></i>",
        "<i class='bx bx-chevron-right Bannerrighticon'></i>"
    ],
    responsive:{
        0:{
            items: 1,
            
        },
        // 600:{
        //     items: 3
        // },
        // 768:{
        //     items: 4,
        //     margin: 30,
        // },
        // 1000:{
        //     items: 6
        // }
    }
};

const Banner = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <div className="partner-area pb-70 border-bottom">
            <div className='banner-area banner-area-1' style={{backgroundImage:"url(/images/bannerimg/2.png)"}}>
            <img src="images/bannerimg/5.png" alt="img" className="animate-image-1 top_image_bounce" style={{float:"left"}} />
            <div className="container">
                {display ? <OwlCarousel 
                    className="partner-slides owl-carousel owl-theme"
                    {...options}
                >  
                    <div className="single-partner-item" style={{backgroundImage:"url(/images/bannerimg/2.png)"}}>
                        {/* <img src="/images/bannerimg/5.png" alt="image" /> */}
                        <div class="row justify-content-center">
                        <div class="col-lg-6 col-md-9 order-lg-12 align-self-center">
                            <div class="thumb banner-animate-thumb pl-lg-5" style={{backgroundImage: "url('images/bannerimg/3.png')"}}>
                                <img src="images/bannerimg/1.png" alt="img"/>
                            </div>
                        </div>
                        <div class="col-lg-6 order-lg-1 mt-5 mt-lg-0 align-self-center">
                            <div class="banner-inner style-white text-center text-lg-left">
                                <h6 class="al-animate-1 sub-title">EDUCATION FOR EVERYONE</h6>
                                <h1 class="al-animate-2 title">Classical Education For The Future</h1>
                                <p class="al-animate-3">we believe everyone should have the opportunity to create progress through technology and develop the skills of tomorrow. assessments, learning</p>
                                <a class="btn btn-white al-animate-4" href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="single-partner-item" style={{backgroundImage:"url(/images/bannerimg/2.png)"}}>
                        {/* <img src="/images/bannerimg/5.png" alt="image" /> */}
                        <div class="row justify-content-center">
                        <div class="col-lg-6 col-md-9 order-lg-12 align-self-center">
                            <div class="thumb banner-animate-thumb pl-lg-5" style={{backgroundImage: "url('images/bannerimg/3.png')"}}>
                                <img src="images/bannerimg/1.png" alt="img"/>
                            </div>
                        </div>
                        <div class="col-lg-6 order-lg-1 mt-5 mt-lg-0 align-self-center">
                            <div class="banner-inner style-white text-center text-lg-left">
                                <h6 class="al-animate-1 sub-title">EDUCATION FOR EVERYONE</h6>
                                <h1 class="al-animate-2 title">Classical Education For The Future</h1>
                                <p class="al-animate-3">we believe everyone should have the opportunity to create progress through technology and develop the skills of tomorrow. assessments, learning</p>
                                <a class="btn btn-white al-animate-4" href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="single-partner-item" style={{backgroundImage:"url(/images/bannerimg/2.png)"}}>
                        {/* <img src="/images/bannerimg/5.png" alt="image" /> */}
                        <div class="row justify-content-center">
                        <div class="col-lg-6 col-md-9 order-lg-12 align-self-center">
                            <div class="thumb banner-animate-thumb pl-lg-5" style={{backgroundImage: "url('images/bannerimg/3.png')"}}>
                                <img src="images/bannerimg/1.png" alt="img"/>
                            </div>
                        </div>
                        <div class="col-lg-6 order-lg-1 mt-5 mt-lg-0 align-self-center">
                            <div class="banner-inner style-white text-center text-lg-left">
                                <h6 class="al-animate-1 sub-title">EDUCATION FOR EVERYONE</h6>
                                <h1 class="al-animate-2 title">Classical Education For The Future</h1>
                                <p class="al-animate-3">we believe everyone should have the opportunity to create progress through technology and develop the skills of tomorrow. assessments, learning</p>
                                <a class="btn btn-white al-animate-4" href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="single-partner-item" style={{backgroundImage:"url(/images/bannerimg/2.png)"}}>
                        {/* <img src="/images/bannerimg/5.png" alt="image" /> */}
                        <div class="row justify-content-center">
                        <div class="col-lg-6 col-md-9 order-lg-12 align-self-center">
                            <div class="thumb banner-animate-thumb pl-lg-5" style={{backgroundImage: "url('images/bannerimg/3.png')"}}>
                                <img src="images/bannerimg/1.png" alt="img"/>
                            </div>
                        </div>
                        <div class="col-lg-6 order-lg-1 mt-5 mt-lg-0 align-self-center">
                            <div class="banner-inner style-white text-center text-lg-left">
                                <h6 class="al-animate-1 sub-title">EDUCATION FOR EVERYONE</h6>
                                <h1 class="al-animate-2 title">Classical Education For The Future</h1>
                                <p class="al-animate-3">we believe everyone should have the opportunity to create progress through technology and develop the skills of tomorrow. assessments, learning</p>
                                <a class="btn btn-white al-animate-4" href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="single-partner-item" style={{backgroundImage:"url(/images/bannerimg/2.png)"}}>
                        {/* <img src="/images/bannerimg/5.png" alt="image" /> */}
                        <div class="row justify-content-center">
                        <div class="col-lg-6 col-md-9 order-lg-12 align-self-center">
                            <div class="thumb banner-animate-thumb pl-lg-5" style={{backgroundImage: "url('images/bannerimg/3.png')"}}>
                                <img src="images/bannerimg/1.png" alt="img"/>
                            </div>
                        </div>
                        <div class="col-lg-6 order-lg-1 mt-5 mt-lg-0 align-self-center">
                            <div class="banner-inner style-white text-center text-lg-left">
                                <h6 class="al-animate-1 sub-title">EDUCATION FOR EVERYONE</h6>
                                <h1 class="al-animate-2 title">Classical Education For The Future</h1>
                                <p class="al-animate-3">we believe everyone should have the opportunity to create progress through technology and develop the skills of tomorrow. assessments, learning</p>
                                <a class="btn btn-white al-animate-4" href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                    </div>

            
                </OwlCarousel> : ''}
                </div>
            </div>
        </div>
    )
}

export default Banner;