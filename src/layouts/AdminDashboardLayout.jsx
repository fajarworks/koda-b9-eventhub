import React from "react";
import { NavLink, Outlet } from "react-router";
import { FiShield, FiUsers, FiCalendar } from "react-icons/fi";

function AdminDashboardLayout() {
  const tabs = [
    {
      name: "Overview",
      path: "overview",
      icon: FiShield,
    },
    {
      name: "Users",
      path: "users",
      icon: FiUsers,
    },
    {
      name: "Events",
      path: "events",
      icon: FiCalendar,
    },
    {
      name: "Communities",
      path: "communities",
      icon : FiUsers
    },
  ];

  return (
    <main className="min-h-screen max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mt-8">
        <div className="bg-orange-100 text-orange-300 p-2 rounded-xl">
        <FiShield size={24} />
        </div>
        <div>
          <h1 className="text-2xl font-medium">Admin Dashboard</h1>
          <p className="text-color-text">Platform management and moderation</p>
        </div>
      </div>
      <div>
        <div className="px-4 mt-6 border-b border-gray-200">
          <div className="flex items-center overflow-scroll">
            {tabs.map((tab) => {
                const Icons = tab.icon
              return (
                <NavLink
                  key={tab.path}
                  to={tab.path}
                  className={({ isActive }) =>
                    `px-3 py-1.5  text-ellipsis  text-sm font-medium border-b-2 flex items-center gap-2 transition-colors ${
                      isActive
                        ? "border-orange-500 text-orange-500 bg-orange-50"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    }`
                  }
                >
                  <Icons />
                  {tab.name}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
      <Outlet/>
    </main>
  );
}

export default AdminDashboardLayout;
