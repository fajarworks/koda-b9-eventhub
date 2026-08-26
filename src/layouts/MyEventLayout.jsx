import { NavLink, Outlet } from "react-router";

function MyEventLayout() {
  const tabs = [
    {
      name: "Upcoming",
      path: "/my-events/upcoming",
    },
    {
      name: "Past",
      path: "/my-events/past",
    },
    {
      name: "Saved",
      path: "/my-events/saved",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-medium">
        My Events
      </h1>

      <div className=" mt-5 border-b border-gray-200">
        <div className=" flex gap-6">
          {tabs.map((tab) => (
            <NavLink
              key={tab.path}
              to={tab.path}
              className={({ isActive }) =>
                `pb-3 text-sm font-medium border-b-2 ${
                  isActive
                    ? "border-primary text-primary"
                    : "border-transparent text-color-text"
                }`
              }
            >
              {tab.name}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="py-4">
        <Outlet />
      </div>
    </div>
  );
}

export default MyEventLayout;
