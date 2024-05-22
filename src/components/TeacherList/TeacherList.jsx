import React from "react";

export default function TeacherList({ item }) {
  return (
    <div className="col-lg-12 d-flex">
      <div className="instructor-list flex-fill">
        <div className="instructor-img">
          <a href="">
            <img className="img-fluid" alt="" src={item.image} />
          </a>
        </div>
        <div className="instructor-content">
          <h5>
            <a href="instructor-profile.html">{item.name}</a>
          </h5>
          <h6>Giảng viên</h6>
          <div className="instructor-info">
            <div className="rating-img d-flex align-items-center">
              <img src="assets/img/icon/icon-01.svg" className="me-1" alt="" />
              <p>12+ Lesson</p>
            </div>
            <div className="course-view d-flex align-items-center ms-0">
              <img src="assets/img/icon/icon-02.svg" className="me-1" alt="" />
              <p>9hr 30min</p>
            </div>
            <div className="rating-img d-flex align-items-center">
              <img
                src="assets/img/icon/user-icon.svg"
                className="me-1"
                alt=""
              />
              <p>50 Students</p>
            </div>
            <div className="rating">
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star" />
              <span className="d-inline-block average-rating">
                <span>4.0</span> (15)
              </span>
            </div>
            <a href="#rate" className="rating-count">
              <i className="fa-regular fa-heart" />
            </a>
          </div>
          <div className="instructor-badge">
            <span className="web-badge">Web Design</span>
            <span className="web-badge">web development</span>
            <span className="web-badge">UI Design</span>
          </div>
        </div>
      </div>
    </div>
  );
}
