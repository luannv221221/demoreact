import Login from "../pages/user/Auth/Login";
import Register from "../pages/user/Auth/Register";
import CourseDetail from "../pages/user/CourseDetail/CourseDetail";
import Home from "../pages/user/Home/Home";
import IndexUser from "../pages/user/IndexUser";
import PrivateRouter from "./PrivateRouter";
import CourseIndex from "../pages/admin/course-index";
import DetailCourse from "../pages/admin/detailCourse";
import HomeAdmin from "../pages/admin/home";
import CategoryManagement from "../pages/admin/category_management/CategoryManagement";
import PostManagement from "../pages/admin/posts/PostManagement";
import UserMangagement from "../pages/admin/user_management";
import LearningCourse from "../pages/user/LearningCourse/LearningCourse";
import AllCourses from "../pages/user/AllCourses/AllCourses";
import NotFound from "../pages/NotFound/NotFound";
import Blogs from "../pages/user/Blogs/Blogs";
import BlogDetail from "../pages/user/BlogDetail/BlogDetail";
import ListTeachers from "../pages/user/ListTeachers/ListTeachers";
import WishList from "../pages/user/WishList/WishList";
const routesConfig = [
  {
    path: "/admin",
    element: <PrivateRouter />,
    children: [
      { path: "", element: <HomeAdmin /> },
      { path: "management", element: <CourseIndex /> },
      { path: "category", element: <CategoryManagement /> },
      { path: "post", element: <PostManagement /> },
      { path: "user", element: <UserMangagement /> },
      { path: "course/:id", element: <DetailCourse /> },
    ],
  },
  {
    path: "/",
    element: <IndexUser />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/courses", element: <AllCourses /> },
      { path: "/courseDetail/:id", element: <CourseDetail /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/blogDetail", element: <BlogDetail /> },
      { path: "/listTeachers", element: <ListTeachers /> },
      { path: "/wish-list", element: <WishList /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "*", element: <NotFound /> },
  { path: "/course/learn/:id", element: <LearningCourse /> },
];

export default routesConfig;
