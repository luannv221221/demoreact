import React from "react";

export default function CategoryCard({ item }) {
  return (
    <div className="feature-box text-center">
      <div className="feature-bg">
        <div className="feature-header">
          <div className="feature-icon">
            <img src={item.image} alt="" />
          </div>
          <div className="feature-cont">
            <div className="feature-text">{item.name}</div>
          </div>
        </div>
        <p>45 Instructors</p>
      </div>
    </div>
  );
}
