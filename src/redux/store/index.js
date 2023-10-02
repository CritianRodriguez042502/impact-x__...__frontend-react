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
import allUsernames from "../slices/dashboard_slices/allUsernames";
import blogsByUser from "../slices/dashboard_slices/blogsByUserSlice";
import detailedUserBlog from "../slices/dashboard_slices/detailedUserBlogSlice";
import getUserBlogReactions from "../slices/dashboard_slices/getUserBlogReactionsSlice";
import updateBlogUser from "../slices/dashboard_slices/updateBlogUserSlice";
import createBlogUser from "../slices/dashboard_slices/createBlogUserSlice";
import deleteBlogUser from "../slices/dashboard_slices/deleteBlogUserslice";

// State -- Reactions Blogs --
import likeBlog from "../slices/reactions_slice/likeBlogSlice";
import commentsBlog from "../slices/reactions_slice/commentsBlogSlice";
import detailedCommentBlog from "../slices/reactions_slice/detailedCommentBlogSlice";
import getLikesBlog from "../slices/reactions_slice/getLikesBlogSlice";
import getComments from "../slices/reactions_slice/getCommentsSlice";


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
    allUsernames : allUsernames,
    blogsByUser: blogsByUser,
    detailedUserBlog: detailedUserBlog,
    getUserBlogReactions : getUserBlogReactions,
    createBlogUser: createBlogUser,
    updateBlogUser: updateBlogUser,
    deleteBlogUser: deleteBlogUser,

    // State -- Reactions Blogs --
    getLikesBlog: getLikesBlog,
    getComments: getComments,
    likeBlog: likeBlog,
    commentsBlog : commentsBlog,
    detailedCommentBlog : detailedCommentBlog,
  },
});
