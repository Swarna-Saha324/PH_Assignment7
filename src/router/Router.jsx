import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Rootlayout from "../ulLayouts/Rootlayout";
import Homepage from "../ulLayouts/Homepage";
import Stats from "../ulLayouts/Stats";
import Timeline from "../ulLayouts/Timeline";
import Error from "../components/Error";
import FriendDetails from "../components/FriendDetails";


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
        },

        {
            path:"/friend/:id" ,
            element:<FriendDetails></FriendDetails>
        }

    ],
    errorElement: <Error></Error>

  },
]);