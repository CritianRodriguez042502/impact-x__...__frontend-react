import {
  BrowserRouter,
  Routes,
  Route,
  createHashRouter,
} from "react-router-dom";
import { NotFound } from "../components/index";
import {
  // static pages
  Initial,
  Services,
  Contact,
  About,

  // blog pages
  AllBlogs,
  Categorys,
  BlogDetail,
  Search,

  // Registration pages
  Access,
  Signin,
  Signup,
  Activation,
  ResetPassword,

  // Dashboard pages
  InitialDashboard,
  BlogsUser,
  CreateBlogUser,
  UpdateBlogByUser,
} from "../containers/index";

export function Redirects() {
  const routes = createHashRouter([
    // static pages
    { path: "/", element: <Initial /> },
    { path: "/home", element: <Initial /> },
    { path: "/services", element: <Services /> },
    { path: "/contact", element: <Contact /> },
    { path: "/about", element: <About /> },

    // blog pages
    { path: "/blogs", element: <AllBlogs /> },
    { path: "/blogs/category/:slug", element: <Categorys /> },
    { path: "/blogs/blog_detail/:slug", element: <BlogDetail /> },
    { path: "/blogs/search/:slug", element: <Search /> },

    // Registration pages
    { path: "/access", element: <Access /> },
    { path: "/access/signin", element: <Signin /> },
    { path: "/access/signup", element: <Signup /> },
    { path: "/admin/user/activate/:uid/:token", element: <Activation /> },
    {
      path: "/admin/reset_password/confirm/:uid/:token",
      element: <ResetPassword />,
    },

    // Dashboard pages
    { path: "/dashboard", element: <InitialDashboard /> },
    { path: "/dashboard/blogs_user", element: <BlogsUser /> },
    { path: "/dashboard/create_blog", element: <CreateBlogUser /> },
    {
      path: "/dashboard/blog_user_detail/:slug",
      element: <UpdateBlogByUser />,
    },

    //Not found page
    { path: "*", element: <NotFound /> },
  ]);
  return routes;
}
