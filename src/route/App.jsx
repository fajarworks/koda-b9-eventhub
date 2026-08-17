import { createBrowserRouter, Navigate } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "../layouts/MainLayout";
import EventPage from "../pages/events/EventPage";
import CommunitiesPage from "../pages/communities/CommunitiesPage";
import Login from "../pages/auth/Login";
import AuthLayout from "../layouts/AuthLayout";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ExplorePage from "../pages/explore/ExplorePage";
import EventDetailPage from "../pages/events/EventDetailPage";
import CommunityDetail from "../pages/communities/CommunityDetail";
import MyEventPage from "../pages/myevents/MyEventPage";
import ProfilePage from "../pages/profile/ProfilePage";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="events" replace />,
      },
      {
        path: "events",
        element: <EventPage />,
      },
      {
        path: "communities",
        element: <CommunitiesPage />,
      },
      {
        path: "explore",
        element: <ExplorePage/>
      },

      {
        path: "events/:id",
        element:<EventDetailPage/>
      },
      {
        path: "community/:id",
        element: <CommunityDetail/>
      },


    ],
  },

  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "my-events",
        element:<MyEventPage/>
      },
      {
        path: "profile",
        element:<ProfilePage/>
      }
    ]
  },

  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="login" replace/>
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register/>
      },
      {
        path: "forgot-password",
        element: <ForgotPassword/>
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
