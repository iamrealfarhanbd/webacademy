import React from 'react'
import SingleCourseAside from './Single-Course-Aside'

const SingleCourse = () => {
    return (
        <>
        <section>
        <div className="container">
            <div className="row">
            <div className="col-lg-8 col-md-8">
                {/* Overview */}
                <div className="edu_wraper border">
                <h4 className="edu_title">Course Overview</h4>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>		
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                <h6>Requirements</h6>
                <ul className="lists-3">
                    <li>At vero eos et accusamus et iusto odio dignissimos ducimus</li>
                    <li>At vero eos et accusamus et iusto odio dignissimos ducimus</li>
                    <li>At vero eos et accusamus et iusto odio dignissimos ducimus</li>
                    <li>At vero eos et accusamus et iusto odio dignissimos ducimus</li>
                    <li>At vero eos et accusamus et iusto odio dignissimos ducimus</li>
                </ul>
                </div>
                <div className="edu_wraper border">
                <h4 className="edu_title">Course Circullum</h4>
                <div id="accordionExample" className="accordion shadow circullum">
                    {/* Part 1 */}
                    <div className="card">
                    <div id="headingOne" className="card-header bg-white shadow-sm border-0">
                        <h6 className="mb-0 accordion_title"><a href="#" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" className="d-block position-relative text-dark collapsible-link py-2">Part 01: How To Learn Web Designing Step by Step</a></h6>
                    </div>
                    <div id="collapseOne" aria-labelledby="headingOne" data-parent="#accordionExample" className="collapse show">
                        <div className="card-body pl-3 pr-3">
                        <ul className="lectures_lists">
                            <li><div className="lectures_lists_title"><i className="ti-control-play" />Lecture: 01</div>Web Designing Beginner</li>
                            <li><div className="lectures_lists_title"><i className="ti-control-play" />Lecture: 02</div>Startup Designing with HTML5 &amp; CSS3</li>
                            <li><div className="lectures_lists_title"><i className="ti-control-play" />Lecture: 03</div>How To Call Google Map iFrame</li>
                            <li className="unview"><div className="lectures_lists_title"><i className="ti-control-play" />Lecture: 04</div>Create Drop Down Navigation Using CSS3</li>
                            <li className="unview"><div className="lectures_lists_title"><i className="ti-control-play" />Lecture: 05</div>How to Create Sticky Navigation Using JS</li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    {/* Part 2 */}
                    <div className="card">
                    <div id="headingTwo" className="card-header bg-white shadow-sm border-0">
                        <h6 className="mb-0 accordion_title"><a href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" className="d-block position-relative collapsed text-dark collapsible-link py-2">Part 02: Learn Web Designing in Basic Level</a></h6>
                    </div>
                    <div id="collapseTwo" aria-labelledby="headingTwo" data-parent="#accordionExample" className="collapse">
                        <div className="card-body pl-3 pr-3">
                        <ul className="lectures_lists">
                            <li><div className="lectures_lists_title"><i className="ti-control-play" />Lecture: 01</div>Web Designing Beginner</li>
                            <li><div className="lectures_lists_title"><i className="ti-control-play" />Lecture: 02</div>Startup Designing with HTML5 &amp; CSS3</li>
                            <li><div className="lectures_lists_title"><i className="ti-control-play" />Lecture: 03</div>How To Call Google Map iFrame</li>
                            <li className="unview"><div className="lectures_lists_title"><i className="ti-control-play" />Lecture: 04</div>Create Drop Down Navigation Using CSS3</li>
                            <li className="unview"><div className="lectures_lists_title"><i className="ti-control-play" />Lecture: 05</div>How to Create Sticky Navigation Using JS</li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    {/* Part 3 */}
                    <div className="card">
                    <div id="headingThree" className="card-header bg-white shadow-sm border-0">
                        <h6 className="mb-0 accordion_title"><a href="#" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" className="d-block position-relative collapsed text-dark collapsible-link py-2">Part 03: Learn Web Designing in Advance Level</a></h6>
                    </div>
                    <div id="collapseThree" aria-labelledby="headingThree" data-parent="#accordionExample" className="collapse">
                        <div className="card-body pl-3 pr-3">
                        <ul className="lectures_lists">
                            <li><div className="lectures_lists_title"><i className="ti-control-play" />Lecture: 01</div>Web Designing Beginner</li>
                            <li><div className="lectures_lists_title"><i className="ti-control-play" />Lecture: 02</div>Startup Designing with HTML5 &amp; CSS3</li>
                            <li><div className="lectures_lists_title"><i className="ti-control-play" />Lecture: 03</div>How To Call Google Map iFrame</li>
                            <li className="unview"><div className="lectures_lists_title"><i className="ti-control-play" />Lecture: 04</div>Create Drop Down Navigation Using CSS3</li>
                            <li className="unview"><div className="lectures_lists_title"><i className="ti-control-play" />Lecture: 05</div>How to Create Sticky Navigation Using JS</li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    {/* Part 04 */}
                    <div className="card">
                    <div id="headingThree" className="card-header bg-white shadow-sm border-0">
                        <h6 className="mb-0 accordion_title"><a href="#" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" className="d-block position-relative collapsed text-dark collapsible-link py-2">Part 04: How To Become Succes in Designing &amp; Development?</a></h6>
                    </div>
                    <div id="collapseThree" aria-labelledby="headingFour" data-parent="#accordionExample" className="collapse">
                        <div className="card-body pl-3 pr-3">
                        <ul className="lectures_lists">
                            <li><div className="lectures_lists_title"><i className="ti-control-play" />Lecture: 01</div>Web Designing Beginner</li>
                            <li><div className="lectures_lists_title"><i className="ti-control-play" />Lecture: 02</div>Startup Designing with HTML5 &amp; CSS3</li>
                            <li><div className="lectures_lists_title"><i className="ti-control-play" />Lecture: 03</div>How To Call Google Map iFrame</li>
                            <li className="unview"><div className="lectures_lists_title"><i className="ti-control-play" />Lecture: 04</div>Create Drop Down Navigation Using CSS3</li>
                            <li className="unview"><div className="lectures_lists_title"><i className="ti-control-play" />Lecture: 05</div>How to Create Sticky Navigation Using JS</li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/* Reviews */}
                <div className="rating-overview border">
                <div className="rating-overview-box">
                    <span className="rating-overview-box-total">4.2</span>
                    <span className="rating-overview-box-percent">out of 5.0</span>
                    <div className="star-rating" data-rating={5}><i className="ti-star" /><i className="ti-star" /><i className="ti-star" /><i className="ti-star" /><i className="ti-star" />
                    </div>
                </div>
                <div className="rating-bars">
                    <div className="rating-bars-item">
                    <span className="rating-bars-name">5 Star</span>
                    <span className="rating-bars-inner">
                        <span className="rating-bars-rating high" data-rating="4.7">
                        <span className="rating-bars-rating-inner" style={{width: '85%'}} />
                        </span>
                        <strong>85%</strong>
                    </span>
                    </div>
                    <div className="rating-bars-item">
                    <span className="rating-bars-name">4 Star</span>
                    <span className="rating-bars-inner">
                        <span className="rating-bars-rating good" data-rating="3.9">
                        <span className="rating-bars-rating-inner" style={{width: '75%'}} />
                        </span>
                        <strong>75%</strong>
                    </span>
                    </div>
                    <div className="rating-bars-item">
                    <span className="rating-bars-name">3 Star</span>
                    <span className="rating-bars-inner">
                        <span className="rating-bars-rating mid" data-rating="3.2">
                        <span className="rating-bars-rating-inner" style={{width: '52.2%'}} />
                        </span>
                        <strong>53%</strong>
                    </span>
                    </div>
                    <div className="rating-bars-item">
                    <span className="rating-bars-name">1 Star</span>
                    <span className="rating-bars-inner">
                        <span className="rating-bars-rating poor" data-rating={2.0}>
                        <span className="rating-bars-rating-inner" style={{width: '20%'}} />
                        </span>
                        <strong>20%</strong>
                    </span>
                    </div>
                </div>
                </div>
                {/* instructor */}
                <div className="single_instructor border">
                <div className="single_instructor_thumb">
                    <a href="#"><img src="https://via.placeholder.com/500x500" className="img-fluid" alt /></a>
                </div>
                <div className="single_instructor_caption">
                    <h4><a href="#">Jonathan Campbell</a></h4>
                    <ul className="instructor_info">
                    <li><i className="ti-video-camera" />72 Videos</li>
                    <li><i className="ti-control-forward" />102 Lectures</li>
                    <li><i className="ti-user" />Exp. 4 Year</li>
                    </ul>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.</p>
                    <ul className="social_info">
                    <li><a href="#"><i className="ti-facebook" /></a></li>
                    <li><a href="#"><i className="ti-twitter" /></a></li>
                    <li><a href="#"><i className="ti-linkedin" /></a></li>
                    <li><a href="#"><i className="ti-instagram" /></a></li>
                    </ul>
                </div>
                </div>
                {/* Reviews */}
                <div className="list-single-main-item fl-wrap border">
                <div className="list-single-main-item-title fl-wrap">
                    <h3>Item Reviews -  <span> 3 </span></h3>
                </div>
                <div className="reviews-comments-wrap">
                    {/* reviews-comments-item */}  
                    <div className="reviews-comments-item">
                    <div className="review-comments-avatar">
                        <img src="https://via.placeholder.com/500x500" className="img-fluid" alt /> 
                    </div>
                    <div className="reviews-comments-item-text">
                        <h4><a href="#">Josaph Manrty</a><span className="reviews-comments-item-date"><i className="ti-calendar theme-cl" />27 Oct 2019</span></h4>
                        <div className="listing-rating high" data-starrating2={5}><i className="ti-star active" /><i className="ti-star active" /><i className="ti-star active" /><i className="ti-star active" /><i className="ti-star active" /><span className="review-count">4.9</span> </div>
                        <div className="clearfix" />
                        <p>" Commodo est luctus eget. Proin in nunc laoreet justo volutpat blandit enim. Sem felis, ullamcorper vel aliquam non, varius eget justo. Duis quis nunc tellus sollicitudin mauris. "</p>
                        <div className="pull-left reviews-reaction">
                        <a href="#" className="comment-like active"><i className="ti-thumb-up" /> 12</a>
                        <a href="#" className="comment-dislike active"><i className="ti-thumb-down" /> 1</a>
                        <a href="#" className="comment-love active"><i className="ti-heart" /> 07</a>
                        </div>
                    </div>
                    </div>
                    {/*reviews-comments-item end*/}  
                    {/* reviews-comments-item */}  
                    <div className="reviews-comments-item">
                    <div className="review-comments-avatar">
                        <img src="https://via.placeholder.com/500x500" className="img-fluid" alt /> 
                    </div>
                    <div className="reviews-comments-item-text">
                        <h4><a href="#">Rita Chawla</a><span className="reviews-comments-item-date"><i className="ti-calendar theme-cl" />2 Nov May 2019</span></h4>
                        <div className="listing-rating mid" data-starrating2={5}><i className="ti-star active" /><i className="ti-star active" /><i className="ti-star active" /><i className="ti-star active" /><i className="ti-star" /><span className="review-count">3.7</span> </div>
                        <div className="clearfix" />
                        <p>" Commodo est luctus eget. Proin in nunc laoreet justo volutpat blandit enim. Sem felis, ullamcorper vel aliquam non, varius eget justo. Duis quis nunc tellus sollicitudin mauris. "</p>
                        <div className="pull-left reviews-reaction">
                        <a href="#" className="comment-like active"><i className="ti-thumb-up" /> 12</a>
                        <a href="#" className="comment-dislike active"><i className="ti-thumb-down" /> 1</a>
                        <a href="#" className="comment-love active"><i className="ti-heart" /> 07</a>
                        </div>
                    </div>
                    </div>
                    {/*reviews-comments-item end*/}
                    {/* reviews-comments-item */}  
                    <div className="reviews-comments-item">
                    <div className="review-comments-avatar">
                        <img src="https://via.placeholder.com/500x500" className="img-fluid" alt /> 
                    </div>
                    <div className="reviews-comments-item-text">
                        <h4><a href="#">Adam Wilsom</a><span className="reviews-comments-item-date"><i className="ti-calendar theme-cl" />10 Nov 2019</span></h4>
                        <div className="listing-rating good" data-starrating2={5}><i className="ti-star active" /><i className="ti-star active" /><i className="ti-star active" /><i className="ti-star active" /><i className="ti-star" /> <span className="review-count">4.2</span> </div>
                        <div className="clearfix" />
                        <p>" Commodo est luctus eget. Proin in nunc laoreet justo volutpat blandit enim. Sem felis, ullamcorper vel aliquam non, varius eget justo. Duis quis nunc tellus sollicitudin mauris. "</p>
                        <div className="pull-left reviews-reaction">
                        <a href="#" className="comment-like active"><i className="ti-thumb-up" /> 12</a>
                        <a href="#" className="comment-dislike active"><i className="ti-thumb-down" /> 1</a>
                        <a href="#" className="comment-love active"><i className="ti-heart" /> 07</a>
                        </div>
                    </div>
                    </div>
                    {/*reviews-comments-item end*/}
                </div>
                </div>
                {/* Submit Reviews */}
                <div className="edu_wraper border">
                <h4 className="edu_title">Submit Reviews</h4>
                <div className="review-form-box form-submit">
                    <form>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                            <label>Name</label>
                            <input className="form-control" type="text" placeholder="Your Name" />
                        </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                            <label>Email</label>
                            <input className="form-control" type="email" placeholder="Your Email" />
                        </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="form-group">
                            <label>Review</label>
                            <textarea className="form-control ht-140" placeholder="Review" defaultValue={""} />
                        </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="form-group">
                            <button type="submit" className="btn btn-theme">Submit Review</button>
                        </div>
                        </div>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            {/* Sidebar */}
            <SingleCourseAside />
            </div>
        </div>
        </section>


        </>
    )
}

export default SingleCourse;
