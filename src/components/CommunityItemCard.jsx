import React from "react";
import { FiCalendar, FiUsers } from "react-icons/fi";
import { Link } from "react-router";
import useLocalStorage from "../hooks/useLocalStorage";
import ModalLoginALert from "./ModalLoginAlert";

function CommunityItemCard({ communities }) {
  const [userActive] = useLocalStorage("userActive", null)
  const [show, setShow] = React.useState(false)
  const handleJoinCommunity = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (!userActive) {
      setShow(true)
      return

}
  }
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
    <>
    <Link
      to={`/community/${communities.id}`}
      className="block h-full"
    >
      <article className="w-full max-w-sm h-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md flex flex-col">
        <div>
          <img
            src={communities.image}
            alt={communities.name}
            className="w-full h-48 object-cover"
          />
        </div>
        <div className="p-5 flex flex-col flex-1 gap-1">
          <div className="pb-2">
            <h1 className="font-semibold text-xl line-clamp-2">
              {communities.name}
            </h1>
          </div>
          <div className="text-color-text">
            <p className="line-clamp-3">
              {communities.description}
            </p>
          </div>
          <div className="flex gap-2 flex-wrap mt-2">
            {communities.tags.map((tag) => (
              <span
                key={tag}
                className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                  tagColors[tag] || "bg-gray-50 text-gray-700"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4 py-2 text-color-text">
            <span className="flex items-center gap-2">
              <FiUsers />
              {communities.members} members
            </span>
            <span className="flex items-center gap-2">
              <FiCalendar />
              {communities.upcomingEvents} Upcoming
            </span>
          </div>
          <div className="w-full flex items-center gap-2 py-2 mt-auto">
            <button onClick={handleJoinCommunity} className="w-full bg-primary px-3 py-1.5 text-white rounded-lg cursor-pointer">
              Join Community
            </button>
          </div>
        </div>
      </article>
      </Link>
      <ModalLoginALert show={show} setShow={setShow}/>
    </>
  );
}

export default CommunityItemCard;
