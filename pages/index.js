import React from 'react';
import NavbarTop from '../components/_App/NavbarTop';
import Navbar from '../components/_App/Navbar';
import Baaner from '../components/homepage/Baaner';
import IntroSlider from '../components/homepage/IntroSlider';
import About from '../components/homepage/About';
import Course from '../components/homepage/Course';
import Counter from '../components/homepage/Counter';
import Video from '../components/homepage/Video';
import Whychooseus from '../components/homepage/Whychooseus';
import Pick_a_course from '../components/homepage/Pick_a_course';
import Testimonial from '../components/homepage/Testimonial';
import Team from '../components/homepage/Team';
import Blog from '../components/homepage/Blog';
import Footer2 from '../components/homepage/Footer';
import MainBanner from '../components/eLearningSchool/MainBanner';
import Partner from '../components/eLearningSchool/Partner';
import Features from '../components/eLearningSchool/Features';
import AboutUs from '../components/eLearningSchool/AboutUs';
import PopularCourses from '../components/eLearningSchool/PopularCourses';
import FeedbackSliderWithFunFacts from '../components/eLearningSchool/FeedbackSliderWithFunFacts';
import GetInstantCourses from '../components/eLearningSchool/GetInstantCourses';
import LatestNews from '../components/Common/LatestNews';
import ViewAllCourses from '../components/eLearningSchool/ViewAllCourses';
import AffordableCertification from '../components/eLearningSchool/AffordableCertification';
import Footer from '../components/_App/Footer';

const Index = () => {
    return (
        <React.Fragment>
            <NavbarTop/>
            <Navbar />
            <Baaner/>
            <IntroSlider/>
            <About/>
            <Course/>
            <Counter/>
            <Video/>
            <Whychooseus/>
            <Pick_a_course/>
            <Testimonial/>
            <Team/>
            <Blog/>
            <Footer2/>
{/* 
            <MainBanner />
            <Partner />
            <Features />
            <AboutUs />
            <PopularCourses />
            <FeedbackSliderWithFunFacts />
            <GetInstantCourses />
            <LatestNews />
            <ViewAllCourses />
            <AffordableCertification />
            <Footer /> */}
        </React.Fragment>
    )
}

export default Index;