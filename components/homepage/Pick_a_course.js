import React from 'react';

const Pick_a_course = () => {
    return (
        <>
            <div className="course-area bg-overlay pd-top-115 pd-bottom-90 jarallax" style={{ backgroundImage: "url('images/bg/1.png');" }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10 col-md-11">
                            <div className="section-title style-white text-center">
                                <h5 className="sub-title">Browse Categories</h5>
                                <h2 className="title">Pick a Course to Get StBtn1ed</h2>
                            </div>
                        </div>
                    </div>
                    <div className="lxyz-nav-tab style-white text-center">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="tab1-tab" Btn1-toggle="tab" href="#tab1" role="tab" aria-controls="tab1" aria-selected="true">All Courses</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="tab2-tab" Btn1-toggle="tab" href="#tab2" role="tab" aria-controls="tab2" aria-selected="false">Btn1 Science & Analytics</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="tab3-tab" Btn1-toggle="tab" href="#tab3" role="tab" aria-controls="tab3" aria-selected="false">Computer Science</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="tab4-tab" Btn1-toggle="tab" href="#tab4" role="tab" aria-controls="tab4" aria-selected="false">Foreign Language</a>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-course-inner">
                                        <div className="thumb">
                                            <img src="images/course/1.png" alt="img"/>
                                                <div className="cat-area">
                                            <a className="cat-yellow" href="#">Btn1</a>
                                            <a className="cat-green" href="#">Btn2</a>
                                        </div>
                                    </div>
                                    <div className="details">
                                        <h5><a href="#">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</a></h5>
                                        <div className="meta">
                                            <div className="row">
                                                <div className="col-6 align-self-center">
                                                    <span><i className="fa fa-clock-o"></i>12 Week</span>
                                                </div>
                                                <div className="col-6 align-self-center">
                                                    <div className="rating-inner text-right">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btn-area">
                                            <div className="row">
                                                <div className="col-6 align-self-center">
                                                    <span className="price">$250.00</span>
                                                </div>
                                                <div className="col-6 align-self-center text-right">
                                                    <a className="btn btn-border-base b-animate-3" href="#">Details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-course-inner">
                                    <div className="thumb">
                                        <img src="images/course/2.png" alt="img" />
                                        <div className="cat-area">
                                            <a className="cat-yellow" href="#">Btn1</a>
                                            <a className="cat-green" href="#">Btn2</a>
                                        </div>
                                    </div>
                                    <div className="details">
                                        <h5><a href="#">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</a></h5>
                                        <div className="meta">
                                            <div className="row">
                                                <div className="col-6 align-self-center">
                                                    <span><i className="fa fa-clock-o"></i>12 Week</span>
                                                </div>
                                                <div className="col-6 align-self-center">
                                                    <div className="rating-inner text-right">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btn-area">
                                            <div className="row">
                                                <div className="col-6 align-self-center">
                                                    <span className="price">$150.00</span>
                                                </div>
                                                <div className="col-6 align-self-center text-right">
                                                    <a className="btn btn-border-base b-animate-3" href="#">Details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-course-inner">
                                    <div className="thumb">
                                        <img src="images/course/3.png" alt="img" />
                                        <div className="cat-area">
                                            <a className="cat-yellow" href="#">Btn1</a>
                                            <a className="cat-green" href="#">Btn2</a>
                                        </div>
                                    </div>
                                    <div className="details">
                                        <h5><a href="#">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</a></h5>
                                        <div className="meta">
                                            <div className="row">
                                                <div className="col-6 align-self-center">
                                                    <span><i className="fa fa-clock-o"></i>11 Week</span>
                                                </div>
                                                <div className="col-6 align-self-center">
                                                    <div className="rating-inner text-right">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btn-area">
                                            <div className="row">
                                                <div className="col-6 align-self-center">
                                                    <span className="price">$350.00</span>
                                                </div>
                                                <div className="col-6 align-self-center text-right">
                                                    <a className="btn btn-border-base b-animate-3" href="#">Details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-course-inner">
                                    <div className="thumb">
                                        <img src="images/course/4.png" alt="img" />
                                        <div className="cat-area">
                                        <a className="cat-yellow" href="#">Btn1</a>
                                            <a className="cat-green" href="#">Btn2</a>
                                           
                                        </div>
                                    </div>
                                    <div className="details">
                                        <h5><a href="#">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</a></h5>
                                        <div className="meta">
                                            <div className="row">
                                                <div className="col-6 align-self-center">
                                                    <span><i className="fa fa-clock-o"></i>12 Week</span>
                                                </div>
                                                <div className="col-6 align-self-center">
                                                    <div className="rating-inner text-right">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btn-area">
                                            <div className="row">
                                                <div className="col-6 align-self-center">
                                                    <span className="price">$250.00</span>
                                                </div>
                                                <div className="col-6 align-self-center text-right">
                                                    <a className="btn btn-border-base b-animate-3" href="#">Details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-course-inner">
                                    <div className="thumb">
                                        <img src="images/course/5.png" alt="img" />
                                        <div className="cat-area">
                                            <a className="cat-yellow" href="#">Btn1</a>
                                            <a className="cat-green" href="#">Btn2</a>
                                        </div>
                                    </div>
                                    <div className="details">
                                        <h5><a href="#">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</a></h5>
                                        <div className="meta">
                                            <div className="row">
                                                <div className="col-6 align-self-center">
                                                    <span><i className="fa fa-clock-o"></i>12 Week</span>
                                                </div>
                                                <div className="col-6 align-self-center">
                                                    <div className="rating-inner text-right">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btn-area">
                                            <div className="row">
                                                <div className="col-6 align-self-center">
                                                    <span className="price">$50.00</span>
                                                </div>
                                                <div className="col-6 align-self-center text-right">
                                                    <a className="btn btn-border-base b-animate-3" href="#">Details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-course-inner">
                                    <div className="thumb">
                                        <img src="images/course/6.png" alt="img" />
                                        <div className="cat-area">
                                            <a className="cat-yellow" href="#">Btn1</a>
                                            <a className="cat-green" href="#">Btn2</a>
                                        </div>
                                    </div>
                                    <div className="details">
                                        <h5><a href="#">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</a></h5>
                                        <div className="meta">
                                            <div className="row">
                                                <div className="col-6 align-self-center">
                                                    <span><i className="fa fa-clock-o"></i>12 Week</span>
                                                </div>
                                                <div className="col-6 align-self-center">
                                                    <div className="rating-inner text-right">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btn-area">
                                            <div className="row">
                                                <div className="col-6 align-self-center">
                                                    <span className="price">$250.00</span>
                                                </div>
                                                <div className="col-6 align-self-center text-right">
                                                    <a className="btn btn-border-base b-animate-3" href="#">Details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="tab2-tab">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-course-inner">
                                    <div className="thumb">
                                        <img src="images/course/4.png" alt="img" />
                                        <div className="cat-area">
                                            <a className="cat-green" href="#">Btn1</a>
                                            <a className="cat-yellow" href="#">Java</a>
                                        </div>
                                    </div>
                                    <div className="details">
                                        <h5><a href="#">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</a></h5>
                                        <div className="meta">
                                            <div className="row">
                                                <div className="col-6 align-self-center">
                                                    <span><i className="fa fa-clock-o"></i>12 Week</span>
                                                </div>
                                                <div className="col-6 align-self-center">
                                                    <div className="rating-inner text-right">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btn-area">
                                            <div className="row">
                                                <div className="col-6 align-self-center">
                                                    <span className="price">$250.00</span>
                                                </div>
                                                <div className="col-6 align-self-center text-right">
                                                    <a className="btn btn-border-base b-animate-3" href="#">Details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-course-inner">
                                    <div className="thumb">
                                        <img src="images/course/5.png" alt="img" />
                                        <div className="cat-area">
                                            <a className="cat-yellow" href="#">Btn1</a>
                                            <a className="cat-green" href="#">Btn2</a>
                                        </div>
                                    </div>
                                    <div className="details">
                                        <h5><a href="#">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</a></h5>
                                        <div className="meta">
                                            <div className="row">
                                                <div className="col-6 align-self-center">
                                                    <span><i className="fa fa-clock-o"></i>12 Week</span>
                                                </div>
                                                <div className="col-6 align-self-center">
                                                    <div className="rating-inner text-right">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btn-area">
                                            <div className="row">
                                                <div className="col-6 align-self-center">
                                                    <span className="price">$50.00</span>
                                                </div>
                                                <div className="col-6 align-self-center text-right">
                                                    <a className="btn btn-border-base b-animate-3" href="#">Details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-course-inner">
                                    <div className="thumb">
                                        <img src="images/course/6.png" alt="img" />
                                        <div className="cat-area">
                                            <a className="cat-yellow" href="#">Btn1</a>
                                            <a className="cat-green" href="#">Btn2</a>
                                        </div>
                                    </div>
                                    <div className="details">
                                        <h5><a href="#">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</a></h5>
                                        <div className="meta">
                                            <div className="row">
                                                <div className="col-6 align-self-center">
                                                    <span><i className="fa fa-clock-o"></i>12 Week</span>
                                                </div>
                                                <div className="col-6 align-self-center">
                                                    <div className="rating-inner text-right">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btn-area">
                                            <div className="row">
                                                <div className="col-6 align-self-center">
                                                    <span className="price">$250.00</span>
                                                </div>
                                                <div className="col-6 align-self-center text-right">
                                                    <a className="btn btn-border-base b-animate-3" href="#">Details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-course-inner">
                                    <div className="thumb">
                                        <img src="images/course/1.png" alt="img" />
                                        <div className="cat-area">
                                            <a className="cat-yellow" href="#">Btn1</a>
                                            <a className="cat-green" href="#">Btn2</a>
                                        </div>
                                    </div>
                                    <div className="details">
                                        <h5><a href="#">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</a></h5>
                                        <div className="meta">
                                            <div className="row">
                                                <div className="col-6 align-self-center">
                                                    <span><i className="fa fa-clock-o"></i>12 Week</span>
                                                </div>
                                                <div className="col-6 align-self-center">
                                                    <div className="rating-inner text-right">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btn-area">
                                            <div className="row">
                                                <div className="col-6 align-self-center">
                                                    <span className="price">$250.00</span>
                                                </div>
                                                <div className="col-6 align-self-center text-right">
                                                    <a className="btn btn-border-base b-animate-3" href="#">Details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-course-inner">
                                    <div className="thumb">
                                        <img src="images/course/2.png" alt="img" />
                                        <div className="cat-area">
                                            <a className="cat-yellow" href="#">Btn1</a>
                                            <a className="cat-green" href="#">Btn2</a>
                                        </div>
                                    </div>
                                    <div className="details">
                                        <h5><a href="#">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</a></h5>
                                        <div className="meta">
                                            <div className="row">
                                                <div className="col-6 align-self-center">
                                                    <span><i className="fa fa-clock-o"></i>12 Week</span>
                                                </div>
                                                <div className="col-6 align-self-center">
                                                    <div className="rating-inner text-right">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btn-area">
                                            <div className="row">
                                                <div className="col-6 align-self-center">
                                                    <span className="price">$150.00</span>
                                                </div>
                                                <div className="col-6 align-self-center text-right">
                                                    <a className="btn btn-border-base b-animate-3" href="#">Details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-course-inner">
                                    <div className="thumb">
                                        <img src="images/course/3.png" alt="img" />
                                        <div className="cat-area">
                                            <a className="cat-yellow" href="#">Btn1</a>
                                            <a className="cat-green" href="#">Btn2</a>
                                        </div>
                                    </div>
                                    <div className="details">
                                        <h5><a href="#">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</a></h5>
                                        <div className="meta">
                                            <div className="row">
                                                <div className="col-6 align-self-center">
                                                    <span><i className="fa fa-clock-o"></i>11 Week</span>
                                                </div>
                                                <div className="col-6 align-self-center">
                                                    <div className="rating-inner text-right">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btn-area">
                                            <div className="row">
                                                <div className="col-6 align-self-center">
                                                    <span className="price">$350.00</span>
                                                </div>
                                                <div className="col-6 align-self-center text-right">
                                                    <a className="btn btn-border-base b-animate-3" href="#">Details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="tab3-tab">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-course-inner">
                                    <div className="thumb">
                                        <img src="images/course/6.png" alt="img" />
                                        <div className="cat-area">
                                            <a className="cat-yellow" href="#">Btn1</a>
                                            <a className="cat-green" href="#">Btn2</a>
                                        </div>
                                    </div>
                                    <div className="details">
                                        <h5><a href="#">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</a></h5>
                                        <div className="meta">
                                            <div className="row">
                                                <div className="col-6 align-self-center">
                                                    <span><i className="fa fa-clock-o"></i>12 Week</span>
                                                </div>
                                                <div className="col-6 align-self-center">
                                                    <div className="rating-inner text-right">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btn-area">
                                            <div className="row">
                                                <div className="col-6 align-self-center">
                                                    <span className="price">$250.00</span>
                                                </div>
                                                <div className="col-6 align-self-center text-right">
                                                    <a className="btn btn-border-base b-animate-3" href="#">Details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-course-inner">
                                    <div className="thumb">
                                        <img src="images/course/5.png" alt="img" />
                                        <div className="cat-area">
                                            <a className="cat-yellow" href="#">Btn1</a>
                                            <a className="cat-green" href="#">Btn2</a>
                                        </div>
                                    </div>
                                    <div className="details">
                                        <h5><a href="#">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</a></h5>
                                        <div className="meta">
                                            <div className="row">
                                                <div className="col-6 align-self-center">
                                                    <span><i className="fa fa-clock-o"></i>12 Week</span>
                                                </div>
                                                <div className="col-6 align-self-center">
                                                    <div className="rating-inner text-right">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btn-area">
                                            <div className="row">
                                                <div className="col-6 align-self-center">
                                                    <span className="price">$50.00</span>
                                                </div>
                                                <div className="col-6 align-self-center text-right">
                                                    <a className="btn btn-border-base b-animate-3" href="#">Details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-course-inner">
                                    <div className="thumb">
                                        <img src="images/course/2.png" alt="img" />
                                        <div className="cat-area">
                                            <a className="cat-yellow" href="#">Btn1</a>
                                            <a className="cat-green" href="#">Btn2</a>
                                        </div>
                                    </div>
                                    <div className="details">
                                        <h5><a href="#">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</a></h5>
                                        <div className="meta">
                                            <div className="row">
                                                <div className="col-6 align-self-center">
                                                    <span><i className="fa fa-clock-o"></i>12 Week</span>
                                                </div>
                                                <div className="col-6 align-self-center">
                                                    <div className="rating-inner text-right">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btn-area">
                                            <div className="row">
                                                <div className="col-6 align-self-center">
                                                    <span className="price">$150.00</span>
                                                </div>
                                                <div className="col-6 align-self-center text-right">
                                                    <a className="btn btn-border-base b-animate-3" href="#">Details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-course-inner">
                                    <div className="thumb">
                                        <img src="images/course/3.png" alt="img" />
                                        <div className="cat-area">
                                            <a className="cat-yellow" href="#">Btn1</a>
                                            <a className="cat-green" href="#">Btn2</a>
                                        </div>
                                    </div>
                                    <div className="details">
                                        <h5><a href="#">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</a></h5>
                                        <div className="meta">
                                            <div className="row">
                                                <div className="col-6 align-self-center">
                                                    <span><i className="fa fa-clock-o"></i>11 Week</span>
                                                </div>
                                                <div className="col-6 align-self-center">
                                                    <div className="rating-inner text-right">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btn-area">
                                            <div className="row">
                                                <div className="col-6 align-self-center">
                                                    <span className="price">$350.00</span>
                                                </div>
                                                <div className="col-6 align-self-center text-right">
                                                    <a className="btn btn-border-base b-animate-3" href="#">Details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-course-inner">
                                    <div className="thumb">
                                        <img src="images/course/4.png" alt="img" />
                                        <div className="cat-area">
                                            <a className="cat-green" href="#">Btn1</a>
                                            <a className="cat-yellow" href="#">Java</a>
                                        </div>
                                    </div>
                                    <div className="details">
                                        <h5><a href="#">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</a></h5>
                                        <div className="meta">
                                            <div className="row">
                                                <div className="col-6 align-self-center">
                                                    <span><i className="fa fa-clock-o"></i>12 Week</span>
                                                </div>
                                                <div className="col-6 align-self-center">
                                                    <div className="rating-inner text-right">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btn-area">
                                            <div className="row">
                                                <div className="col-6 align-self-center">
                                                    <span className="price">$250.00</span>
                                                </div>
                                                <div className="col-6 align-self-center text-right">
                                                    <a className="btn btn-border-base b-animate-3" href="#">Details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-course-inner">
                                    <div className="thumb">
                                        <img src="images/course/1.png" alt="img" />
                                        <div className="cat-area">
                                            <a className="cat-yellow" href="#">Btn1</a>
                                            <a className="cat-green" href="#">Btn2</a>
                                        </div>
                                    </div>
                                    <div className="details">
                                        <h5><a href="#">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</a></h5>
                                        <div className="meta">
                                            <div className="row">
                                                <div className="col-6 align-self-center">
                                                    <span><i className="fa fa-clock-o"></i>12 Week</span>
                                                </div>
                                                <div className="col-6 align-self-center">
                                                    <div className="rating-inner text-right">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btn-area">
                                            <div className="row">
                                                <div className="col-6 align-self-center">
                                                    <span className="price">$250.00</span>
                                                </div>
                                                <div className="col-6 align-self-center text-right">
                                                    <a className="btn btn-border-base b-animate-3" href="#">Details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="tab4" role="tabpanel" aria-labelledby="tab4-tab">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-course-inner">
                                    <div className="thumb">
                                        <img src="images/course/3.png" alt="img" />
                                        <div className="cat-area">
                                            <a className="cat-yellow" href="#">Btn1</a>
                                            <a className="cat-green" href="#">Btn2</a>
                                        </div>
                                    </div>
                                    <div className="details">
                                        <h5><a href="#">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</a></h5>
                                        <div className="meta">
                                            <div className="row">
                                                <div className="col-6 align-self-center">
                                                    <span><i className="fa fa-clock-o"></i>11 Week</span>
                                                </div>
                                                <div className="col-6 align-self-center">
                                                    <div className="rating-inner text-right">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btn-area">
                                            <div className="row">
                                                <div className="col-6 align-self-center">
                                                    <span className="price">$350.00</span>
                                                </div>
                                                <div className="col-6 align-self-center text-right">
                                                    <a className="btn btn-border-base b-animate-3" href="#">Details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-course-inner">
                                    <div className="thumb">
                                        <img src="images/course/4.png" alt="img" />
                                        <div className="cat-area">
                                            <a className="cat-green" href="#">Btn1</a>
                                            <a className="cat-yellow" href="#">Java</a>
                                        </div>
                                    </div>
                                    <div className="details">
                                        <h5><a href="#">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</a></h5>
                                        <div className="meta">
                                            <div className="row">
                                                <div className="col-6 align-self-center">
                                                    <span><i className="fa fa-clock-o"></i>12 Week</span>
                                                </div>
                                                <div className="col-6 align-self-center">
                                                    <div className="rating-inner text-right">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btn-area">
                                            <div className="row">
                                                <div className="col-6 align-self-center">
                                                    <span className="price">$250.00</span>
                                                </div>
                                                <div className="col-6 align-self-center text-right">
                                                    <a className="btn btn-border-base b-animate-3" href="#">Details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-course-inner">
                                    <div className="thumb">
                                        <img src="images/course/5.png" alt="img" />
                                        <div className="cat-area">
                                            <a className="cat-yellow" href="#">Btn1</a>
                                            <a className="cat-green" href="#">Btn2</a>
                                        </div>
                                    </div>
                                    <div className="details">
                                        <h5><a href="#">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</a></h5>
                                        <div className="meta">
                                            <div className="row">
                                                <div className="col-6 align-self-center">
                                                    <span><i className="fa fa-clock-o"></i>12 Week</span>
                                                </div>
                                                <div className="col-6 align-self-center">
                                                    <div className="rating-inner text-right">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btn-area">
                                            <div className="row">
                                                <div className="col-6 align-self-center">
                                                    <span className="price">$50.00</span>
                                                </div>
                                                <div className="col-6 align-self-center text-right">
                                                    <a className="btn btn-border-base b-animate-3" href="#">Details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-course-inner">
                                    <div className="thumb">
                                        <img src="images/course/1.png" alt="img" />
                                        <div className="cat-area">
                                            <a className="cat-yellow" href="#">Btn1</a>
                                            <a className="cat-green" href="#">Btn2</a>
                                        </div>
                                    </div>
                                    <div className="details">
                                        <h5><a href="#">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</a></h5>
                                        <div className="meta">
                                            <div className="row">
                                                <div className="col-6 align-self-center">
                                                    <span><i className="fa fa-clock-o"></i>12 Week</span>
                                                </div>
                                                <div className="col-6 align-self-center">
                                                    <div className="rating-inner text-right">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btn-area">
                                            <div className="row">
                                                <div className="col-6 align-self-center">
                                                    <span className="price">$250.00</span>
                                                </div>
                                                <div className="col-6 align-self-center text-right">
                                                    <a className="btn btn-border-base b-animate-3" href="#">Details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-course-inner">
                                    <div className="thumb">
                                        <img src="images/course/2.png" alt="img" />
                                        <div className="cat-area">
                                            <a className="cat-yellow" href="#">Btn1</a>
                                            <a className="cat-green" href="#">Btn2</a>
                                        </div>
                                    </div>
                                    <div className="details">
                                        <h5><a href="#">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</a></h5>
                                        <div className="meta">
                                            <div className="row">
                                                <div className="col-6 align-self-center">
                                                    <span><i className="fa fa-clock-o"></i>12 Week</span>
                                                </div>
                                                <div className="col-6 align-self-center">
                                                    <div className="rating-inner text-right">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btn-area">
                                            <div className="row">
                                                <div className="col-6 align-self-center">
                                                    <span className="price">$150.00</span>
                                                </div>
                                                <div className="col-6 align-self-center text-right">
                                                    <a className="btn btn-border-base b-animate-3" href="#">Details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-course-inner">
                                    <div className="thumb">
                                        <img src="images/course/6.png" alt="img" />
                                        <div className="cat-area">
                                            <a className="cat-yellow" href="#">Btn1</a>
                                            <a className="cat-green" href="#">Btn2</a>
                                        </div>
                                    </div>
                                    <div className="details">
                                        <h5><a href="#">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</a></h5>
                                        <div className="meta">
                                            <div className="row">
                                                <div className="col-6 align-self-center">
                                                    <span><i className="fa fa-clock-o"></i>12 Week</span>
                                                </div>
                                                <div className="col-6 align-self-center">
                                                    <div className="rating-inner text-right">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btn-area">
                                            <div className="row">
                                                <div className="col-6 align-self-center">
                                                    <span className="price">$250.00</span>
                                                </div>
                                                <div className="col-6 align-self-center text-right">
                                                    <a className="btn btn-border-base b-animate-3" href="#">Details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
                                                                                                        );
};

export default Pick_a_course;