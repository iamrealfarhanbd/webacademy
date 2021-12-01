import React from 'react'
import BlogSingleAside from './Blog-Single-Aside'

const BlogSingle = () => {
    return (
        <>
        <section className="gray">
        <div className="container">
            <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                <div className="article_detail_wrapss single_article_wrap format-standard">
                <div className="article_body_wrap">
                    <div className="article_featured_image">
                    <img className="img-fluid" src="https://via.placeholder.com/1700x1600" alt />
                    </div>
                    <div className="article_top_info">
                    <ul className="article_middle_info">
                        <li><a href="#"><span className="icons"><i className="ti-user" /></span>by Rosalina Doe</a></li>
                        <li><a href="#"><span className="icons"><i className="ti-comment-alt" /></span>45 Comments</a></li>
                    </ul>
                    </div>
                    <h2 className="post-title">Lorem ipsum dolor sit amet, cons pisicing elit, sed do.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem. <br /><br /> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.</p>
                    <blockquote>
                    <span className="icon"><i className="fas fa-quote-left" /></span>
                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tem
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ut aliquip ex ea commodo onsequat.</p>
                    <h5 className="name">- Rosalina Pong</h5>
                    </blockquote>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                    inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                    ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                    magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                    dolorem. <br /><br />Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis
                    iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                    explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                    sed quia consequuntur magni dolores eos qui ratione voluptatem.</p>
                    <div className="article_bottom_info">
                    <div className="post-tags">
                        <h4 className="pbm-title">Related Tags</h4>
                        <ul className="list">
                        <li><a href="#">organic</a></li>
                        <li><a href="#">Foods</a></li>
                        <li><a href="#">tasty</a></li>
                        </ul>
                    </div>
                    <div className="post-share">
                        <h4 className="pbm-title">Social Share</h4>
                        <ul className="list">
                        <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                        <li><a href="#"><i className="fab fa-twitter" /></a></li>
                        <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                        <li><a href="#"><i className="fab fa-vk" /></a></li>
                        <li><a href="#"><i className="fab fa-tumblr" /></a></li>
                        </ul>
                    </div>
                    </div>
                    <div className="single_article_pagination">
                    <div className="prev-post">
                        <a href="#" className="theme-bg">
                        <div className="title-with-link">
                            <span className="intro">Prev Post</span>
                        </div>
                        </a>
                    </div>
                    <div className="article_pagination_center_grid">
                        <a href="#"><i className="ti-layout-grid3" /></a>
                    </div>
                    <div className="next-post">
                        <a href="#" className="theme-bg">
                        <div className="title-with-link">
                            <span className="intro">Next Post</span>
                        </div>
                        </a>
                    </div>
                    </div>
                </div>
                </div>
                <div className="article_detail_wrapss single_article_wrap format-standard">
                <div className="article_posts_thumb">
                    <span className="img"><img className="img-fluid" src="https://via.placeholder.com/500x500" alt /></span>
                    <h3 className="pa-name">Rosalina William</h3>
                    <ul className="social-links">
                    <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                    <li><a href="#"><i className="fab fa-twitter" /></a></li>
                    <li><a href="#"><i className="fab fa-behance" /></a></li>
                    <li><a href="#"><i className="fab fa-youtube" /></a></li>
                    <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                    </ul>
                    <p className="pa-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                </div>
                </div>
                <div className="article_detail_wrapss single_article_wrap format-standard">
                <div className="comment-area">
                    <div className="all-comments">
                    <h3 className="comments-title">05 Comments</h3>
                    <div className="comment-list">
                        <ul>
                        <li className="article_comments_wrap">
                            <article>
                            <div className="article_comments_thumb">
                                <img src="https://via.placeholder.com/500x500" alt />
                            </div>
                            <div className="comment-details">
                                <div className="comment-meta">
                                <div className="comment-left-meta">
                                    <h4 className="author-name">Rosalina Kelian <span className="selected"><i className="fas fa-bookmark" /></span></h4>
                                    <div className="comment-date">19th May 2018</div>
                                </div>
                                <div className="comment-reply">
                                    <a href="#" className="reply"><span className="icona"><i className="ti-back-left" /></span> Reply</a>
                                </div>
                                </div>
                                <div className="comment-text">
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim laborumab.
                                    perspiciatis unde omnis iste natus error.</p>
                                </div>
                            </div>
                            </article>
                            <ul className="children">
                            <li className="article_comments_wrap">
                                <article>
                                <div className="article_comments_thumb">
                                    <img src="https://via.placeholder.com/500x500" alt />
                                </div>
                                <div className="comment-details">
                                    <div className="comment-meta">
                                    <div className="comment-left-meta">
                                        <h4 className="author-name">Rosalina Kelian</h4>
                                        <div className="comment-date">19th May 2018</div>
                                    </div>
                                    <div className="comment-reply">
                                        <a href="#" className="reply"><span className="icons"><i className="ti-back-left" /></span> Reply</a>
                                    </div>
                                    </div>
                                    <div className="comment-text">
                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim laborumab.
                                        perspiciatis unde omnis iste natus error.</p>
                                    </div>
                                </div>
                                </article>
                                <ul className="children">
                                <li className="article_comments_wrap">
                                    <article>
                                    <div className="article_comments_thumb">
                                        <img src="https://via.placeholder.com/500x500" alt />
                                    </div>
                                    <div className="comment-details">
                                        <div className="comment-meta">
                                        <div className="comment-left-meta">
                                            <h4 className="author-name">Rosalina Kelian</h4>
                                            <div className="comment-date">19th May 2018</div>
                                        </div>
                                        <div className="comment-reply">
                                            <a href="#" className="reply"><span className="icons"><i className="ti-back-left" /></span> Reply</a>
                                        </div>
                                        </div>
                                        <div className="comment-text">
                                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim laborumab.
                                            perspiciatis unde omnis iste natus error.</p>
                                        </div>
                                    </div>
                                    </article>
                                </li>
                                </ul>
                            </li>
                            </ul>
                        </li>
                        <li className="article_comments_wrap">
                            <article>
                            <div className="article_comments_thumb">
                                <img src="https://via.placeholder.com/500x500" alt />
                            </div>
                            <div className="comment-details">
                                <div className="comment-meta">
                                <div className="comment-left-meta">
                                    <h4 className="author-name">Rosalina Kelian</h4>
                                    <div className="comment-date">19th May 2018</div>
                                </div>
                                <div className="comment-reply">
                                    <a href="#" className="reply"><span className="icons"><i className="ti-back-left" /></span> Reply</a>
                                </div>
                                </div>
                                <div className="comment-text">
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim laborumab.
                                    perspiciatis unde omnis iste natus error.</p>
                                </div>
                            </div>
                            </article>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div className="comment-box submit-form">
                    <h3 className="reply-title">Post Comment</h3>
                    <div className="comment-form">
                        <form action="#">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your Name" />
                            </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your Email" />
                            </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="form-group">
                                <textarea name="comment" className="form-control" cols={30} rows={6} placeholder="Type your comments...." defaultValue={""} />
                            </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="form-group">
                                <a href="#" className="btn search-btn">Submit Now</a>
                            </div>
                            </div>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            
                <BlogSingleAside />


            </div>					
        </div>
        </section>

        </>
    )
}

export default BlogSingle;
