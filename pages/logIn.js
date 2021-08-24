import React, { useState } from 'react';
import NavbarTop from '../components/_App/NavbarTop';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import LoginForm from '../components/ProfileAuthentication/LoginForm';
import RegisterForm from '../components/ProfileAuthentication/RegisterForm';
import Footer from '../components/homepage/Footer';

const logIn = () => {
    
    return (
        <React.Fragment>
            <NavbarTop />
            <Navbar />

      
            <div style={{ background: "url(images/login_signup_bg.jpg)", backgroundPosition:"top", backgroundRepeat:'no-repeat', backgroundSize:"cover"}}>
                {/* <PageBanner
                    pageTitle="Profile Authentication"
                    homePageUrl="/"
                    homePageText="Home"
                    activePageText="Profile Authentication"
                /> */}

                <div className="profile-authentication-area ptb-100">
                          
                                <LoginForm />

                </div>
            </div>

             

            <Footer />
        </React.Fragment>
    )
}

export default logIn;