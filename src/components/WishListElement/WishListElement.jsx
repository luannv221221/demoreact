import React from "react";
import { Link } from "react-router-dom";

export default function WishListElement({ item, onRemoveWishList }) {
  return (
    <div className="wishlist-item">
      <div className="row align-items-center">
        <div className="col-md-9">
          <div className="wishlist-detail">
            <div className="wishlist-img">
              <Link to={`/courseDetail/${item.id}`}>
                <img alt="" src={item.image} />
              </Link>
            </div>
            <div className="wishlist-info">
              <h5>
                <Link to={`/courseDetail/${item.id}`}>{item.title}</Link>
              </h5>
              <div className="course-info d-flex align-items-center border-bottom-0 pb-0">
                <div className="rating-img d-flex align-items-center">
                  <img src="assets/img/icon/icon-01.svg" alt="" />
                  <p>12+ Lesson</p>
                </div>
                <div className="course-view d-flex align-items-center">
                  <img src="assets/img/icon/icon-02.svg" alt="" />
                  <p>9hr 30min</p>
                </div>
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
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="remove-btn" onClick={() => onRemoveWishList(item.id)}>
            <a className="btn">Xóa</a>
          </div>
        </div>
      </div>
    </div>
  );
}
