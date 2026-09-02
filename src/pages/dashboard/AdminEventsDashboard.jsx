import { FiMoreHorizontal } from "react-icons/fi";

function AdminEventsDashboard() {
  return (
    <div className="min-h-screen py-6 px-4">
    <div className="flex items-center justify-between px-4 py-3 border border-gray-300 rounded-xl">
      <div className="flex items-center gap-2">
        <div className="w-12 h-10 rounded-lg overflow-hidden">
          <img className="object-cover w-full h-full" src="/images/image-event2.png" alt="" />
        </div>
        <div>
          <p className="font-medium"> Go concurrency workshop</p>
          <p className="text-gray-500">Aug 22, 2026 · Bandung</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-color-text hidden lg:block"> 48/100</span>
        <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-500"> active</span>
        <button className="text-gray-500"><FiMoreHorizontal/></button>
      </div>
    </div>
    </div>
  );
}

export default AdminEventsDashboard;
