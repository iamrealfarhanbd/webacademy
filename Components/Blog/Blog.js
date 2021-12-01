import React from 'react'

const Blog = () => {
    return (
        <>
        <section className="pt-0">
        <div className="container">
            <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="articles_grid_style">
                <div className="articles_grid_thumb">
                    <a href="blog-detail.html"><img src="https://via.placeholder.com/700x400" className="img-fluid" alt /></a>
                </div>
                <div className="articles_grid_caption">
                    <h4>The National Minimum wage is an important part</h4>
                    <div className="articles_grid_author">
                    <div className="articles_grid_author_img"><img src="https://via.placeholder.com/500x500" className="img-fluid" alt /></div>
                    <h4>Adam Willsone</h4>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                    <button type="button" className="btn btn-loader">Load More<i className="ti-reload ml-3" /></button>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
 
        </>
    )
}

export default Blog
