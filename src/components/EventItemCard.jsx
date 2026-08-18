import { LuBookmark, LuCalendar, LuMapPin, LuUsers } from "react-icons/lu";
import { Link } from "react-router";
import TagBadge from "./TagBadge";
function EventItemCard({ event }) {

  const progress = Math.min( (event.attendees / event.capacity) * 100, 100 )
  return (
    <Link to={`/events/${event.id}`} className="block h-full">
      <article className="w-full max-w-sm h-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:-translate-y-0.5 hover:shadow-md flex flex-col">
        <div className="relative">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-48 object-cover"
          />
          <div className="flex gap-2 absolute bottom-2 left-2">
            {event.tags.map((tag) => (
              <TagBadge key={tag} label={tag} />
            ))}
          </div>
        </div>
        <div className="p-5 flex flex-col flex-1 gap-1">
          <div className="pb-3">
            <h1 className="font-semibold text-xl line-clamp-2">
              {event.title}
            </h1>
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
          <div className="w-full flex flex-col gap-2 mt-2">
            <div className="w-full flex justify-between">
              <span>{event.attendees} attendees</span>
              <span>{event.capacity} capacity</span>
            </div>

            <div className="w-full bg-gray-100 rounded-full h-2">
              <div
                className="bg-amber-500 h-2 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          <div className="w-full flex items-center gap-2 py-2 mt-auto">
            <button
              onClick={(e) => e.preventDefault()}
              className="w-full bg-primary px-3 py-1.5 text-white rounded-lg"
            >
              Join Event
            </button>

            <button
              onClick={(e) => e.preventDefault()}
              className="p-2 rounded-lg border border-gray-300 flex items-center"
            >
              <LuBookmark />
            </button>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default EventItemCard;
