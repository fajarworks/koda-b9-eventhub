import { useState } from "react";
import events from "../../data/events.json";
import { FiArrowLeft } from "react-icons/fi";
import EventItemCard from "../../components/EventItemCard";
import TagBadge from "../../components/TagBadge";
import { useParams } from "react-router";
import communities from "../../data/communities.json";

export default function CommunityDetail() {
  const [activeTab, setActiveTab] = useState("Events");
  const { id } = useParams();
  const community = communities.find((c) => c.id === id);

  const filteredEvents = events.filter(
    (e) => e.title === "Go Concurrency Workshop",
  );

  const tabs = ["Events", "Members", "Discussion"];
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 pt-4">
        <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700">
          <FiArrowLeft />
          Back to Communities
        </button>
      </div>
      <div className=" mx-auto mt-3">
        <div className="relative h-48 md:h-56  overflow-hidden bg-gray-900 flex items-end">

          <div className="w-full flex items-end justify-between p-5">
            <div>
              <h1 className="text-white text-2xl font-bold">
                {community.name}
              </h1>
              <p className="text-gray-200 text-sm mt-1">
                {community.members.toLocaleString()} members ·{" "}
                {community.upcomingEvents} upcoming events
              </p>
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors shrink-0">
              Join Community
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 mt-4">
        <div className="bg-white border border-gray-200 rounded-xl p-4">
          <p className="text-gray-600 text-sm mb-3">{community.description}</p>
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
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab
                  ? "border-orange-500 text-orange-500"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-5">
        {activeTab === "Events" && (
          <>
            <h2 className="text-xs font-semibold text-gray-400 mb-3">
              UPCOMING
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredEvents.map((event) => (
                <EventItemCard key={event.id} event={event} />
              ))}
            </div>
          </>
        )}

        {activeTab === "Members" && (
          <p className="text-sm text-gray-400">
            Members list belum ada, tinggal lu isi.
          </p>
        )}

        {activeTab === "Discussion" && (
          <p className="text-sm text-gray-400">
            Discussion belum ada, tinggal lu isi.
          </p>
        )}
      </div>
    </div>
  );
}
