import React, { useState } from 'react';
import Link from 'next/link';
const RegisterForm = () => {

    return (
        <div className="container-fluid" style={{ height: "100vh" }}> 
            <div className="row" style={{ background: "linear-gradient(to right, rgb(40, 120, 235), rgb(241, 41, 201))", marginTop: "15rem", paddingTop: "50px", paddingBottom: "50px" }}>
                <div className="col-lg-4 col-md-12">
                    <div className="register-form">
                    <h2>Register to continue</h2>
                    <a class="default-btn loginbtn" href="/profile-authentication"><i class='bx bxl-facebook-circle'></i> Continue with Facebook <span></span></a>
                    <a class="default-btn loginbtn" href="/profile-authentication"><i class='bx bxl-google'></i> Continue with Google<i class="fa fa-google" aria-hidden="true"></i> <span></span></a>
                    <a class="default-btn loginbtn" href="/profile-authentication"><i class='bx bxl-apple' ></i> Continue with Apple <span></span></a>
                    <div style={{ display: " flex", margin: "2rem 0rem 2rem" }}><div className='loginformline'>  </div> <div className="loginformline_or"> or </div> <div className='loginformline'>  </div>

                    </div>
                        <form>
                            <div className="form-group">
                                {/* <label>Username</label> */}
                                <input type="text" className="form-control registerInput" placeholder="First Name" style={{float:"left", marginRight:"20px"}}/>
                            </div>
                            <div className="form-group">
                                {/* <label>Username</label> */}
                                <input type="text" className="form-control registerInput" placeholder="Last Name" />
                            </div>
                            <div className="form-group">
                                {/* <label>Email</label> */}
                                <input type="email" className="form-control" placeholder="Email address" />
                            </div>

                            <div className="form-group">
                                {/* <label>Password</label> */}
                                <input type="password" className="form-control" placeholder="Create password" />
                            </div>
                            <p style={{textAlign:"right"}}>  <Link href="/logIn">
                                    <a className="lost-your-password"> Go to LogIn</a>
                            </Link></p>
                            <button type="submit" class="default-btn" style={{background: "linear-gradient(to right, rgb(40, 120, 235), rgb(241, 41, 201))", color: "#fff"}}>Register</button>
                            <p className="description">The password should be at least eight characters long. To make it stronger, use upper and lower case letters, numbers, and symbols like ! " ? $ % ^ & )</p>
                         
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
                        {/* <button onClick={Gotologin} >Log In</button>  */}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm;