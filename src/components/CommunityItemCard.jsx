import React from "react";
import { FiCalendar, FiCheck, FiUsers } from "react-icons/fi";
import { Link } from "react-router";
import ModalLoginALert from "./ModalLoginAlert";
import TagBadge from "./TagBadge";
import { useDispatch, useSelector } from "react-redux";
import { JoinCommunitiesThunk, unJoinedCommunitiesThunk } from "../redux/slices/communitySlices";

function CommunityItemCard({ communities }) {
  const [show, setShow] = React.useState(false);
  const isLoggedIn = useSelector(state => state.auth.auth)
  const dispatch = useDispatch()
  const isJoined = communities.members.includes(isLoggedIn?.email)
  const handleJoinCommunity = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isLoggedIn) {
      setShow(true);
      return;
    }
    if (!isJoined) {
      dispatch(JoinCommunitiesThunk({
        communityId: communities.id,
        userEmail: isLoggedIn.email
      }))
    } else {
      dispatch(unJoinedCommunitiesThunk({
        communityId: communities.id,
        userEmail: isLoggedIn.email
      }))
    }
  };

  return (
    <>
      <Link to={`/communities/${communities.id}`} className="block h-full">
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
              <p className="line-clamp-3">{communities.description}</p>
            </div>
            <div className="flex gap-2 flex-wrap mt-2">
              {communities.tags.map((tag) => (
                <TagBadge key={tag} label={tag} />
              ))}
            </div>
            <div className="flex items-center gap-4 py-2 text-color-text">
              <span className="flex items-center gap-2">
                <FiUsers />
                {communities.members.length} members
              </span>
              <span className="flex items-center gap-2">
                <FiCalendar />
                {communities.upcomingEvents} Upcoming
              </span>
            </div>
            <div className="w-full flex items-center gap-2 py-2 mt-auto">
              <button
                onClick={handleJoinCommunity}
                className={` w-full flex items-center justify-center gap-2  px-3 py-1.5 rounded-lg text-white cursor-pointer ${isJoined ? "bg-green-500" : "bg-primary"}`}
              >
                <FiCheck className={`${isJoined ? "block" : "hidden"}`} size={21} />
                {isJoined ? "Joined" : "Join Community"  }
              </button>
            </div>
          </div>
        </article>
      </Link>
      <ModalLoginALert show={show} setShow={setShow} />
    </>
  );
}

export default CommunityItemCard;
