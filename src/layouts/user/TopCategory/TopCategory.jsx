import React, { Fragment } from "react";
import CategoryCard from "../../../components/CategoryCard/CategoryCard";
import { Link } from "react-router-dom";

export default function TopCategory() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const category = [
    {
      id: 1,
      name: "Angular Development",
      image: "assets/img/categories-icon.png",
    },
    {
      id: 2,
      name: "Docker Development",
      image: "assets/img/categories-icon-01.png",
    },
    {
      id: 3,
      name: "Node JS Frontend",
      image: "assets/img/categories-icon-02.png",
    },
    {
      id: 4,
      name: "Swift Development",
      image: "assets/img/categories-icon-03.png",
    },
    {
      id: 5,
      name: "Python Development",
      image: "assets/img/categories-icon-04.png",
    },
    {
      id: 6,
      name: "React Native",
      image: "assets/img/categories-icon-05.png",
    },
  ];
  return (
    <section className="section how-it-works">
      <div className="container">
        <div className="section-header aos" data-aos="fade-up">
          <div className="section-sub-head">
            <span>Khóa học được yêu thích</span>
            <h2>Top các khóa học hàng đầu</h2>
          </div>
          <div className="all-btn all-category d-flex align-items-center">
            <Link to="/courses" className="btn btn-primary">
              Tất cả các khóa học
            </Link>
          </div>
        </div>
        <div className="section-text aos" data-aos="fade-up">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean
            accumsan bibendum gravida maecenas augue elementum et neque.
            Suspendisse imperdiet.
          </p>
        </div>
        <div
          className="owl-carousel mentoring-course owl-theme aos"
          data-aos="fade-up"
        >
          {category?.map((item, index) => (
            <Fragment key={index}>
              <CategoryCard item={item} />
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
