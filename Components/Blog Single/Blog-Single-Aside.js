import React from 'react'

const BlogSingleAside = () => {
    return (
        <>
            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                <div className="single_widgets widget_search">
                <h4 className="title">Search</h4>
                <form action="#" className="sidebar-search-form">
                    <input type="search" name="search" placeholder="Search.." />
                    <button type="submit"><i className="ti-search" /></button>
                </form>
                </div>
                <div className="single_widgets widget_category">
                <h4 className="title">Categories</h4>
                <ul>
                    <li><a href="#">Lifestyle <span>09</span></a></li>
                    <li><a href="#">Travel <span>12</span></a></li>
                    <li><a href="#">Fashion <span>19</span></a>
                    </li><li><a href="#">Branding <span>17</span></a></li>
                    <li><a href="#">Music <span>10</span></a></li>
                </ul>
                </div>
                <div className="single_widgets widget_thumb_post">
                <h4 className="title">Trending Posts</h4>
                <ul>
                    <li>
                    <span className="left">
                        <img src="assets/img/tour-1.jpg" alt className />
                    </span>
                    <span className="right">
                        <a className="feed-title" href="#">Alonso Kelina Falao Asiano Pero</a> 
                        <span className="post-date"><i className="ti-calendar" />10 Min ago</span>
                    </span>
                    </li>
                    <li>
                    <span className="left">
                        <img src="assets/img/tour-2.jpg" alt className />
                    </span>
                    <span className="right">
                        <a className="feed-title" href="#">It is a long established fact that a reader</a> 
                        <span className="post-date"><i className="ti-calendar" />2 Hours ago</span>
                    </span>
                    </li>
                    <li>
                    <span className="left">
                        <img src="assets/img/tour-3.jpg" alt className />
                    </span>
                    <span className="right">
                        <a className="feed-title" href="#">Many desktop publish packages and web</a> 
                        <span className="post-date"><i className="ti-calendar" />4 Hours ago</span>
                    </span>
                    </li>
                    <li>
                    <span className="left">
                        <img src="assets/img/tour-4.jpg" alt className />
                    </span>
                    <span className="right">
                        <a className="feed-title" href="#">Various versions have evolved over the years</a> 
                        <span className="post-date"><i className="ti-calendar" />7 Hours ago</span>
                    </span>
                    </li>
                    <li>
                    <span className="left">
                        <img src="assets/img/tour-5.jpg" alt className />
                    </span>
                    <span className="right">
                        <a className="feed-title" href="#">Photo booth anim 8-bit PBR 3 wolf moon.</a> 
                        <span className="post-date"><i className="ti-calendar" />3 Days ago</span>
                    </span>
                    </li>
                </ul>
                </div>
                <div className="single_widgets widget_tags">
                <h4 className="title">Tags Cloud</h4>
                <ul>
                    <li><a href="#">Lifestyle</a></li>
                    <li><a href="#">Travel</a></li>
                    <li><a href="#">Fashion</a></li>
                    <li><a href="#">Branding</a></li>
                    <li><a href="#">Music</a></li>
                </ul>
                </div>
            </div>
        </>
    )
}

export default BlogSingleAside;
