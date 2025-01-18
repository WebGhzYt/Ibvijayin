import { lazy } from "react";
const Home = lazy(() => import("../Pages/Home"));
const Login = lazy(() => import("../Pages/Login"));
const Signup = lazy(() => import("../Pages/SignUp"));
const Otp = lazy(() => import("../Pages/Otp"));
const ListingCourse = lazy(() => import("../Pages/ListingCourse"));
const CourseDetails = lazy(() => import("../Pages/CourseDetails"));
const About = lazy(() => import("../Pages/About"));
const BlogListing = lazy(() => import("../Pages/BlogListing"));
const BlogDetails = lazy(() => import("../Pages/BlogDetails"));
const Privacy = lazy(() => import("../Pages/Privacy"));
const Terms = lazy(() => import("../Pages/Terms"));
const Contact = lazy(() => import("../Pages/Contact"));
const Faq = lazy(() => import("../Pages/Faq"));
const RefundPrivacy = lazy(() => import("../Pages/RefundPrivacy"));

export const SITE_FOLDER = 'front';
export const publicRoutes = [
  { path: `/login`, element: Login },
  { path: `/otp/:id`, element: Otp },
  { path: `/signup`, element: Signup },
  { path: `/`, element: Home },
  { path: `/about`, element: About },
  { path: `/course`, element: ListingCourse },
  { path: `/course/details/:id`, element: CourseDetails },
  { path: `/privacy`, element: Privacy },
  { path: `/terms`, element: Terms },
  { path: `/contact`, element: Contact },
  { path: `/faq`, element: Faq },
  { path: `/refund-privacy`, element: RefundPrivacy },
];
export const privateRoutes = [
  { path: `/home`, element: Home },
  { path: `/`, element: Home },
  { path: `/course`, element: ListingCourse },
  { path: `/course/details/:id`, element: CourseDetails },
  { path: `/about`, element: About },
  { path: `/blog`, element: BlogListing },
  { path: `/blog/details/:id`, element: BlogDetails },
  { path: `/privacy`, element: Privacy },
  { path: `/terms`, element: Terms },
  { path: `/contact`, element: Contact },
  { path: `/faq`, element: Faq },
  { path: `/refund-privacy`, element: RefundPrivacy },
];
