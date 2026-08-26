import React from "react";
import { FiSearch } from "react-icons/fi";
import { LuSlidersHorizontal } from "react-icons/lu";
import EventItemCard from "../../components/EventItemCard";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router";

function EventPage() {
  const [showFilter, setShowFilter] = React.useState(false);
  const events = useSelector(state => state.events.events)
  const [searchParams, setSearchParams] = useSearchParams()

  const search = searchParams.get("search") || ""
  const location = searchParams.get("location") || "All location"
  const category = searchParams.get("category") || "All"
  const sort = searchParams.get("sortBy") || "Upcoming"

  let filteredEvents = [...events]
  if (search) {
    filteredEvents = filteredEvents.filter((event) => event.title.toLowerCase().includes(search.toLowerCase()))
  }
  if (category !== "All") {
    filteredEvents = filteredEvents.filter((event)=> event.tags.includes(category))
  }
  if (location !== "All location") {
    filteredEvents = filteredEvents.filter((event)=> event.location === location)
  }

  if (sort === "Upcoming") {
    filteredEvents = filteredEvents.sort((a, b) => new Date(a.date) - new Date(b.date))

  }

  if (sort === "Most Popular") {
    filteredEvents = filteredEvents.sort((a, b)=> b.attendees.length - a.attendees.length)
  }


  const handleShowFilter = () => {
    setShowFilter(prev => !prev)

    return;
  };
  const categories = [
    "All",
    "Arts",
    "Food",
    "Business",
    "Career",
    "AI",
    "Programming",
    "Health",
  ];

  const locations = [
    "All location",
    "Bandung",
    "Jakarta",
    "Surabaya",
    "Yogyakarta",
    "Online",
  ];

  const sortBy = ["Upcoming", "Most Popular", "Almost Full", "Recently Added"];

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
                value={search}
                placeholder="Search events..."
                onChange={(e) => {
                  setSearchParams((prev) => {
                    const params = new URLSearchParams(prev)
                    if (e.target.value) {
                      params.set("search", e.target.value)
                      return params
                    }
                    params.delete("search")
                    return params
                  })
                }}
              />
            </div>
            <button onClick={handleShowFilter}
              type="button"

              className={`flex items-center gap-2  px-3 py-2.5 rounded-lg whitespace-nowrap cursor-pointer ${showFilter ? "border border-orange-500 text-orange-500" :"border border-gray-300"}`}
            >
              <LuSlidersHorizontal />
              Filters
            </button>
          </form>
          {showFilter && (
            <div className="flex flex-col gap-4 pb-5">
              <div>
                <p className="text-color-text text-sm mb-2">CATEGORY</p>
                <div className="flex gap-2 flex-wrap">
                  {categories.map((item) => (

                    <button
                      className={`border border-gray-300 px-3 py-1 rounded-lg  $ cursor-pointer ${category === item ? "bg-primary text-white" :" text-color-text"}`}

                      key={item}
                      onClick={() => {
                        setSearchParams((prev) => {
                          const params = new URLSearchParams(prev)
                          if (item !== "All") {
                            params.set("category", item)
                            return params
                          }
                          params.delete("category")
                          return params
                        })
                      }}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-color-text text-sm mb-2">LOCATION</p>

                <div className="flex gap-2 flex-wrap">
                  {locations.map((item) => (
                    <button
                      className={`border border-gray-300 px-3 py-1 rounded-lg  $ cursor-pointer ${location === item ? "bg-primary text-white" :" text-color-text"}`}
                      key={item}
                      onClick={()=>{
                        setSearchParams((prev) => {
                          const params = new URLSearchParams(prev)
                          if (item !== "All location") {
                            params.set("location", item)
                            return params
                          }
                          params.delete("location")
                          return params
                        })
                      }}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-color-text text-sm mb-2">SORT BY</p>
                <div className="flex gap-2 flex-wrap">
                  {sortBy.map((item) => (
                    <button
                      className={`border border-gray-300 px-3 py-1 rounded-lg  $ cursor-pointer ${sort === item ? "bg-primary text-white" :" text-color-text"}`}

                      key={item}
                      onClick={() => {
                        setSearchParams((prev) => {
                          const params = new URLSearchParams(prev)
                          if (item !== "Upcoming") {
                            params.set("sortBy", item)
                            return params
                          }
                          params.delete("sortBy")
                          return params
                        })
                      }}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <section className="max-w-7xl mx-auto px-4 py-6">
        <p className="text-color-text mb-4">
          <span className="font-bold">{events.length}</span> events found
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredEvents.map((event) => (
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
