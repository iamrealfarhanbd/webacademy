import React from 'react'
import CourseAside from './Course-Aside'

const AllCourses = () => {
    return (
        <>
            <section className="pt-0">
  <div className="container">
    <div className="row">
      <div className="col-md-12 col-lg-12">
        <div id="filter-sidebar" className="filter-sidebar">
          <div className="filt-head">
            <h4 className="filt-first">Advance Options</h4>
            <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">Close <i className="ti-close" /></a>
          </div>
          <div className="show-hide-sidebar">
            <div className="sidebar-widgets">
              <form className="form-inline addons mb-3">
                <input className="form-control" type="search" placeholder="Search Courses" aria-label="Search" />
                <button className="btn my-2 my-sm-0" type="submit"><i className="ti-search" /></button>
              </form>	
              <h4 className="side_title">Course categories</h4>
              <ul className="no-ul-list mb-3">
                <li>
                  <input id="a-4" className="checkbox-custom" name="a-4" type="checkbox" />
                  <label htmlFor="a-4" className="checkbox-custom-label">Backend (3)</label>
                </li>
                <li>
                  <input id="a-5" className="checkbox-custom" name="a-5" type="checkbox" />
                  <label htmlFor="a-5" className="checkbox-custom-label">Frontend (2)</label>
                </li>
                <li>
                  <input id="a-6" className="checkbox-custom" name="a-6" type="checkbox" />
                  <label htmlFor="a-6" className="checkbox-custom-label">General (2)</label>
                </li>
                <li>
                  <input id="a-7" className="checkbox-custom" name="a-7" type="checkbox" />
                  <label htmlFor="a-7" className="checkbox-custom-label">IT &amp; Software (2)</label>
                </li>
                <li>
                  <input id="a-8" className="checkbox-custom" name="a-8" type="checkbox" />
                  <label htmlFor="a-8" className="checkbox-custom-label">Photography (2)</label>
                </li>
                <li>
                  <input id="a-9" className="checkbox-custom" name="a-9" type="checkbox" />
                  <label htmlFor="a-9" className="checkbox-custom-label">Technology (2)</label>
                </li>
              </ul>
              <h4 className="side_title">Instructors</h4>
              <ul className="no-ul-list mb-3">
                <li>
                  <input id="a-1" className="checkbox-custom" name="a-1" type="checkbox" />
                  <label htmlFor="a-1" className="checkbox-custom-label">Keny White (4)</label>
                </li>
                <li>
                  <input id="a-2" className="checkbox-custom" name="a-2" type="checkbox" />
                  <label htmlFor="a-2" className="checkbox-custom-label">Hinata Hyuga (11)</label>
                </li>
                <li>
                  <input id="a-6" className="checkbox-custom" name="a-6" type="checkbox" />
                  <label htmlFor="a-6" className="checkbox-custom-label">Mike hussy (4)</label>
                </li>
                <li>
                  <input id="a-7" className="checkbox-custom" name="a-7" type="checkbox" />
                  <label htmlFor="a-7" className="checkbox-custom-label">Adam Riky (7)</label>
                </li>
                <li>
                  <input id="a-8" className="checkbox-custom" name="a-8" type="checkbox" />
                  <label htmlFor="a-8" className="checkbox-custom-label">Balcony</label>
                </li>
                <li>
                  <input id="a-9" className="checkbox-custom" name="a-9" type="checkbox" />
                  <label htmlFor="a-9" className="checkbox-custom-label">Icon</label>
                </li>
              </ul>
              <h4 className="side_title">Price</h4>
              <ul className="no-ul-list mb-3">
                <li>
                  <input id="a-10" className="checkbox-custom" name="a-10" type="checkbox" />
                  <label htmlFor="a-10" className="checkbox-custom-label">All (75)</label>
                </li>
                <li>
                  <input id="a-11" className="checkbox-custom" name="a-11" type="checkbox" />
                  <label htmlFor="a-11" className="checkbox-custom-label">Free (15)</label>
                </li>
                <li>
                  <input id="a-12" className="checkbox-custom" name="a-12" type="checkbox" />
                  <label htmlFor="a-12" className="checkbox-custom-label">Paid (60)</label>
                </li>
              </ul>
              <button className="btn btn-theme full-width mb-2">Filter Result</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      
      <CourseAside />
      	
      <div className="col-lg-8 col-md-12 col-sm-12 order-1 order-lg-2 order-md-1">
        <div className="row align-items-center mb-3">
          <div className="col-lg-6 col-md-6 col-sm-12">
            We found <strong>142</strong> courses for you
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 ordering">
            <div className="filter_wraps">
              <div className="dn db-991 mt30 mb0 show-23">
                <div id="main2">
                  <a href="javascript:void(0)" className="btn btn-theme arrow-btn filter_open" onclick="openNav()" id="open2">Show Filter<span><i className="fas fa-arrow-alt-circle-right" /></span></a>
                </div>
              </div>
              <div className="dropdown show">
                <a className="btn btn-custom dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Recent Courses
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <a className="dropdown-item" href="#">Popular Courses</a>
                  <a className="dropdown-item" href="#">Recent Courses</a>
                  <a className="dropdown-item" href="#">Featured Courses</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="education_block_grid style_2">
              <div className="education_block_thumb n-shadow">
                <a href="course-detail.html"><img src="https://via.placeholder.com/700x500" className="img-fluid" alt /></a>
              </div>
              <div className="education_block_body">
                <h4 className="bl-title"><a href="course-detail.html">Tableau 2020 A-Z:Hands-On Tableau Training For Data Science!</a></h4>
              </div>
              <div className="cources_facts">
                <ul className="cources_facts_list">
                  <li className="facts-1">Expert</li>
                  <li className="facts-2">Professional</li>
                  <li className="facts-5">Design</li>
                </ul>
              </div>
              <div className="cources_info">
                <div className="cources_info_first">
                  <ul>
                    <li><strong>6,56684 Views</strong></li>
                    <li className="theme-cl">6h 40min</li>
                  </ul>
                </div>
                <div className="cources_info_last">
                  <h3>$99.7</h3>
                </div>
              </div>
              <div className="education_block_footer">
                <div className="education_block_author">
                  <div className="path-img"><a href="instructor-detail.html"><img src="https://via.placeholder.com/500x500" className="img-fluid" alt /></a></div>
                  <h5><a href="instructor-detail.html">Shilpa Shekh</a></h5>
                </div>
                <span className="education_block_time"><i className="ti-calendar mr-1" />4 days ago</span>
              </div>
            </div>	
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <ul className="pagination p-center">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span className="ti-arrow-left" />
                      <span className="sr-only">Previous</span>
                    </a>
                  </li>
                  <li className="page-item"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item active"><a className="page-link" href="#">3</a></li>
                  <li className="page-item"><a className="page-link" href="#">...</a></li>
                  <li className="page-item"><a className="page-link" href="#">18</a></li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span className="ti-arrow-right" />
                      <span className="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
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

export default AllCourses; 
