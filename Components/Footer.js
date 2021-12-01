import React from 'react'

const Footer = () => {
    return (
        <>
       <section className="newsletter theme-bg inverse-theme">
        <div className="container">
            <div className="row justify-content-center">
            <div className="col-lg-7 col-md-8 col-sm-12">
                <div className="text-center">
                <h2>Join to Get Regular Update</h2>
                <p>Subscribe with us</p>
                <form className="sup-form">
                    <input type="email" className="form-control sigmup-me" placeholder="Your Email Address" required="required" />
                    <input type="submit" className="btn btn-theme" defaultValue="Get Started" />
                </form>
                </div>
            </div>
            </div>
        </div>
        </section>

        <footer className="dark-footer skin-dark-footer">
            <div>
            <div className="container">
                <div className="row">
                <div className="col-lg-3 col-md-3">
                    <div className="footer-widget">
                    <img src="assets/img/logo-light.png" className="img-footer" alt />
                    <div className="footer-add">
                        <p>4967  Sardis Sta, Victoria 8007, Montreal.</p>
                        <p>+1 246-345-0695</p>
                        <p>info@learnup.com</p>
                    </div>
                    </div>
                </div>		
                <div className="col-lg-2 col-md-3">
                    <div className="footer-widget">
                    <h4 className="widget-title">Navigations</h4>
                    <ul className="footer-menu">
                        <li><a href="about-us.html">About Us</a></li>
                        <li><a href="faq.html">FAQs Page</a></li>
                        <li><a href="checkout.html">Checkout</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="blog.html">Blog</a></li>
                    </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-md-3">
                    <div className="footer-widget">
                    <h4 className="widget-title">New Categories</h4>
                    <ul className="footer-menu">
                        <li><a href="#">Designing</a></li>
                        <li><a href="#">Nusiness</a></li>
                        <li><a href="#">Software</a></li>
                        <li><a href="#">WordPress</a></li>
                        <li><a href="#">PHP</a></li>
                    </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-md-3">
                    <div className="footer-widget">
                    <h4 className="widget-title">Help &amp; Support</h4>
                    <ul className="footer-menu">
                        <li><a href="#">Documentation</a></li>
                        <li><a href="#">Live Chat</a></li>
                        <li><a href="#">Mail Us</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Faqs</a></li>
                    </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-12">
                    <div className="footer-widget">
                    <h4 className="widget-title">Download Apps</h4>
                    <a href="#" className="other-store-link">
                        <div className="other-store-app">
                        <div className="os-app-icon">
                            <i className="lni-playstore theme-cl" />
                        </div>
                        <div className="os-app-caps">
                            Google Play
                            <span>Get It Now</span>
                        </div>
                        </div>
                    </a>
                    <a href="#" className="other-store-link">
                        <div className="other-store-app">
                        <div className="os-app-icon">
                            <i className="lni-apple theme-cl" />
                        </div>
                        <div className="os-app-caps">
                            App Store
                            <span>Now it Available</span>
                        </div>
                        </div>
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="footer-bottom">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                    <p className="mb-0">© 2020 LearnUp. Designd By <a href="https://themezhub.com">Themezhub</a>.</p>
                </div>
                <div className="col-lg-6 col-md-6 text-right">
                    <ul className="footer-bottom-social">
                    <li><a href="#"><i className="ti-facebook" /></a></li>
                    <li><a href="#"><i className="ti-twitter" /></a></li>
                    <li><a href="#"><i className="ti-instagram" /></a></li>
                    <li><a href="#"><i className="ti-linkedin" /></a></li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </footer>
        <div className="modal fade" id="login" tabIndex={-1} role="dialog" aria-labelledby="registermodal" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered login-pop-form" role="document">
            <div className="modal-content" id="registermodal">
                <span className="mod-close" data-dismiss="modal" aria-hidden="true"><i className="ti-close" /></span>
                <div className="modal-body">
                <h4 className="modal-header-title">Log In</h4>
                <div className="login-form">
                    <form>
                    <div className="form-group">
                        <label>User Name</label>
                        <input type="text" className="form-control" placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="*******" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-md full-width pop-login">Login</button>
                    </div>
                    </form>
                </div>
                <div className="social-login mb-3">
                    <ul>
                    <li>
                        <input id="reg" className="checkbox-custom" name="reg" type="checkbox" />
                        <label htmlFor="reg" className="checkbox-custom-label">Save Password</label>
                    </li>
                    <li className="right"><a href="#" className="theme-cl">Forget Password?</a></li>
                    </ul>
                </div>
                <div className="modal-divider"><span>Or login via</span></div>
                <div className="social-login ntr mb-3">
                    <ul>
                    <li><a href="#" className="btn connect-fb"><i className="ti-facebook" />Facebook</a></li>
                    <li><a href="#" className="btn connect-google"><i className="ti-google" />Google</a></li>
                    </ul>
                </div>
                <div className="text-center">
                    <p className="mt-2">Haven't Any Account? <a href="register.html" className="link">Click here</a></p>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="modal fade" id="signup" tabIndex={-1} role="dialog" aria-labelledby="sign-up" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered login-pop-form" role="document">
            <div className="modal-content" id="sign-up">
                <span className="mod-close" data-dismiss="modal" aria-hidden="true"><i className="ti-close" /></span>
                <div className="modal-body">
                <h4 className="modal-header-title">Sign Up</h4>
                <div className="login-form">
                    <form>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Full Name" />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="*******" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-md full-width pop-login">Sign Up</button>
                    </div>
                    </form>
                </div>
                <div className="modal-divider"><span>Or Signup via</span></div>
                <div className="social-login ntr mb-3">
                    <ul>
                    <li><a href="#" className="btn connect-fb"><i className="ti-facebook" />Facebook</a></li>
                    <li><a href="#" className="btn connect-google"><i className="ti-google" />Google</a></li>
                    </ul>
                </div>
                <div className="text-center">
                    <p className="mt-3"><i className="ti-user mr-1" />Already Have An Account? <a href="#" className="link">Go For LogIn</a></p>
                </div>
                </div>
            </div>
            </div>
        </div>

        </>
    )
}

export default Footer
