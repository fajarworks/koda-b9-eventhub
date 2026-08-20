import { Navigate, Route, Routes } from "react-router";
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

function App() {
  return (
    <Routes>
      {/* Auth Router*/}
      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<Navigate to={"login"} replace />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      {/* Main Router*/}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate to={"explore"} replace />} />
        <Route path="explore" element={<ExplorePage />} />
        <Route path="events">
          <Route index element={<EventPage />} />
          <Route path=":id" element={<EventDetailPage />} />
        </Route>
        <Route path="communities">
          <Route index element={<CommunitiesPage />} />
          <Route path=":id" element={<CommunityDetail />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="profile" element={<ProfilePage />} />
          <Route path="my-events" element={<MyEventPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
