import { configureStore } from "@reduxjs/toolkit";
// State --blog --
import category from "../slices/blog_slices/categorysSlice";
import allBlogs from "../slices/blog_slices/allBlogs";
import blogTypeCategory from "../slices/blog_slices/blogTypeCategorySlice";
import blogDetail from "../slices/blog_slices/blogDetailSlice";
import searchBlog from "../slices/blog_slices/searchBlogSlice";

// State -- Register user --
import createUser from "../slices/register_users_slices/createUserSlice";
import resendEmail from "../slices/register_users_slices/resendCorreoSlice";
import activateUser from "../slices/register_users_slices/activationSlice";
import JWTCreate from "../slices/register_users_slices/JWTCreate";
import JWTRefresh from "../slices/register_users_slices/JWTRefresh";
import JWTVerify from "../slices/register_users_slices/JWTVerify";
import userData from "../slices/register_users_slices/userDataSlice";
import resetPasword from "../slices/register_users_slices/resetPaswordSlice";
import resetPasswordConfirm from "../slices/register_users_slices/resetPasswordConfirmSlice";

// State -- Register user with google --
import authGoogle from "../slices/register_user_social_slices/authGoogle";
import loginGoogle from "../slices/register_user_social_slices/loginGoogle";

// State -- authenticated user data --
import blogsByUser from "../slices/dashboard_slices/blogsByUserSlice" 
import detailedUserBlog from "../slices/dashboard_slices/detailedUserBlogSlice";
import updateBlogUser from "../slices/dashboard_slices/updateBlogUserSlice";

export const store = configureStore({
  reducer: {
    // State -- Blog --
    category: category,
    allBlogs: allBlogs,
    blogTypeCategory: blogTypeCategory,
    blogDetail: blogDetail,
    searchBlog: searchBlog,

    // State -- Register user --
    createUser: createUser,
    resendEmail: resendEmail,
    activate: activateUser,
    JWTCreate: JWTCreate,
    JWTRefresh: JWTRefresh,
    JWTVerify: JWTVerify,
    resetPasword: resetPasword,
    resetPasswordConfirm: resetPasswordConfirm,
    userData: userData,
    
    // State -- Register with google --
    authGoogle: authGoogle,
    loginGoogle: loginGoogle,

    // State -- authenticated user data --
    blogsByUser : blogsByUser,
    detailedUserBlog : detailedUserBlog,
    updateBlogUser : updateBlogUser
  },
});
