import React from 'react';
import Link from 'next/link';

const LoginForm = () => {
    
    return (
        <div className="container-fluid" style={{ height: "90vh" }}>
        <div className="row" style={{ background: "linear-gradient(to right, rgb(40, 120, 235), rgb(241, 41, 201))", marginTop: "10rem", paddingTop: "50px", paddingBottom: "50px" }}>
            <div className="col-lg-4 col-md-12">
                <div className="login-form">
                    <h2>Login to continue</h2>
                    <a class="default-btn loginbtn" href="/profile-authentication"><i class='bx bxl-facebook-circle'></i> Continue with Facebook <span></span></a>
                    <a class="default-btn loginbtn" href="/profile-authentication"><i class='bx bxl-google'></i> Continue with Google<i class="fa fa-google" aria-hidden="true"></i> <span></span></a>
                    <a class="default-btn loginbtn" href="/profile-authentication"><i class='bx bxl-apple' ></i> Continue with Apple <span></span></a>
                    <div style={{ display: " flex", margin: "2rem 0rem 2rem" }}><div className='loginformline'>  </div> <div className="loginformline_or"> or </div> <div className='loginformline'>  </div>

                    </div>


                    <form>
                        <div className="form-group">
                            {/* <label>Username or email</label> */}
                            <input type="text" className="form-control" placeholder="Username or email" />
                        </div>

                        <div className="form-group">
                            {/* <label>Password</label> */}
                            <input type="password" className="form-control" placeholder="Password" />
                        </div>

                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6 col-sm-6 remember-me-wrap">
                                <p>
                                    <input type="checkbox" id="test2" />
                                    <label htmlFor="test2">Remember me</label>
                                </p>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-6 lost-your-password-wrap">
                                {/* <Link href="#">
                                    <a className="lost-your-password">reset password?</a>
                                </Link> */}
                                <Link href="/signUp">
                                    <a className="lost-your-password">register</a>
                                </Link>
                            </div>
                        </div>

                        <button type="submit" class="default-btn" style={{background: "linear-gradient(to right, rgb(40, 120, 235), rgb(241, 41, 201))", color: "#fff"}}>Log In</button>
                    </form>
                </div>
            </div>
            <div className="col-lg-4 col-md-9 loginFormul" >
                <h3>Get 1 free month of Skillshare premium.</h3>
                <ul>
                    <li>Why</li>
                    <li>are</li>
                    <li>there</li>
                    <li>no</li>
                    <li>bulle</li>
                     
                </ul>
            </div>
        </div>
        </div>
    )
}

export default LoginForm;