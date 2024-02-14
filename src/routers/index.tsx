import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import Home from "@/pages/Home";
import Error from "@/pages/Error";
import OGTag from "@/pages/OGTag";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/tag",
        element: <OGTag />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default router;
