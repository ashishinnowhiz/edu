import React from 'react';

const Counter = () => {
    return (
        <>
            <div class="counter-area pd-top-115 pd-bottom-90">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-6 col-lg-7 col-md-11">
                    <div class="section-title text-center">
                        <h5 class="sub-title">Funfact</h5>
                        <h2 class="title">Strength in Numbers</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3 col-sm-6">
                    <div class="single-counter-inner text-center">
                        <div class="details">
                            <h2><span class="counter">230</span> k</h2>
                            <p>Downloaded</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="single-counter-inner text-center">
                        <div class="details">
                            <h2><span class="counter">40</span> k</h2>
                            <p>Feedback</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="single-counter-inner text-center">
                        <div class="details">
                            <h2><span class="counter">600</span> k</h2>
                            <p>Worker</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="single-counter-inner text-center">
                        <div class="details">
                            <h2><span class="counter">230</span> k</h2>
                            <p>Contributors</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    );
};

export default Counter;