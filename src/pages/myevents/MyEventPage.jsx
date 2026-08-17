// import React from "react";
import { useState } from "react";
import events from "../../data/events.json";
import EventItemCard from "../../components/EventItemCard";

function MyEventPage() {
  const event = events.slice(0, 2);
  const past = events.slice(1, 2);
  const [activeTab, setActiveTab] = useState("Upcoming");
  const tabs = ["Upcoming", "Past", "Saved"];
  return (
    <div className="max-w-7xl p-4 mx-auto">
      <div>
        <h1 className="text-2xl font-medium">My Events</h1>
        <div className="max-w-7xl mx-auto px-4 mt-5 border-b border-gray-200">
          <div className="flex gap-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 text-sm font-medium border-b-2  ${
                  activeTab === tab
                    ? "border-primary text-primary"
                    : "border-transparent text-color-text"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div className="py-3">
          <div className="max-w-7xl mx-auto">
            {activeTab === "Upcoming" && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                {event.map((event) => (
                  <EventItemCard key={event.id} event={event} />
                ))}
              </div>
            )}
          </div>
          <div className="max-w-7xl mx-auto">
            {activeTab === "Past" && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                {past.map((event) => (
                  <EventItemCard key={event.id} event={event} />
                ))}
              </div>
            )}
          </div>
          <div className="">
            {activeTab === "Saved" && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                {event.map((event) => (
                  <EventItemCard key={event.id} event={event} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyEventPage;
