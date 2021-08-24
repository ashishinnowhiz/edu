import React from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';

const Video = () => {
    // Popup Video
    const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }
    return (
        <React.Fragment>

            <div class="video-area bg-overlay-rgba pd-top-110 pd-bottom-120 jarallax" style={{ backgroundImage: "url('assets/img/other/1.png');" }}>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-8 col-lg-10">
                            <div class="section-title mb-2 text-center">
                                <h2 class="title">Watch Campus Life Video Tour</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                                {/* <a class="video-play-btn" href="https://www.youtube.com/embed/Wimkqo8gDZ0" data-effect="mfp-zoom-in"><i class="fa fa-play"></i></a> */}
                                <div className="video-box">


                                    <Link href="#play-video">
                                        <a class="video-play-btn" onClick={e => { e.preventDefault(); openModal() }}
                                            data-effect="mfp-zoom-in"> <i className="flaticon-play"></i></a>

                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* If you want to change the video need to update videoID */}
            <ModalVideo
                channel='youtube'
                isOpen={!isOpen}
                videoId='bk7McNUjWgw'
                onClose={() => setIsOpen(!isOpen)}
            />
        </React.Fragment>
    )
}

export default Video;