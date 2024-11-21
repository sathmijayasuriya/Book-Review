import React from "react";
import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Landing from "../Views/Book/Landing";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Views/Auth/Login";
import Register from "../Views/Auth/Register";
import MyReviews from "../Views/Book/MyReviews";

const privateRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/review/my-reviews",
        element: <MyReviews />,
      },
      {
        path: "/auth/sign-in",
        element: <Login />,
      },
      {
        path: "/auth/sign-up/",
        element: <Register />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);
const authRouter = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/auth/sign-in",
        element: <Login />,
      },
      {
        path: "/auth/sign-up/",
        element: <Register />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

const Router = () => {
  const localStorageUser = JSON.parse(localStorage.getItem("user"));
  const user = localStorageUser ? localStorageUser : null;

  return user ? (
    <RouterProvider router={privateRouter} />
  ) : (
    <RouterProvider router={authRouter} />
    // <RouterProvider router={privateRouter} />

  );
};

export default Router;
