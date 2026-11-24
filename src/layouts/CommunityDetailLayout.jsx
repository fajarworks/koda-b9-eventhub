import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, Outlet, useParams } from "react-router";
import { FiArrowLeft, FiCheck } from "react-icons/fi";
import TagBadge from "../components/TagBadge";
import { useAuth } from "../hooks/useAuth";
import { useEffect, useState } from "react";
import {
  GetDetailCommunity,
  JoinCommunitiesThunk,
  leaveCommunitiesThunk,
} from "../redux/slices/communitySlices";
import ModalLoginALert from "../components/ModalLoginAlert";

function CommunityDetailLayout() {
  const { id } = useParams();
  const { isAuthenticated } = useAuth();
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const { communityDetail } = useSelector((state) => state.communities);
  const { joinedCommunityIds, joinCommunity, leaveCommunity } = useSelector(
    (state) => state.communities,
  );
  const isLoading = joinCommunity.isPending || leaveCommunity.isPending
  useEffect(() => {
    dispatch(GetDetailCommunity(id));
  }, [dispatch, id]);
  const isJoined = joinedCommunityIds.includes(Number(id))
  const handleJoinCommunity = (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (!isAuthenticated) {
        setShow(true);
        return;
      }
      if (!isJoined) {
        dispatch(JoinCommunitiesThunk({communityId:id}))
      } else {
        dispatch(leaveCommunitiesThunk({communityId:id}))
      }
  };

  if (!communityDetail?.data) {
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
      <div className="px-4 pt-4">
        <Link
          to="/communities"
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700"
        >
          <FiArrowLeft />
          Back to Communities
        </Link>
      </div>

      <div className="relative h-48 md:h-72 overflow-hidden flex items-end">
        <img
          src={communityDetail?.data?.image}
          alt={communityDetail?.data?.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative w-full flex items-end justify-between p-5">
          <div>
            <h1 className="text-white text-2xl font-bold">
              {communityDetail?.data?.name}
            </h1>

            <p className="text-gray-200 text-sm lg:text-[16px] mt-1">
              {communityDetail?.data?.members} members ·{" "}
              {communityDetail?.data?.upcoming_events} upcoming events
            </p>
          </div>
          <button
          disabled={isLoading}
            onClick={handleJoinCommunity}
             className={`  flex items-center justify-center gap-2  px-3 py-1.5 rounded-lg text-white cursor-pointer ${isJoined ? "bg-green-500" : "bg-primary"}`}
          >
            <FiCheck className={`${isJoined ? "block" : "hidden"}`} size={21} />
            {isJoined ? "Joined" : "Join Community"  }
          </button>
        </div>
      </div>

      <div className="px-4 mt-4">
        <div className="bg-white border border-gray-200 rounded-xl p-4">
          <p className="text-gray-600 text-sm lg:text-lg mb-3">
            {communityDetail?.data?.description}
          </p>

          <div className="flex gap-2">
            {communityDetail?.data?.categories?.map((tag) => (
              <TagBadge key={tag} label={tag} />
            ))}
          </div>
        </div>
      </div>
      <div className="px-4 mt-5 border-b border-gray-200">
        <div className="flex gap-6">
          {tabs.map((tab) => (
            <NavLink
              key={tab.path}
              to={tab.path}
              className={({ isActive }) =>
                `pb-3 text-sm lg:text-[16px] font-medium border-b-2 transition-colors ${
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
      <div className="px-4 py-5">
        <Outlet />
      </div>
      <ModalLoginALert show={show} setShow={setShow} />
    </div>
  );
}

export default CommunityDetailLayout;
