import React from "react";
import { RiCheckDoubleFill } from "react-icons/ri";

function NotificationPage() {
  const [active, setActive] = React.useState("all");

  return (
    <main className="min-h-screen">
      <section className="px-6 bg-white py-3 border-b border-b-gray-300">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <h1 className="font-bold text-3xl">Notifications</h1>
            <span className="bg-orange-500 text-orange-50 px-3 py-0.5 rounded-full font-medium">
              3
            </span>
          </div>
          <p className="text-color-text">
            Stay Up to date with your events and communities.
          </p>
          <div className="pt-2">
            <button
              type="button"
              className="flex items-center gap-2 px-3 py-1.5 border border-gray-300 rounded-lg text-color-text hover:bg-gray-100 cursor-pointer"
            >
              <RiCheckDoubleFill />
              Mark all as read
            </button>
          </div>
          <div className="flex gap-2 pt-2">
            <button
              onClick={() => setActive("all")}
              className={`px-3 py-1.5 rounded-lg cursor-pointer ${active === "all" ? "bg-orange-500 text-white" : "bg-white border border-gray-300"}`}
            >
              All
            </button>
            <button
              onClick={() => setActive("unread")}
              className={`px-3 py-1.5 rounded-lg cursor-pointer ${active === "unread" ? "bg-orange-500 text-white" : "bg-white border border-gray-300"}`}
            >
              Unread
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default NotificationPage;
