import PrivateRoute from "components/PrivateRoute";
import MainLayout from "pages/layout";
import Home from "../src/pages/home";
import ProfileLayout from "pages/profile";
import ProfilePosts from "pages/profile/posts";
import ProfileTagged from "pages/profile/tagged";
import Login from "pages/auth/login";
import Register from "../src/pages/auth/Register";
import AuthLayout from "pages/auth";
import Logout from "pages/logout";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    auth: true,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "logout",
        element: <Logout />,
      },
      {
        path: ":username",
        element: <ProfileLayout />,
        children: [
          {
            index: true,
            element: <ProfilePosts />,
          },
          {
            path: "tagged",
            element: <ProfileTagged />,
          },
        ],
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
];

const authCheck = (routes) =>
  routes.map((route) => {
    if (route?.auth) {
      route.element = <PrivateRoute>{route.element}</PrivateRoute>;
    }
    if (route?.children) {
      route.children = authCheck(route.children);
    }
    return route;
  });

export default authCheck(routes);
