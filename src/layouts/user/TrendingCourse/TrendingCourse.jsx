import React, { Fragment, memo, useEffect, useState } from "react";
import CardCourseTrending from "../../../components/CardCourseTrending.jsx/CardCourseTrending";
import TeacherCard from "../../../components/TeacherCard/TeacherCard";

import { getTeachersApi } from "../../../api/teacher";

function TrendingCourse({ allCourses, isLoading }) {
  const [teachers, setTeachers] = useState(null);
  const handleGetTeachers = async () => {
    const response = await getTeachersApi();
    setTeachers(response);
  };
  useEffect(() => {
    handleGetTeachers();
  }, []);

  return (
    <section className="section trend-course">
      <div className="container">
        <div className="section-header aos" data-aos="fade-up">
          <div className="section-sub-head">
            <span>Bạn hứng thú với các công nghệ hàng đầu?</span>
            <h2>Các khóa học HOT</h2>
          </div>
          <div className="all-btn all-category d-flex align-items-center">
            <a href="course-list.html" className="btn btn-primary">
              Tất cả các khóa học
            </a>
          </div>
        </div>
        <div className="section-text aos" data-aos="fade-up">
          <p className="mb-0">
            Các khóa học hot với những công nghệ mới nhất hiện nay
          </p>
        </div>
        <div
          className="owl-carousel trending-course owl-theme aos"
          data-aos="fade-up"
        >
          {allCourses?.map((item, index) => (
            <Fragment key={index}>
              <CardCourseTrending item={item} />
            </Fragment>
          ))}
        </div>
        <div className="feature-instructors">
          <div className="section-header aos" data-aos="fade-up">
            <div className="section-sub-head feature-head text-center">
              <h2>Đội ngũ giảng viên</h2>
              <div className="section-text aos" data-aos="fade-up">
                <p className="mb-0">
                  Rikkei Education tự hào có đội ngũ cố vấn và giảng viên xuất
                  sắc, tin cậy, đảm bảo mang đến trải nghiệm học tập tuyệt vời
                  nhất, giúp học viên phát triển toàn diện
                </p>
              </div>
            </div>
          </div>
          <div
            className="owl-carousel instructors-course owl-theme aos"
            data-aos="fade-up"
          >
            {teachers?.map((item, index) => (
              <Fragment key={index}>
                <TeacherCard item={item} />
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default memo(TrendingCourse);
