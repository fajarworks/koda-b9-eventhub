import React from "react";
import { FiCalendar, FiFlag, FiTrendingUp, FiUser, FiUsers } from "react-icons/fi";

function AdminOverviewDashboard() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 mt-8">
        <div className="bg-white rounded-2xl border border-gray-300">
          <div className="p-4 flex flex-col h-full">
            <div className="text-color-text flex justify-between items-center">
              <p>TOTAL USERS</p>
              <FiUsers/>
            </div>
            <div className="mt-auto">
              <p className="text-xl font-semibold">12841</p>
              <p>+284 this Monts</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-gray-300">
          <div className="p-4 flex flex-col h-full">
            <div className="text-color-text flex justify-between items-center">
              <p>TOTAL EVENTS</p>
              <FiCalendar />
            </div>
            <div className="mt-auto">
              <p className="text-xl font-semibold">12</p>
              <p>8 upcoming</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-gray-300">
          <div className="p-4 flex flex-col h-full">
            <div className="text-color-text flex justify-between items-center">
              <p>COMMUNITIES</p>
              <FiUsers />
            </div>
            <div className="mt-auto">
              <p className="text-xl font-semibold">57%</p>
              <p>All active</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-gray-300">
          <div className="p-4 flex flex-col h-full">
            <div className="text-color-text flex justify-between items-center">
              <p>AVG FILL RATE</p>
              <FiFlag />
            </div>
            <div className="mt-auto">
              <p className="text-xl font-semibold">3.241</p>
              <p>Across All Events</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-5 rounded-lg border border-gray-300 mt-4">
        <p className="font-medium">Recent Platform Activity</p>
        <div className="flex items-center justify-between p-2">
          <div className="flex items-center gap-2">
            <FiUsers />
            <p>284 new users registered this month</p>
          </div>
          <div>
            Today
          </div>
        </div>
        <div className="flex items-center justify-between p-2">
          <div className="flex items-center gap-2">
            <FiUsers />
            <p>284 new users registered this month</p>
          </div>
          <div>
            Today
          </div>
        </div>
        <div className="flex items-center justify-between p-2">
          <div className="flex items-center gap-2">
            <FiUsers />
            <p>284 new users registered this month</p>
          </div>
          <div>
            Today
          </div>
        </div>
        <div className="flex items-center justify-between p-2">
          <div className="flex items-center gap-2">
            <FiUsers />
            <p>284 new users registered this month</p>
          </div>
          <div>
            Today
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminOverviewDashboard;
