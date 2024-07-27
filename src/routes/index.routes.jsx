import { HashRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Loader } from "../components/index.js";

const components = {
  errors: {
    NotFound: lazy(() => import("../components/errors/not-found.jsx")),
  },
};

const pages = {
  static_pages: {
    home: lazy(() => import("../pages/static/home/home.jsx")),
    services: lazy(() => import("../pages/static/services/Services.jsx")),
    about: lazy(() => import("../pages/static/about/About.jsx")),
    contact: lazy(() => import("../pages/static/contact/Contact.jsx")),
  },
  blog_pages: {
    all_blogs: lazy(() => import("../pages/blog/all_blogs/AllBlogs.jsx")),
    blogs_category: lazy(() => import("../pages/blog/categorys/Categorys.jsx")),
    blog_detail: lazy(() => import("../pages/blog/blog_detail/BlogDetail.jsx")),
    blogs_search: lazy(() => import("../pages/blog/search/Search.jsx")),
  },
  registration_pages: {
    access: lazy(() => import("../pages/register/access/Access.jsx")),
    signin: lazy(() => import("../pages/register/signin/Signin.jsx")),
    signup: lazy(() => import("../pages/register/signup/Signup.jsx")),
    activate_user: lazy(() =>
      import("../pages/register/activation/Activation.jsx")
    ),
    reset_password: lazy(() =>
      import("../pages/register/reset_password/ResetPassword.jsx")
    ),
  },
  dashboard_pages: {
    home_dashboard: lazy(() =>
      import("../pages/dashboard/initial_dashboard/InitialDashboard.jsx")
    ),
    dashboard_blogs_user: lazy(() =>
      import("../pages/dashboard/blogs_user/BlogsUser.jsx")
    ),
    dashboard_create_blog: lazy(() =>
      import("../pages/dashboard/create_blog_user/CreateBlogUser.jsx")
    ),
    dashboard_blog_user_detail: lazy(() =>
      import("../pages/dashboard/update_blog_user/UpdateBlogByUser.jsx")
    ),
  },
};

export const Redirects = () => {
  return (
    <HashRouter>
      <Routes>
        // ROUTES = STATIC PAGES
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <pages.static_pages.home />
            </Suspense>
          }
        />
        <Route
          path="/services"
          element={
            <Suspense fallback={<Loader />}>
              <pages.static_pages.services />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<Loader />}>
              <pages.static_pages.contact />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<Loader />}>
              <pages.static_pages.about />
            </Suspense>
          }
        />
        // ROUTES = BLOG PAGES
        <Route
          path="/blogs"
          element={
            <Suspense fallback={<Loader />}>
              <pages.blog_pages.all_blogs />
            </Suspense>
          }
        />
        <Route
          path="/blogs/category/:slug"
          element={
            <Suspense fallback={<Loader />}>
              <pages.blog_pages.blogs_category />
            </Suspense>
          }
        />
        <Route
          path="/blogs/blog_detail/:slug"
          element={
            <Suspense fallback={<Loader />}>
              <pages.blog_pages.blog_detail />
            </Suspense>
          }
        />
        <Route
          path="/blogs/search/:slug"
          element={
            <Suspense fallback={<Loader />}>
              <pages.blog_pages.blogs_search />
            </Suspense>
          }
        />
        // ROUTES = REGISTRATION PAGES
        <Route
          path="/access"
          element={
            <Suspense fallback={<Loader />}>
              <pages.registration_pages.access />
            </Suspense>
          }
        />
        <Route
          path="/access/signin"
          element={
            <Suspense fallback={<Loader />}>
              <pages.registration_pages.signin />
            </Suspense>
          }
        />
        <Route
          path="/access/signup"
          element={
            <Suspense fallback={<Loader />}>
              <pages.registration_pages.signup />
            </Suspense>
          }
        />
        <Route
          path="/admin/user/activate/:uid/:token"
          element={
            <Suspense fallback={<Loader />}>
              <pages.registration_pages.activate_user />
            </Suspense>
          }
        />
        <Route
          path="/admin/reset_password/confirm/:uid/:token"
          element={
            <Suspense fallback={<Loader />}>
              <pages.registration_pages.reset_password />
            </Suspense>
          }
        />
        // ROUTES = DASHBOARD PAGES
        <Route
          path="/dashboard"
          element={
            <Suspense fallback={<Loader />}>
              <pages.dashboard_pages.home_dashboard />
            </Suspense>
          }
        />
        <Route
          path="/dashboard/blogs_user"
          element={
            <Suspense fallback={<Loader />}>
              <pages.dashboard_pages.dashboard_blogs_user />
            </Suspense>
          }
        />
        <Route
          path="/dashboard/create_blog"
          element={
            <Suspense fallback={<Loader />}>
              <pages.dashboard_pages.dashboard_create_blog />
            </Suspense>
          }
        />
        <Route
          path="/dashboard/blog_user_detail/:slug"
          element={
            <Suspense fallback={<Loader />}>
              <pages.dashboard_pages.dashboard_blog_user_detail />
            </Suspense>
          }
        />
        //Not found page
        <Route
          path="*"
          element={
            <Suspense fallback={<Loader />}>
              <components.errors.NotFound />
            </Suspense>
          }
        />
      </Routes>
    </HashRouter>
  );
};
