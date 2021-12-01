import React from 'react'

const CourseHeader = () => {
    return (
        <>
        <div className="ed_detail_head lg bg-light">
        <div className="container">
            <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
                <div className="property_video lg">
                <div className="thumb">
                    <img className="pro_img img-fluid w100" src="https://via.placeholder.com/1920x650" alt="7.jpg" />
                    <div className="overlay_icon">
                    <div className="bb-video-box">
                        <div className="bb-video-box-inner">
                        <div className="bb-video-box-innerup">
                            <a href="https://www.youtube.com/watch?v=A8EI6JaFbv4" data-toggle="modal" data-target="#popup-video" className="theme-cl"><i className="ti-control-play" /></a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-6">
                <div className="ed_detail_wrap">
                <ul className="list_ed_detail2">
                    <li className="tag-2"><i className="ti-calendar" /><strong>Duration:</strong>10 - 25 Weeks</li>
                    <li className="tag-1"><i className="ti-user" /><strong>Enrolled:</strong>712 Students</li>
                    <li className="tag-3"><i className="ti-book" /><strong>Lectures:</strong>602 Lectures</li>
                    <li className="tag-4"><i className="ti-video-camera" /><strong>Videos:</strong>402 Videos</li>
                    <li className="tag-5"><i className="ti-tag" /><strong>Level:</strong>Advance</li>
                </ul>
                </div>
            </div>
            </div>
        </div>
        </div>


        </>
    )
}

export default CourseHeader
