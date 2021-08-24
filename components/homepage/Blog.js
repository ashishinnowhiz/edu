import React from 'react';

const Blog = () => {
    return (
        <>
            <div className="blog-area pd-top-115 pd-bottom-90">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-7 col-md-11">
                    <div className="section-title text-center">
                        <h5 className="sub-title">Latest News</h5>
                        <h2 className="title">University Latest Blog </h2>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="single-blog-inner">
                        <div className="thumb">
                            <img src="images/Bloghome/1.png" alt="img"/>
                        </div>
                        <div className="details">
                            <h4><a href="single-blog.html">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</a></h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the
                            1500s, when an unknown printer took a galley of type and scrambled it to
                            make a type specimen book.</p>
                            <div className="blog-meta">
                                <ul>
                                    <li className="author">Posted by: Global Education Platform</li>
                                    <li>25 Jan, 2021</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="single-blog-inner">
                        <div className="thumb">
                            <img src="images/Bloghome/2.png" alt="img"/>
                        </div>
                        <div className="details">
                            <h4><a href="">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</a></h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the
                            1500s, when an unknown printer took a galley of type and scrambled it to
                            make a type specimen book.</p>
                            <div className="blog-meta">
                                <ul>
                                    <li className="author">Posted by: Global Education Platform</li>
                                    <li>25 Jan, 2021</li>
                                </ul>
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

export default Blog;