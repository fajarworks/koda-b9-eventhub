import React from "react";
import { CiEdit } from "react-icons/ci";
import {
  FiCalendar,
  FiEye,
  FiPlus,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";
import EventChart from "../../components/EventChart";
import { IoBarChartOutline } from "react-icons/io5";
import { Link } from "react-router";

function OrganizerDashboard() {
  return (
    <div className="py-8 px-4">
      <div className="max-w-7xl   mx-auto">
        <div className="flex flex-col lg:items-center lg:flex-row lg:justify-between">
          <div className="mb-4">
            <h1 className="text-2xl font-semibold">Organizer Dashboard</h1>
            <p className="text-color-text">
              Manage your events and track performance.
            </p>
          </div>
          <div>
            <Link
              to="/create-event/1"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg cursor-pointer"
            >
              <FiPlus /> Create Event
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 mt-8">
          <div className="bg-white rounded-2xl border border-gray-300">
            <div className="p-4 flex flex-col h-full">
              <div className="text-color-text flex justify-between items-center">
                <p>TOTAL EVENTS</p>
                <FiCalendar />
              </div>
              <div className="mt-auto">
                <p className="text-xl font-semibold">2</p>
                <p>All time</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-300">
            <div className="p-4 flex flex-col h-full">
              <div className="text-color-text flex justify-between items-center">
                <p>TOTAL ATTENDEES</p>
                <FiUsers />
              </div>
              <div className="mt-auto">
                <p className="text-xl font-semibold">103</p>
                <p>Across all events</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-300">
            <div className="p-4 flex flex-col h-full">
              <div className="text-color-text flex justify-between items-center">
                <p>AVG FILL RATE</p>
                <FiTrendingUp />
              </div>
              <div className="mt-auto">
                <p className="text-xl font-semibold">57%</p>
                <p>Capacity Utilization</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-300">
            <div className="p-4 flex flex-col h-full">
              <div className="text-color-text flex justify-between items-center">
                <p>EVENTS VIEWS</p>
                <FiEye />
              </div>
              <div className="mt-auto">
                <p className="text-xl font-semibold">3.241</p>
                <p>Last 30 days</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8">
          <div className="lg:col-span-2">
            <h2 className="font-medium text-xl mb-3">Your Events</h2>
            <div className="flex flex-col gap-4">
              <div className="p-4 bg-white rounded-2xl border border-gray-300 shadow-md">
                <div className="flex gap-2">
                  <div className="p-2">
                    <img
                      className="w-40 h-20 object-cover rounded-lg"
                      src="/images/image1.png"
                      alt="Event"
                    />
                  </div>
                  <div className="w-full">
                    <p className="font-medium text-lg">
                      Go Concurency Workshop
                    </p>
                    <p>Aug 22, 2026 · Bandung</p>
                    <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded-full">
                      Active
                    </span>
                    <div className="flex items-center justify-between my-2">
                      <span className="text-color-text">48 attendees</span>

                      <span className="text-color-text">100 capacity</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: "48%" }}
                      />
                    </div>

                    <div className="flex items-center gap-3 my-3">
                      <button className="flex items-center gap-2 cursor-pointer px-3 py-1 bg-white border border-gray-300 rounded-lg">
                        <CiEdit /> Edit
                      </button>

                      <div className="flex items-center gap-2">
                        <FiEye />
                        <p>55 attendees</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-gray-300 shadow-md">
                <div className="flex gap-2">
                  <div className="p-2">
                    <img
                      className="w-40 h-20 object-cover rounded-lg"
                      src="/images/image1.png"
                      alt="Event"
                    />
                  </div>

                  <div className="w-full">
                    <p className="font-medium text-lg">
                      Go Concurency Workshop
                    </p>

                    <p>Aug 22, 2026 · Bandung</p>

                    <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded-full">
                      Active
                    </span>

                    <div className="flex items-center justify-between my-2">
                      <span className="text-color-text">48 attendees</span>

                      <span className="text-color-text">100 capacity</span>
                    </div>

                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: "48%" }}
                      />
                    </div>

                    <div className="flex items-center gap-3 my-3">
                      <button className="flex items-center gap-2 cursor-pointer px-3 py-1 bg-white border border-gray-300 rounded-lg">
                        <CiEdit /> Edit
                      </button>

                      <div className="flex items-center gap-2">
                        <FiEye />
                        <p>55 attendees</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-white border border-gray-300 rounded-2xl p-4">
              <div className="flex items-center gap-2">
                <IoBarChartOutline size={20} />
                <h3 className="font-medium">Registrations (6 months)</h3>
              </div>
              <EventChart />
            </div>
            <div className="bg-white border border-gray-300 rounded-2xl p-4">
              <h3 className="font-medium mb-3">Quick Actions</h3>
              <div className="flex flex-col gap-2">
                <button className="flex items-center justify-center gap-2  bg-primary text-white py-2 rounded-lg cursor-pointer">
                  <FiPlus /> Create New Event
                </button>
                <button className="flex items-center gap-2 justify-center bg-gray-100 py-2 rounded-lg cursor-pointer">
                  <FiEye /> Preview as Attendee
                </button>
              </div>
            </div>
            <div className="bg-white border border-gray-300 rounded-2xl p-4">
              <h3 className="font-medium mb-3">Upcoming Events</h3>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm">Go Concurency Workshop</p>
                    <p className="text-xs text-color-text">Aug 22, 2026</p>
                  </div>

                  <span className="text-xs">48/100</span>
                </div>

                <div className="flex justify-between">
                  <div>
                    <p className="text-sm">Kubernetes Workshop</p>
                    <p className="text-xs text-color-text">Sep 12, 2026</p>
                  </div>
                  <span className="text-xs">55/80</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrganizerDashboard;
