import { LuBookmark, LuCalendar, LuMapPin, LuUsers } from "react-icons/lu";
function EventItemCard({ event }) {
  const tagColors = {
    Technology: "bg-blue-50 text-blue-700",
    Workshop: "bg-purple-50 text-purple-700",
    Programming: "bg-green-50 text-green-700",
    Business: "bg-orange-50 text-orange-700",
    Design: "bg-pink-50 text-pink-700",
    career: "bg-orange-50 text-orange-700",
    AI: "bg-blue-50 text-blue-700",
  };

  const progress = Math.min( (event.attendees / event.capacity) * 100, 100 )
  return (
    <article className="w-full max-w-sm overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="relative">
        <img src="/images/image1.png" alt="" className="" />
        <div className="flex gap-2 absolute bottom-2 left-2 ">
          {event.tags.map((tag) => (
            <span key={tag}
              className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                tagColors[tag] || "bg-gray-50 text-gray-700"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="p-5 flex flex-col gap-0.5">
        <div className="pb-3">
          <h1 className="font-semibold text-xl">{event.title}</h1>
        </div>
        <div className="flex gap-1.5 items-center text-color-text">
          <LuCalendar />
          <span>
            {event.date} · {event.time} {event.timezone}
          </span>
        </div>
        <div className="flex gap-1.5 items-center text-color-text">
          <LuMapPin />
          <span>{event.location}</span>
        </div>
        <div className="flex gap-1.5 items-center text-color-text">
          <LuUsers />
          <span>
            {event.attendees} / {event.capacity} attendees
          </span>
        </div>
        <div className="flex gap-1.5 items-center text-color-text justify-between flex-col">
          <div className="w-full flex justify-between">
            <span>{event.attendees} attendees</span>
            <span>{event.capacity} capacity</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2">
            <div
              className="bg-amber-500 h-2 rounded-full"
              style={{ width: `${progress}%` }}
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
    </article>
  );
}

export default EventItemCard;
