import React from "react";
import { Link } from "react-router-dom";
import { addWishListAPI } from "../../api/wishListAPIs";
import { getAuthToken } from "../../api/api.base.url";
import { notify } from "../../utils/notification";

export default function CourseCard({ item }) {
  const handleAddWishList = async (id) => {
    const token = getAuthToken();
    if (!token) {
      return notify("error", "Vui lòng đăng nhập trước khi yêu thích khóa học");
    }
    await addWishListAPI(id);
  };
  return (
    <div className="col-lg-4 col-md-6 d-flex">
      <div className="course-box d-flex aos" data-aos="fade-up">
        <div className="product">
          <div className="product-img">
            <Link to={`/courseDetail/${item.id}`}>
              <img className="img-fluid" alt="" src={item.image} />
            </Link>
            {/* <div className="price">
              <h3>
                $300 <span>$99.00</span>
              </h3>
            </div> */}
          </div>
          <div className="product-content">
            <div className="course-group d-flex">
              <div className="course-group-img d-flex">
                <a href="instructor-profile.html">
                  <img
                    src={item.teacherDto.image}
                    alt=""
                    className="img-fluid w-[50px] h-[50px]"
                  />
                </a>
                <div className="course-name">
                  <h4>
                    <Link to="/listTeachers">{item.teacherDto.name}</Link>
                  </h4>
                  <p>Giảng viên</p>
                </div>
              </div>
              <div className="course-share d-flex align-items-center justify-content-center">
                <a>
                  <i
                    className={`fa-regular fa-heart cursor-pointer ${
                      item.like ? "color-active" : ""
                    }`}
                    onClick={() => handleAddWishList(item.id)}
                    disable={item.like}
                  />
                </a>
              </div>
            </div>
            <h3 className="title instructor-text">
              <Link to={`/courseDetail/${item.id}`}>{item?.title}</Link>
            </h3>
            <div className="course-info d-flex align-items-center">
              <div className="rating-img d-flex align-items-center">
                <img src="assets/img/icon/icon-01.svg" alt="" />
                <p>{item.totalChap} chương</p>
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
              <i className="fas fa-star filled" />
              <span className="d-inline-block average-rating">
                <span>5.0</span> (15)
              </span>
            </div>
            {/* <div className="all-btn all-category d-flex align-items-center">
              <a href="checkout.html" className="btn btn-primary">
                BUY NOW
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
