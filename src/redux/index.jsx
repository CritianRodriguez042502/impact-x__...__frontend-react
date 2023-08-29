// Export Redux

// Export store
export { store } from "./store/index";

// Export Api calls -- Blog --
export { axiosCategorys } from "./slices/blog_slices/categorysSlice";
export { axiosAllBlogs } from "./slices/blog_slices/allBlogs";
export { axiosBlogTypeCategory } from "./slices/blog_slices/blogTypeCategorySlice";
export { axiosBlogDetail } from "./slices/blog_slices/blogDetailSlice";
export { axiosSearchBlogs } from "./slices/blog_slices/searchBlogSlice";

// Export Api -- Register user --
export { axiosCreateUser } from "./slices/register_users_slices/createUserSlice";
export { axiosResendEmail } from "./slices/register_users_slices/resendCorreoSlice";
export { axiosActivationUser } from "./slices/register_users_slices/activationSlice";
export { axiosJWTCreate } from "../redux/slices/register_users_slices/JWTCreate";
export { axiosJWTRefresh } from "./slices/register_users_slices/JWTRefresh";
