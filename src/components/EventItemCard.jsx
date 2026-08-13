import { LuBookmark, LuCalendar, LuMapPin, LuUsers } from "react-icons/lu";
function EventItemCard() {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div>
        <img src="/images/image1.png" alt="" className="" />
      </div>

      <div className="p-5 flex flex-col gap-0.5">
        <div className="pb-3">
          <h1 className="font-semibold text-xl">Go Corrency Workshop</h1>
        </div>
        <div className="flex gap-1.5 items-center text-color-text">
          <LuCalendar />
          <span>Aug 22, 2026 · 09:00 WIB</span>
        </div>
        <div className="flex gap-1.5 items-center text-color-text">
          <LuMapPin />
          <span>Bandung</span>
        </div>
        <div className="flex gap-1.5 items-center text-color-text">
          <LuUsers />
          <span>48 / 100 attendees</span>
        </div>
        <div className="flex gap-1.5 items-center text-color-text justify-between flex-col">
          <div className="w-full flex justify-between">
            <span>48 attendees</span>
            <span>100 capacity</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2">
            <div
              className="bg-amber-500 h-2 rounded-full"
              style={{ width: `${(48 / 100) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="w-full flex items-center gap-2 py-2">
          <button className="w-full bg-primary px-3 py-1.5 text-white rounded-lg">
            Join Event
          </button>
          <button className="p-2 rounded-lg border border-gray-300 flex items-center">
            <LuBookmark />
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventItemCard;
