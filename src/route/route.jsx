import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../pages/main/Main";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [],
  },
]);

const Routes = () => {
  return <RouterProvider router={routes} />;
};

export default Routes;
