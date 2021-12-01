import React from 'react'

const Testimonial = () => {
    return (
        <>

      <section style={{background: 'url(assets/img/testimonial.png)'}}>
        <div className="container">
            <div className="row justify-content-center">
            <div className="col-lg-5 col-md-6 col-sm-12">
                <div className="sec-heading center">
                <p>What People Say?</p>
                <h2><span className="theme-cl">Reviews</span> By Our Success &amp; Top Students</h2>
                </div>
            </div>
            </div>
            <div className="row">
            <div className="col-md-12">
                <div id="testimonials_style" className="slick-carousel-3 arrow_middle">
                <div className="testimonial-detail">
                    <div className="client-detail-box">
                    <div className="pic">
                        <img src="https://via.placeholder.com/500x500" alt />
                    </div>
                    <div className="client-detail">
                        <h3 className="testimonial-title">Adam Alloriam</h3>
                        <span className="post">Web Developer</span>
                    </div>
                    </div>
                    <p className="description">
                    " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi eligendi facilis itaque minus non odio, quaerat ullam eligendi facilis itaque minus non odio, quaerat ullam unde  unde voluptatum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi eligendi. "
                    </p>
                </div>
                <div className="testimonial-detail">
                    <div className="client-detail-box">
                    <div className="pic">
                        <img src="https://via.placeholder.com/500x500" alt />
                    </div>
                    <div className="client-detail">
                        <h3 className="testimonial-title">Illa Millia</h3>
                        <span className="post">Project Manager</span>
                    </div>
                    </div>
                    <p className="description">
                    " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi eligendi facilis itaque minus non odio, quaerat ullam unde voluptatum eligendi facilis itaque minus non odio, quaerat ullam unde  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi eligendi."
                    </p>
                </div>
                <div className="testimonial-detail">
                    <div className="client-detail-box">
                    <div className="pic">
                        <img src="https://via.placeholder.com/500x500" alt />
                    </div>
                    <div className="client-detail">
                        <h3 className="testimonial-title">Rout Millance</h3>
                        <span className="post">Web Designer</span>
                    </div>
                    </div>
                    <p className="description">
                    " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi eligendi facilis itaque minus non odio, quaerat ullam unde voluptatum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi eligendi."
                    </p>
                </div>
                <div className="testimonial-detail">
                    <div className="client-detail-box">
                    <div className="pic">
                        <img src="https://via.placeholder.com/500x500" alt />
                    </div>
                    <div className="client-detail">
                        <h3 className="testimonial-title">williamson</h3>
                        <span className="post">Web Developer</span>
                    </div>
                    </div>
                    <p className="description">
                    " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi eligendi facilis itaque minus non odio, quaerat ullam unde voluptatum eligendi facilis itaque minus non odio, quaerat ullam unde ? "
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
	 
        </>
    )
}

export default Testimonial
