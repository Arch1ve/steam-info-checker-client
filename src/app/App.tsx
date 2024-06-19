import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage, LoginPage, RegistrationPage } from "../pages";

export const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to={"/home"} replace={true}/>,
    },
    {
      path: "/home",
      element: <HomePage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegistrationPage />,
    },
  ]);

  return (
      <RouterProvider router={router} />
  )
}