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
  const sortBy = ["Upcoming", "Most Popular", "Almost Full", "Recently Added"];
  return (
    <>
      <main className=" max-w-7xl mx-auto px-5 min-h-screen">
        <div className="flex w-full bg-white">
          <form className="w-full flex gap-2 my-center py-4">
            <div className="w-full relative">
              <div className="absolute left-2 top-1/2 -translate-y-1/2 ">
                <FiSearch color="gray" />
              </div>
              <input
                className="w-full bg-gray-100 rounded-lg px-8 py-2.5 focus:outline-primary text-color-text"
                type="text"
                id="search"
                name="search"
                placeholder="Search events..."
              />
            </div>
            <div className="flex my-center gap-2 border border-gray-300 px-3 py-2.5 rounded-lg">
              <LuSlidersHorizontal />
              <button className="text-color-text">Filters</button>
            </div>
          </form>
        </div>
        <div className="flex flex-col gap-2 bg-white">
          <div>
          <p className="text-color-text">CATEGORY</p>
          <div className="flex gap-1 flex-wrap items-center ">
            {categories.map((item, idx) => {
              return (
                <button
                  className="border border-gray px-3 py-1 rounded-lg text-color-text cursor-pointer"
                  key={idx}
                >
                  {item}
                </button>
              );
            })}
          </div>
          </div>
          <div>
          <p className="text-color-text">LOCATION</p>
          <div className="flex gap-1 flex-wrap items-center ">
            {location.map((item, idx) => {
              return (
                <button
                  className="border border-gray px-3 py-1 rounded-lg text-color-text cursor-pointer"
                  key={idx}
                >
                  {item}
                </button>
              );
            })}
          </div>
          </div>
          <div>
          <p className="text-color-text">SORT BY</p>
          <div className="flex gap-1 flex-wrap items-center ">
            {sortBy.map((item, idx) => {
              return (
                <button
                  className="border border-gray px-3 py-1 rounded-lg text-color-text cursor-pointer"
                  key={idx}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
          </div>
        <div className="py-3">
          <p>
            <span className="font-bold">{events.length} </span>
            events found
          </p>
        </div>
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-3 ">
          {events.map((event) => (
            <EventItemCard key={event.id} event={event} />
          ))}
        </div>
        <div className="flex my-center p-6">
          <button className="border border-gray-500 text-color-text rounded-lg px-3 py-1 cursor-pointer">
            Load more events
          </button>
        </div>
      </main>
    </>
  );
}

export default EventPage;
