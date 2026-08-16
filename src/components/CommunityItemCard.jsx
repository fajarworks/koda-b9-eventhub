// import React from 'react';
import { FiCalendar, FiUsers } from "react-icons/fi";

function CommunityItemCard({ communities }) {
  const tagColors = {
    Technology: "bg-blue-50 text-blue-700",
    Workshop: "bg-purple-50 text-purple-700",
    Programming: "bg-green-50 text-green-700",
    Business: "bg-orange-50 text-orange-700",
    Design: "bg-pink-50 text-pink-700",
    Career: "bg-orange-50 text-orange-700",
    AI: "bg-blue-50 text-blue-700",
  };
  return (
    <article className="w-full max-w-sm overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div>
        <img src="/images/image1.png" alt="" className="" />
      </div>

      <div className="p-5 flex flex-col gap-0.5">
        <div className="pb-3">
          <h1 className="font-semibold text-xl">{communities.name}</h1>
        </div>
        <div className="text-color-text">
          <p>{communities.description}</p>
        </div>
        <div className="flex gap-2">
          {communities.tags.map((tag) => (
            <span
              key={tag}
              className={`rounded full  px-2.5 py-1 text-xs font-medium ${tagColors[tag]} || "bg-gray-50 text-gray-700"`}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2 py-2">
          <span className="flex items-center gap-2 text-color-text">
            <FiUsers /> {communities.members} members{" "}
          </span>
          <span className="flex items-center gap-2 text-color-text">
            <FiCalendar /> {communities.upcomingEvents} Upcoming{" "}
          </span>
        </div>
        <div className="w-full flex items-center gap-2 py-2">
          <button className="w-full bg-primary px-3 py-1.5 text-white rounded-lg cursor-pointer">
            Join Community
          </button>
        </div>
      </div>
    </article>
  );
}

export default CommunityItemCard;
