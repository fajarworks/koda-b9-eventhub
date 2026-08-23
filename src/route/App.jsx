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
import NotificationPage from "../pages/profile/NotificationPage";
import OrganizerDashboard from "../pages/dashboard/OrganizerDashboard";
import CreateEvent from "../pages/CreateEvent";

function App() {
  return (
    <Routes>
      {/* Auth Router*/}
      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<Navigate to={"login"} replace />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot-password" element={<ForgotPassword/>}/>
      </Route>

      {/* Main Router*/}
      <Route path="/" element={<MainLayout />}>
        <Route path="organizer-dashboard" element={<OrganizerDashboard />} />
        <Route path="create-event" element={<CreateEvent/> } />
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
          <Route path="notifications" element={<NotificationPage/>}/>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
