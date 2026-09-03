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
// import CommunityDetail from "../pages/communities/CommunityDetail";
// import MyEventPage from "../pages/myevents/MyEventPage";
// import ProfilePage from "../pages/profile/ProfilePage";
import ProtectedRoute from "./ProtectedRoute";
import NotificationPage from "../pages/profile/NotificationPage";
import OrganizerDashboard from "../pages/dashboard/OrganizerDashboard";
import CreateEvent from "../pages/CreateEvent";
import CreateEventLayout from "../layouts/CreateEventLayout";
import CreateEvent2 from "../pages/CreateEvent2";
import CreateEvent3 from "../pages/CreateEvent3";
import CreateEventSuccess from "../pages/CreateEventSuccess";
import MyEventLayout from "../layouts/MyEventLayout";
import UpcomingEventPage from "../pages/myevents/UpcomingEventPage";
import SavedEventPage from "../pages/myevents/SavedEventPage";
import PastEventPage from "../pages/myevents/PastEventPage";
import CommunityDetailLayout from "../layouts/CommunityDetailLayout";
import CommunityEventsPage from "../pages/communities/CommunityEventsPage";
import CommunityMembersPage from "../pages/communities/CommunityMembersPage";
import ProfileLayout from "../layouts/ProfileLayout";
import ProfileEventPage from "../pages/profile/ProfileEventPage";
import ProfileCommunityPage from "../pages/profile/ProfileCommunityPage";
import ProfileEventSaved from "../pages/profile/ProfileEventSaved";
import NotFoundPage from "../pages/NotFoundPage";
import AdminDashboardLayout from "../layouts/AdminDashboardLayout";
import AdminOverviewDashboard from "../pages/dashboard/AdminOverviewDashboard";
import AdminUsersDashboard from "../pages/dashboard/AdminUsersDashboard";
import AdminCommunitiesDashboard from "../pages/dashboard/AdminCommunitiesDashboard";
import AdminEventsDashboard from "../pages/dashboard/AdminEventsDashboard";

function App() {
  return (
    <Routes>
      {/* Auth Router*/}
      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<Navigate to={"login"} replace />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
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

          <Route path=":id" element={<CommunityDetailLayout />}>
            <Route index element={<Navigate to="events" replace />} />
            <Route path="events" element={<CommunityEventsPage />} />
            <Route path="members" element={<CommunityMembersPage />} />
            {/* <Route
              path="discussion"
              element={<CommunityDiscussionPage />}
            />*/}
          </Route>
        </Route>
   <Route element={<ProtectedRoute />}>
  <Route path="profile" element={<ProfileLayout />}>
    <Route index element={<Navigate to="events" replace />} />
    <Route path="events" element={<ProfileEventPage />} />
    <Route path="communities" element={<ProfileCommunityPage />} />
    <Route path="saved" element={<ProfileEventSaved />} />
  </Route>
        <Route path="my-events" element={<MyEventLayout />}>
          <Route index element={<Navigate to="upcoming" replace />} />
          <Route path="upcoming" element={<UpcomingEventPage />} />
          <Route path="past" element={<PastEventPage />} />
          <Route path="saved" element={<SavedEventPage />} />
        </Route>

  <Route path="notifications" element={<NotificationPage />} />
</Route>

              <Route element={<ProtectedRoute allowedRoles={["organizer", "admin"]}/>}>
        <Route path="organizer-dashboard" element={<OrganizerDashboard />} />
        <Route path="create-event" element={<CreateEventLayout />}>
          <Route path="1" element={<CreateEvent />} />
          <Route path="2" element={<CreateEvent2 />} />
          <Route path="3" element={<CreateEvent3 />} />
        </Route>

        <Route path="create-event-success" element={<CreateEventSuccess />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="admin-dashboard" element={<AdminDashboardLayout />}>
          <Route index element={ <Navigate to="overview" replace /> } />
          <Route path="overview" element={<AdminOverviewDashboard />} />
          <Route path="users" element={<AdminUsersDashboard />} />
          <Route path="communities" element={<AdminCommunitiesDashboard />} />
          <Route path="events" element={<AdminEventsDashboard />} />
        </Route>
              </Route>

      </Route>
    </Routes>
  );
}

export default App;
