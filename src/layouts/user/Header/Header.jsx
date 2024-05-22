import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { getAllCoursesAPI } from "../../../redux/reducer/courseSlice";

export default function Header() {
  //#region redux
  const allCourses = useSelector((state) => state.courseSlice.courses);
  const dispatch = useDispatch();
  //#endregion
  const navigate = useNavigate();
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser || null;
  });

  useEffect(() => {
    dispatch(getAllCoursesAPI({ page: 0, size: 6, home: "home" }));
  }, []);

  useEffect(() => {
    const userInfo = localStorage.getItem("user");
    if (userInfo) {
      setUser(userInfo);
    }
  }, []);
  const handleLogout = (event) => {
    event.preventDefault();
    localStorage.clear();
    Cookies.remove("accessToken");
    setUser(null);
    navigate("/");
  };
  return (
    <header className="header">
      <div className="header-fixed">
        <nav className="navbar navbar-expand-lg header-nav scroll-sticky">
          <div className="container">
            <div className="navbar-header">
              <a id="mobile_btn" href="javascript:void(0);">
                <span className="bar-icon">
                  <span />
                  <span />
                  <span />
                </span>
              </a>
              <a href="/" className="navbar-brand logo">
                <img
                  src="https://rikkei.edu.vn/wp-content/uploads/2024/01/logo-rikkei2.png"
                  className="img-fluid"
                  alt="Logo"
                />
              </a>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <a href="/" className="menu-logo">
                  <img
                    src="https://rikkei.edu.vn/wp-content/uploads/2024/01/logo-rikkei2.png"
                    className="img-fluid"
                    alt="Logo"
                  />
                </a>
                <a
                  id="menu_close"
                  className="menu-close"
                  href="javascript:void(0);"
                >
                  <i className="fas fa-times" />
                </a>
              </div>
              <ul className="main-nav">
                <li className="has-submenu active">
                  <a className="" href="/">
                    Trang chủ
                  </a>
                </li>
                <li className="has-submenu">
                  <NavLink to="/courses">
                    Khóa học <i className="fas fa-chevron-down" />
                  </NavLink>
                  <ul className="submenu">
                    <li className="has-submenu">
                      <Link to="/courses">Các khóa học</Link>
                      <ul className="submenu">
                        {allCourses?.map((item, index) => (
                          <li key={index}>
                            <Link to={`/courseDetail/${item.id}`}>
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li>
                      <Link className="cursor-pointer" to="/listTeachers">
                        Danh sách giảng viên
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <a href="https://rikkei.edu.vn/" target="_blank">
                    Về chúng tôi
                  </a>
                </li>

                <li className="has-submenu">
                  <NavLink to="/blogs">Bài viết</NavLink>
                </li>
                <li className="login-link">
                  <a href="/login">Login / Signup</a>
                </li>
              </ul>
            </div>
            <ul className="nav header-navbar-rht">
              {user ? (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link cursor-pointer"
                      to={`/wish-list?user=${user}`}
                    >
                      Xin chào, {user}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link header-login cursor-pointer"
                      onClick={handleLogout}
                    >
                      Đăng xuất
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <a className="nav-link header-sign" href="/login">
                      Đăng nhập
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link header-login" href="/register">
                      Đăng ký
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
