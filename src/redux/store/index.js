import { configureStore } from "@reduxjs/toolkit";
// State --blog --
import category from "../slices/blog_slices/categorysSlice";
import allBlogs from "../slices/blog_slices/allBlogs";
import blogTypeCategory from "../slices/blog_slices/blogTypeCategorySlice";
import blogDetail from "../slices/blog_slices/blogDetailSlice";
import searchBlog from "../slices/blog_slices/searchBlogSlice";

// State -- Register user --
import createUser from "../slices/register_users_slices/createUserSlice";
import resendEmial from "../slices/register_users_slices/resendCorreoSlice";
import activateUser from "../slices/register_users_slices/activationSlice";
import JWTCreate from "../slices/register_users_slices/JWTCreate";
import JWTRefresh from "../slices/register_users_slices/JWTRefresh";

export const store = configureStore({
  reducer: {
    // State -- Blog --
    //    category: category,
    //    allBlogs: allBlogs,
    //    blogTypeCategory: blogTypeCategory,
    //    blogDetail: blogDetail,
    //    searchBlog: searchBlog,

    // State -- Register user --
    createUser: createUser,
    resendEmial: resendEmial,
    activate: activateUser,
    JWTCreate: JWTCreate,
    JWTRefresh : JWTRefresh
  },
});
