import React from "react";
import { FiMoreHorizontal, FiSearch } from "react-icons/fi";

function AdminUsersDashboard() {
  return (
    <div className="p-4">
      <form action="flex flex-col">
        <div className="flex items-center relative">
          <FiSearch className="self-center absolute text-gray-500 left-2" />
          <input
            className="w-full border border-gray-300 rounded-lg bg-white px-3 py-2.5 pl-8 focus:outline-orange-500"
            type="text"
            name="search"
            id="search"
            placeholder="Search users..."
          />
        </div>
        <div className="overflow-hidden rounded-lg border border-gray-300 mt-4">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="px-4 py-3 text-left font-medium text-gray-500">
                  USER
                </th>
                <th className="px-4 py-3 text-left font-medium text-gray-500">
                  ROLE
                </th>

                <th className="px-4 py-3 text-left font-medium text-gray-500">
                  STATUS
                </th>
                <th className="px-4 py-3 text-left font-medium text-gray-500">
                  JOINED
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-3">
                  <div className="flex flex-col">
                    <span className="font-medium">Alex Kim</span>
                    <span className="text-sm text-gray-500">
                      Alexkim@example.com
                    </span>
                  </div>
                </td>

                <td>
                  <span className="rounded-full bg-red-100 px-2 py-0.5 text-sm text-red-500">
                    Organizer
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="rounded-full bg-green-100 px-2 py-0.5 text-sm text-green-500">
                    Active
                  </span>
                </td>
                <td className="px-4 py-3 ">
                  <span className="text-gray-500">Mar 25</span>
                </td>
                <td className="px-4 py-3 ">
                  <button type="button" className="cursor-pointer">
                    <FiMoreHorizontal />
                  </button>
                </td>
              </tr>

              <tr className="">
                <td className="px-4 py-3">
                  <div className="flex flex-col">
                    <span className="font-medium">Rizky Pratama</span>
                    <span className="text-sm text-gray-500">
                      rizky@example.com
                    </span>
                  </div>
                </td>
                <td>
                  <span className="rounded-full bg-gray-100 px-2 py-0.5 text-sm text-gray-500">
                    attendee
                  </span>
                </td>


                <td className="px-4 py-3">
                  <span className="rounded-full bg-gray-100 px-2 py-0.5 text-sm text-gray-500">
                    Inactive
                  </span>
                </td>
                <td className="px-4 py-3 ">
                  <span className="text-gray-500">Jan 25</span>
                </td>
                <td className="px-4 py-3">
                  <button className="cursor-pointer" type="button">
                    <FiMoreHorizontal />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </form>
    </div>
  );
}

export default AdminUsersDashboard;
