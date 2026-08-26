import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

function CommunityMembersPage() {
  const { id } = useParams();

  const communities = useSelector((state) => state.communities.communities);
  const community = communities.find((c) => c.id === Number(id));
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
      {community.memberList.map((item) => {
        return (
          <div className="flex items-center gap-2 bg-white rounded-lg border border-gray-300 px-4 py-3" key={item.id}>
            <div className="w-7 h-7 rounded-full overflow-hidden">
              <img src={item.avatar} alt={item.name} />
            </div>
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-color-text">{item.role}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CommunityMembersPage;
