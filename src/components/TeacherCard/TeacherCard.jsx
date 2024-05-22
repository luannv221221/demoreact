import React from "react";
import { Link } from "react-router-dom";

export default function TeacherCard({ item }) {
  return (
    <div className="instructors-widget">
      <div className="instructors-img">
        <Link to="/listTeachers">
          {/* Thêm class w-[200px] và h-[200px] để fix cứng width và height của ảnh */}
          <img
            className="img-fluid w-[200px] h-[400px] object-cover"
            alt=""
            src={item.image}
          />
        </Link>
      </div>
      <div className="instructors-content text-center">
        <h5>
          <a className="text-[#231651]">{item.name}</a>
        </h5>
        <div className="student-count d-flex justify-content-center">
          <i className="fa-solid fa-user-group" />
          <span>50 Students</span>
        </div>
      </div>
    </div>
  );
}
