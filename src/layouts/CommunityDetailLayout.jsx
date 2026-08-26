import { useSelector } from "react-redux";
import { NavLink, Outlet, useParams } from "react-router";
import { FiArrowLeft } from "react-icons/fi";
import TagBadge from "../components/TagBadge";

function CommunityDetailLayout() {
  const { id } = useParams();

  const communities = useSelector(
    (state) => state.communities.communities
  );

  const community = communities.find(
    (community) => community.id === Number(id)
  );

  if (!community) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Community not found</p>
      </div>
    );
  }

  const tabs = [
    {
      name: "Events",
      path: "events",
    },
    {
      name: "Members",
      path: "members",
    },
    {
      name: "Discussion",
      path: "discussion",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 pt-4">
        <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700">
          <FiArrowLeft />
          Back to Communities
        </button>
      </div>

      <div className="relative h-48 md:h-56 overflow-hidden flex items-end">
        <img
          src={community.image}
          alt={community.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative w-full flex items-end justify-between p-5">
          <div>
            <h1 className="text-white text-2xl font-bold">
              {community.name}
            </h1>

            <p className="text-gray-200 text-sm mt-1">
              {community.members.length} members ·{" "}
              {community.upcomingEvents} upcoming events
            </p>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors shrink-0">
            Join Community
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 mt-4">
        <div className="bg-white border border-gray-200 rounded-xl p-4">
          <p className="text-gray-600 text-sm mb-3">
            {community.description}
          </p>

          <div className="flex gap-2">
            {community.tags.map((tag) => (
              <TagBadge key={tag} label={tag} />
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 mt-5 border-b border-gray-200">
        <div className="flex gap-6">
          {tabs.map((tab) => (
            <NavLink
              key={tab.path}
              to={tab.path}
              className={({ isActive }) =>
                `pb-3 text-sm font-medium border-b-2 transition-colors ${
                  isActive
                    ? "border-orange-500 text-orange-500"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`
              }
            >
              {tab.name}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 py-5">
        <Outlet />
      </div>
    </div>
  );
}

export default CommunityDetailLayout
