import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Rootlayout from "../ulLayouts/Rootlayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout></Rootlayout>,
    children: [
        {
            path:"/",
            element: <h1>card</h1>
        },
        {
            path:"/timeline",
            element: <h1>Timeline</h1>
        },

        {
          path:"/rechart",
            element: <h1>rechart</h1>
        }
    ]

  },
]);