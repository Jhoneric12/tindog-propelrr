import { RouterProvider, createBrowserRouter } from "react-router";
import LandingRoutes from "./pageRoutes/LandingRoutes";

const RootRoutes = () => {
  const router = createBrowserRouter([{ path: "/*", Component: LandingRoutes }]);

  return <RouterProvider router={router} />;
};

export default RootRoutes;
