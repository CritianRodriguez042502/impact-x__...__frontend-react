import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFound, Layout } from "../components/index";
import {
  // static pages
  Initial,
  DevopWeb,
  Design,
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
  UpdateBlogByUser,
} from "../containers/index";

export function Redirects() {
  return (
    <BrowserRouter>
      <Routes>

        // static pages
        <Route path="/" element={<Initial />} />
        <Route path="/home" element={<Initial />} />
        <Route path="/home/devop_web" element={<DevopWeb />} />
        <Route path="/home/design" element={<Design />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />


        // blog pages
        <Route path="/blogs" element={<AllBlogs />} />
        <Route path="/blogs/category/:slug" element={<Categorys />} />
        <Route path="/blogs/blog_detail/:slug" element={<BlogDetail />} />
        <Route path="/blogs/search/:slug" element={<Search />} />


        // Registration pages
        <Route path="/access" element={<Access />} />
        <Route path="/access/signin" element={<Signin />} />
        <Route path="/access/signup" element={<Signup />} />
        <Route path="/admin/user/activate/:uid/:token" element={<Activation />}/>
        <Route path="/admin/reset_password/confirm/:uid/:token" element={<ResetPassword />}/>


        // Dashboard pages
        <Route path="/dashboard" element={<InitialDashboard />} />
        <Route path="/dashboard/blogs_user" element={<BlogsUser />} />
        <Route path="/dashboard/blog_user_detail/:slug" element={<UpdateBlogByUser/>} />

        //Not found page
        <Route path="*" element={<NotFound />} />
        
      </Routes>
    </BrowserRouter>
  );
}
