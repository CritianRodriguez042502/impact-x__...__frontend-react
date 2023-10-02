// Export Redux

// Export store
export { store } from "./store/index";

// Export Apis calls -- Blog --
export { axiosCategorys } from "./slices/blog_slices/categorysSlice";
export { axiosAllBlogs } from "./slices/blog_slices/allBlogs";
export { axiosBlogTypeCategory } from "./slices/blog_slices/blogTypeCategorySlice";
export { axiosBlogDetail } from "./slices/blog_slices/blogDetailSlice";
export { axiosSearchBlogs } from "./slices/blog_slices/searchBlogSlice";

// Export Apis -- Register user --
export { axiosCreateUser } from "./slices/register_users_slices/createUserSlice";
export { axiosResendEmail } from "./slices/register_users_slices/resendCorreoSlice";
export { axiosActivationUser } from "./slices/register_users_slices/activationSlice";
export { axiosJWTCreate } from "../redux/slices/register_users_slices/JWTCreate";
export { axiosJWTRefresh } from "./slices/register_users_slices/JWTRefresh";
export { axiosJWTVerify } from "./slices/register_users_slices/JWTVerify";
export { axiosUserData } from "./slices/register_users_slices/userDataSlice";
export { axiosResetPassword } from "./slices/register_users_slices/resetPaswordSlice";
export { axiosResetPasswordConfirm } from "./slices/register_users_slices/resetPasswordConfirmSlice";

// Export apis --Register user Google --
export { axiosAuthGoogle } from "./slices/register_user_social_slices/authGoogle";
export { axiosLoginGoogle } from "./slices/register_user_social_slices/loginGoogle";

// Export apis  -- authenticated user data --
export { axiosAllUsernames } from "./slices/dashboard_slices/allUsernames";
export { axiosBlogsByUser } from "./slices/dashboard_slices/blogsByUserSlice";
export { axiosDetailedUserBlog } from "./slices/dashboard_slices/detailedUserBlogSlice";
export { axiosGetUserBlogReactions } from "./slices/dashboard_slices/getUserBlogReactionsSlice";
export { axiosUpdateBlogUser } from "./slices/dashboard_slices/updateBlogUserSlice";
export { axiosCreateBlogUser } from "./slices/dashboard_slices/createBlogUserSlice";
export { axiosDeleteBlogUser } from "./slices/dashboard_slices/deleteBlogUserslice";

// Export apis  -- Reactions blogs --
export { axiosLikeBlog } from "./slices/reactions_slice/likeBlogSlice";
export { axiosGetLikesBlog } from "./slices/reactions_slice/getLikesBlogSlice";
export { axiosGetCommentsBlog } from "./slices/reactions_slice/getCommentsSlice";
export { axiosCommentsBlog } from "./slices/reactions_slice/commentsBlogSlice";
export { axiosDetailedCommentsBlog } from "./slices/reactions_slice/detailedCommentBlogSlice";
