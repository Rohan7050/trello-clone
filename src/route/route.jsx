import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../pages/main/Main";
import LoginPage from "../pages/loginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import { Welcome } from "../pages/welcome/Welcome";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Welcome/>
      },
      {
        path: 'login',
        element: <LoginPage/>
      },
      {
        path: 'register',
        element: <RegisterPage/>
      }
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={routes} />;
};

export default Routes;
