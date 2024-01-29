import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import Layout from "../layout/Layout";
import Homepage from "../pages/Homepage";
import Friend from "../pages/Friend";
import { RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Homepage />,
      },
      {
        path: "Friend",
        element: <Friend />,
      },
    ],
  },
]);
export default function Router() {
  return <RouterProvider router={router} />;
}
