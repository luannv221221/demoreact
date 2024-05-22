import React from "react";
import { Link } from "react-router-dom";

export default function Blogs() {
  return (
    <div className="mt-[100px]">
      <div className="breadcrumb-bar">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="breadcrumb-list">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">Trang chủ</a>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Bài viết
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="course-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-12">
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="blog grid-blog">
                    <div className="blog-image">
                      <Link to="/blogDetail">
                        <img
                          className="img-fluid"
                          src="assets/img/blog/blog-08.jpg"
                          alt="Post Image"
                        />
                      </Link>
                    </div>
                    <div className="blog-grid-box">
                      <div className="blog-info clearfix">
                        <div className="post-left">
                          <ul>
                            <li>
                              <img
                                className="img-fluid"
                                src="assets/img/icon/icon-22.svg"
                                alt=""
                              />
                              Jun 14, 2022
                            </li>
                            <li>
                              <img
                                className="img-fluid"
                                src="assets/img/icon/icon-23.svg"
                                alt=""
                              />
                              Programming, Web Design
                            </li>
                          </ul>
                        </div>
                      </div>
                      <h3 className="blog-title">
                        <a href="blog-details.html">
                          Learn Webs Applications Development from Experts
                        </a>
                      </h3>
                      <div className="blog-content blog-read">
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Phasellus hendrerit. Sed egestas, ante et
                          vulputate volutpat, eros pede […]
                        </p>
                        <a
                          href="blog-details.html"
                          className="read-more btn btn-primary"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="blog grid-blog">
                    <div className="blog-image">
                      <a href="blog-details.html">
                        <img
                          className="img-fluid"
                          src="assets/img/blog/blog-09.jpg"
                          alt="Post Image"
                        />
                      </a>
                    </div>
                    <div className="blog-grid-box">
                      <div className="blog-info clearfix">
                        <div className="post-left">
                          <ul>
                            <li>
                              <img
                                className="img-fluid"
                                src="assets/img/icon/icon-22.svg"
                                alt=""
                              />
                              May 24, 2022
                            </li>
                            <li>
                              <img
                                className="img-fluid"
                                src="assets/img/icon/icon-23.svg"
                                alt=""
                              />
                              Programming, Courses
                            </li>
                          </ul>
                        </div>
                      </div>
                      <h3 className="blog-title">
                        <a href="blog-details.html">
                          Expand Your Career Opportunities With Python
                        </a>
                      </h3>
                      <div className="blog-content blog-read">
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Phasellus hendrerit. Sed egestas, ante et
                          vulputate volutpat, eros pede […]
                        </p>
                        <a
                          href="blog-details.html"
                          className="read-more btn btn-primary"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="blog grid-blog">
                    <div className="blog-image">
                      <a href="blog-details.html">
                        <img
                          className="img-fluid"
                          src="assets/img/blog/blog-10.jpg"
                          alt="Post Image"
                        />
                      </a>
                    </div>
                    <div className="blog-grid-box">
                      <div className="blog-info clearfix">
                        <div className="post-left">
                          <ul>
                            <li>
                              <img
                                className="img-fluid"
                                src="assets/img/icon/icon-22.svg"
                                alt=""
                              />
                              Jun 14, 2022
                            </li>
                            <li>
                              <img
                                className="img-fluid"
                                src="assets/img/icon/icon-23.svg"
                                alt=""
                              />
                              Programming, Web Design
                            </li>
                          </ul>
                        </div>
                      </div>
                      <h3 className="blog-title">
                        <a href="blog-details.html">
                          Complete PHP Programming Career Guideline
                        </a>
                      </h3>
                      <div className="blog-content blog-read">
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Phasellus hendrerit. Sed egestas, ante et
                          vulputate volutpat, eros pede […]
                        </p>
                        <a
                          href="blog-details.html"
                          className="read-more btn btn-primary"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="blog grid-blog">
                    <div className="blog-image">
                      <a href="blog-details.html">
                        <img
                          className="img-fluid"
                          src="assets/img/blog/blog-11.jpg"
                          alt="Post Image"
                        />
                      </a>
                    </div>
                    <div className="blog-grid-box">
                      <div className="blog-info clearfix">
                        <div className="post-left">
                          <ul>
                            <li>
                              <img
                                className="img-fluid"
                                src="assets/img/icon/icon-22.svg"
                                alt=""
                              />
                              Sep 18, 2022
                            </li>
                            <li>
                              <img
                                className="img-fluid"
                                src="assets/img/icon/icon-23.svg"
                                alt=""
                              />
                              Programming, Courses
                            </li>
                          </ul>
                        </div>
                      </div>
                      <h3 className="blog-title">
                        <a href="blog-details.html">
                          Programming Content Guideline For Beginners
                        </a>
                      </h3>
                      <div className="blog-content blog-read">
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Phasellus hendrerit. Sed egestas, ante et
                          vulputate volutpat, eros pede […]
                        </p>
                        <a
                          href="blog-details.html"
                          className="read-more btn btn-primary"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="blog grid-blog">
                    <div className="blog-image">
                      <a href="blog-details.html">
                        <img
                          className="img-fluid"
                          src="assets/img/blog/blog-12.jpg"
                          alt="Post Image"
                        />
                      </a>
                    </div>
                    <div className="blog-grid-box">
                      <div className="blog-info clearfix">
                        <div className="post-left">
                          <ul>
                            <li>
                              <img
                                className="img-fluid"
                                src="assets/img/icon/icon-22.svg"
                                alt=""
                              />
                              Jun 26, 2022
                            </li>
                            <li>
                              <img
                                className="img-fluid"
                                src="assets/img/icon/icon-23.svg"
                                alt=""
                              />
                              Programming, Web Design
                            </li>
                          </ul>
                        </div>
                      </div>
                      <h3 className="blog-title">
                        <a href="blog-details.html">
                          The Complete JavaScript Course for Beginners
                        </a>
                      </h3>
                      <div className="blog-content blog-read">
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Phasellus hendrerit. Sed egestas, ante et
                          vulputate volutpat, eros pede […]
                        </p>
                        <a
                          href="blog-details.html"
                          className="read-more btn btn-primary"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="blog grid-blog">
                    <div className="blog-image">
                      <a href="blog-details.html">
                        <img
                          className="img-fluid"
                          src="assets/img/blog/blog-13.jpg"
                          alt="Post Image"
                        />
                      </a>
                    </div>
                    <div className="blog-grid-box">
                      <div className="blog-info clearfix">
                        <div className="post-left">
                          <ul>
                            <li>
                              <img
                                className="img-fluid"
                                src="assets/img/icon/icon-22.svg"
                                alt=""
                              />
                              Feb 14, 2022
                            </li>
                            <li>
                              <img
                                className="img-fluid"
                                src="assets/img/icon/icon-23.svg"
                                alt=""
                              />
                              Programming, Courses
                            </li>
                          </ul>
                        </div>
                      </div>
                      <h3 className="blog-title">
                        <a href="blog-details.html">
                          Learn Mobile Applications Development from Experts
                        </a>
                      </h3>
                      <div className="blog-content blog-read">
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Phasellus hendrerit. Sed egestas, ante et
                          vulputate volutpat, eros pede […]
                        </p>
                        <a
                          href="blog-details.html"
                          className="read-more btn btn-primary"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <ul className="pagination lms-page">
                    <li className="page-item prev">
                      <a
                        className="page-link"
                        href="javascript:void(0);"
                        tabIndex={-1}
                      >
                        <i className="fas fa-angle-left" />
                      </a>
                    </li>
                    <li className="page-item first-page active">
                      <a className="page-link" href="javascript:void(0);">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="javascript:void(0);">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="javascript:void(0);">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="javascript:void(0);">
                        4
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="javascript:void(0);">
                        5
                      </a>
                    </li>
                    <li className="page-item next">
                      <a className="page-link" href="javascript:void(0);">
                        <i className="fas fa-angle-right" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 sidebar-right theiaStickySidebar">
              <div className="card search-widget blog-search blog-widget">
                <div className="card-body">
                  <form className="search-form">
                    <div className="input-group">
                      <input
                        type="text"
                        placeholder="Search..."
                        className="form-control"
                      />
                      <button type="submit" className="btn btn-primary">
                        <i className="fa fa-search" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="card post-widget blog-widget">
                <div className="card-header">
                  <h4 className="card-title">Recent Posts</h4>
                </div>
                <div className="card-body">
                  <ul className="latest-posts">
                    <li>
                      <div className="post-thumb">
                        <a href="blog-details.html">
                          <img
                            className="img-fluid"
                            src="assets/img/blog/blog-01.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="post-info">
                        <h4>
                          <a href="blog-details.html">
                            Learn Webs Applications Development from Experts
                          </a>
                        </h4>
                        <p>
                          <img
                            className="img-fluid"
                            src="assets/img/icon/icon-22.svg"
                            alt=""
                          />
                          Jun 14, 2022
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="post-thumb">
                        <a href="blog-details.html">
                          <img
                            className="img-fluid"
                            src="assets/img/blog/blog-02.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="post-info">
                        <h4>
                          <a href="blog-details.html">
                            Expand Your Career Opportunities With Python
                          </a>
                        </h4>
                        <p>
                          <img
                            className="img-fluid"
                            src="assets/img/icon/icon-22.svg"
                            alt=""
                          />
                          3 Dec 2019
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="post-thumb">
                        <a href="blog-details.html">
                          <img
                            className="img-fluid"
                            src="assets/img/blog/blog-03.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="post-info">
                        <h4>
                          <a href="blog-details.html">
                            Complete PHP Programming Career Guideline
                          </a>
                        </h4>
                        <p>
                          <img
                            className="img-fluid"
                            src="assets/img/icon/icon-22.svg"
                            alt=""
                          />
                          3 Dec 2019
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card category-widget blog-widget">
                <div className="card-header">
                  <h4 className="card-title">Categories</h4>
                </div>
                <div className="card-body">
                  <ul className="categories">
                    <li>
                      <a href="javascript:void(0);">
                        <i className="fas fa-angle-right" /> Business
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <i className="fas fa-angle-right" /> Courses
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <i className="fas fa-angle-right" /> Education
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <i className="fas fa-angle-right" /> Graphics Design
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <i className="fas fa-angle-right" /> Programming
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <i className="fas fa-angle-right" /> Web Design
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card category-widget blog-widget">
                <div className="card-header">
                  <h4 className="card-title">Archives</h4>
                </div>
                <div className="card-body">
                  <ul className="categories">
                    <li>
                      <a href="javascript:void(0);">
                        <i className="fas fa-angle-right" /> January 2022
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <i className="fas fa-angle-right" /> February 2022
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <i className="fas fa-angle-right" /> April 2022
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card tags-widget blog-widget tags-card">
                <div className="card-header">
                  <h4 className="card-title">Latest Tags</h4>
                </div>
                <div className="card-body">
                  <ul className="tags">
                    <li>
                      <a href="javascript:void(0);" className="tag">
                        HTML
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="tag">
                        Java Script
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="tag">
                        Css
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="tag">
                        Jquery
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="tag">
                        Java
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="tag">
                        React
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
