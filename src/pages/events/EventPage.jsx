import { FiSearch } from "react-icons/fi";
import { LuSlidersHorizontal } from "react-icons/lu";
import EventItemCard from "../../components/EventItemCard";
import events from "../../data/events.json";

function EventPage() {
  const categories = [
    "All",
    "Technology",
    "Design",
    "Business",
    "Career",
    "AI",
    "Programming",
    "Music",
  ];

  const location = [
    "All Location",
    "Bandung",
    "Jakarta",
    "Surabaya",
    "Yogyakarta",
    "Online",
  ];

  const sortBy = [
    "Upcoming",
    "Most Popular",
    "Almost Full",
    "Recently Added",
  ];

  return (
    <main className="min-h-screen">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <form className="w-full flex gap-2 items-center py-4">
            <div className="w-full relative">
              <FiSearch
                className="absolute left-3 top-1/2 -translate-y-1/2"
                color="gray"
              />

              <input
                className="w-full bg-gray-100 rounded-lg px-9 py-2.5 focus:outline-primary text-color-text"
                type="text"
                id="search"
                name="search"
                placeholder="Search events..."
              />
            </div>
            <button
              type="button"
              className="flex items-center gap-2 border border-gray-300 px-3 py-2.5 rounded-lg whitespace-nowrap"
            >
              <LuSlidersHorizontal />
              <span className="text-color-text">Filters</span>
            </button>
          </form>
          <div className="flex flex-col gap-4 pb-5">
            <div>
              <p className="text-color-text text-sm mb-2">
                CATEGORY
              </p>
              <div className="flex gap-2 flex-wrap">
                {categories.map((item) => (
                  <button
                    className="border border-gray-300 px-3 py-1 rounded-lg text-color-text cursor-pointer"
                    key={item}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-color-text text-sm mb-2">
                LOCATION
              </p>

              <div className="flex gap-2 flex-wrap">
                {location.map((item) => (
                  <button
                    className="border border-gray-300 px-3 py-1 rounded-lg text-color-text cursor-pointer"
                    key={item}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-color-text text-sm mb-2">
                SORT BY
              </p>
              <div className="flex gap-2 flex-wrap">
                {sortBy.map((item) => (
                  <button
                    className="border border-gray-300 px-3 py-1 rounded-lg text-color-text cursor-pointer"
                    key={item}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="max-w-7xl mx-auto px-4 py-6">
        <p className="text-color-text mb-4">
          <span className="font-bold">{events.length}</span>{" "}
          events found
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {events.map((event) => (
            <EventItemCard key={event.id} event={event} />
          ))}
        </div>
        <div className="flex justify-center p-6">
          <button className="border border-gray-500 text-color-text rounded-lg px-3 py-1 cursor-pointer">
            Load more events
          </button>
        </div>
      </section>
    </main>
  );
}
export default EventPage;
