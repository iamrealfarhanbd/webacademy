import React from 'react'

const About = () => {
    return (
        <>
        <section className="pt-0">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="list_facts_wrap">
                <div className="sec-heading mb-3">
                    <h2>Web Academy <span className="theme-cl">Facilities</span> </h2>
                </div>
                <div className="list_facts">
                    <div className="list_facts_icons"><i className="ti-desktop" /></div>
                    <div className="list_facts_caption">
                    <h4>Learn from Full Stack Designer: Get trained by the expert web designers</h4>
                    <p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure</p>
                    </div>
                </div>
                <div className="list_facts">
                    <div className="list_facts_icons"><i className="ti-heart" /></div>
                    <div className="list_facts_caption">
                    <h4>Learn by Doing: Take the opportunity to learn &amp; create simultaneously</h4>
                    <p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure</p>
                    </div>
                </div>
                <div className="list_facts">
                    <div className="list_facts_icons"><i className="ti-harddrives" /></div>
                    <div className="list_facts_caption">
                    <h4>Learning awards and rewards: Get certified online after completing any course</h4>
                    <p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure</p>
                    </div>
                </div>
                </div>
                <a href="#" className="btn btn-modern">Know More<span><i className="ti-arrow-right" /></span></a>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="list_facts_wrap_img">
                <img src="https://via.placeholder.com/550x490" className="img-fluid" alt />
                </div>
              </div>
            </div>
          </div>
        </section>

        </>
    )
}

export default About
