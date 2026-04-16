import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Rootlayout from "../ulLayouts/Rootlayout";
import Homepage from "../ulLayouts/Homepage";
import Stats from "../ulLayouts/Stats";
import Timeline from "../ulLayouts/Timeline";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout></Rootlayout>,
    children: [
        {
            path:"/",
            element: <Homepage></Homepage>
        },
        {
            path:"/timeline",
            element: <Timeline></Timeline>
        },

        {
          path:"/stats",
            element: <Stats></Stats>
        }
    ],
    errorElement: <h2>error</h2>

  },
]);