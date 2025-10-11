import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import LoginPage from "./Pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import ErrorPage from "./pages/404.jsx";
import ProdcutsPage from "./pages/products.jsx";
import ProfilePage from "./pages/profile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello Argumelar</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/products",
    element: <ProdcutsPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
