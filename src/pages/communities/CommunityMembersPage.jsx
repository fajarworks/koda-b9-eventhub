import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getCommunityMembers } from "../../redux/slices/communitySlices";

function CommunityMembersPage() {
  const { id } = useParams();
  const { communityMembers } = useSelector((state) => state.communities);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getCommunityMembers({ id }));
  }, [dispatch, id]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
      {communityMembers?.map((item) => (
        <div
          className="flex items-center gap-2 bg-white rounded-lg border border-gray-300 px-4 py-3"
          key={item.id}
        >
          <div className="w-7 h-7 rounded-full overflow-hidden bg-gray-400 shrink-0">
            {item.photo_profile ? (
              <img
                src={item.photo_profile}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-lg w-full h-full flex items-center justify-center capitalize text-white">
                {item.name?.charAt(0)}
              </span>
            )}
          </div>

          <div>
            <p className="font-medium">{item.name}</p>
            <p className="text-color-text">{item.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommunityMembersPage;
