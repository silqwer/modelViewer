import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import Home from "@/pages/Home";
import Error from "@/pages/Error";
import OGTag from "@/pages/OGTag";
import OGTag1 from "@/pages/OGTag1";
import OGTag2 from "@/pages/OGTag2";

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
      {
        path: "/tag2",
        element: <OGTag2 />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default router;
