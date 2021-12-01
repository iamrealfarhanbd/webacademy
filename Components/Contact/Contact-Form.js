import React from 'react'

const ContactForm = () => {
    return (
        <>
        <section className="bg-light">
         <div className="container">
            <div className="row">
            <div className="col-lg-8 col-md-7">
                <div className="prc_wrap">
                <div className="prc_wrap_header">
                    <h4 className="property_block_title">Fillup The Form</h4>
                </div>
                <div className="prc_wrap-body">
                    <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control simple" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control simple" />
                        </div>
                    </div>
                    </div>
                    <div className="form-group">
                    <label>Subject</label>
                    <input type="text" className="form-control simple" />
                    </div>
                    <div className="form-group">
                    <label>Message</label>
                    <textarea className="form-control simple" defaultValue={""} />
                    </div>
                    <div className="form-group">
                    <button className="btn btn-theme" type="submit">Submit Request</button>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-5">
                <div className="prc_wrap">
                <div className="prc_wrap_header">
                    <h4 className="property_block_title">Reach Us</h4>
                </div>
                <div className="prc_wrap-body">
                    <div className="contact-info">
                    <h2>Get In Touch</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
                    <div className="cn-info-detail">
                        <div className="cn-info-icon">
                        <i className="ti-home" />
                        </div>
                        <div className="cn-info-content">
                        <h4 className="cn-info-title">Reach Us</h4>
                        2512, New Market,<br />Eliza Road, Sincher 80 CA,<br />Canada, USA
                        </div>
                    </div>
                    <div className="cn-info-detail">
                        <div className="cn-info-icon">
                        <i className="ti-email" />
                        </div>
                        <div className="cn-info-content">
                        <h4 className="cn-info-title">Drop A Mail</h4>
                        support@Rikada.com<br />Rikada@gmail.com
                        </div>
                    </div>
                    <div className="cn-info-detail">
                        <div className="cn-info-icon">
                        <i className="ti-mobile" />
                        </div>
                        <div className="cn-info-content">
                        <h4 className="cn-info-title">Call Us</h4>
                        (41) 123 521 458<br />+91 235 548 7548
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>	
        </div>
        </section>

        </>
    )
}

export default ContactForm;
