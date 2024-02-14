import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import Home from "@/pages/Home";
import Error from "@/pages/Error";
import OGTag from "@/pages/OGTag";
import OGTag1 from "@/pages/OGTag1";

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
      {
        path: "/tag1",
        element: <OGTag1 />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default router;
