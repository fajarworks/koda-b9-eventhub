import React from "react";
import { BsShare } from "react-icons/bs";
import { CiChat1 } from "react-icons/ci";
import { FiArrowLeft, FiUsers } from "react-icons/fi";
import {
  LuBookmark,
  LuCalendar,
  LuClock,
  LuMapPin,
  LuSendHorizontal,
} from "react-icons/lu";
import { Link } from "react-router";

function EventDetailPage() {
  return (
    <main className="p-6">
      <div className="flex">
        <Link className="flex items-center gap-2 py-2">
          <FiArrowLeft /> Back to Events
        </Link>
      </div>
      <div className="min-h-screen overflow-hidden grid grid-cols-1 gap-2 lg:grid-cols-[7fr_3fr] w-full ">
        <section className="">
          <div className="w-full rounded-lg overflow-hidden">
            <img
              className="w-full object-cover"
              src="/images/image1.png"
              alt="event"
            />
          </div>
          <div>
            <span>Technology</span>
            <span>Programming</span>
            <span>Available</span>
          </div>
          <h1 className="font-medium text-2xl">Go Concurrency Workshop</h1>
          <div className="py-2">
            <h2 className="font-medium text-xl py-2">About this event</h2>
            <p className="text-color-text">
              A deep-dive workshop into Go concurrency patterns — goroutines,
              channels, select statements, and real-world use cases. Suitable
              for intermediate Go developers ready to write production-grade
              concurrent code. We'll cover common pitfalls, race conditions, and
              how to use the sync package effectively. Bring your laptop and be
              ready to write a lot of code. We'll build three mini-projects
              throughout the day: a rate limiter, a worker pool, and a
              concurrent web scraper.
            </p>
          </div>
          <div>
            <div className="py-2">
              <p className="font-medium">Speakers</p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center border border-gray-300 p-4 rounded-lg gap-2 w-full">
                <img src="/images/pp-dina-rahayu.png" alt="pp-dina" />
                <div>
                  <p className="font-medium">Ahmad Fauzan</p>
                  <p className="text-color-text">Staff Engineer, Tokopedia</p>
                </div>
              </div>
              <div className="flex items-center border border-gray-300 p-4 rounded-lg gap-2 w-full">
                <img src="/images/pp-dina-rahayu.png" alt="pp-dina" />
                <div>
                  <p className="font-medium">Dina Rahayu</p>
                  <p className="text-color-text">Backend Lead, Traveloka</p>
                </div>
              </div>
            </div>
            <article className="py-4">
              <div className="flex items-center gap-2 py-2">
                <CiChat1 size={28} />
                <p className="font-semibold text-xl">Discussion</p>
                <p>(3)</p>
              </div>
              <div className="py-2">
                <div className="flex gap-2">
                  <div>
                    <img src="/images/pp-dina-rahayu.png" alt="" />
                  </div>
                  <div className="border border-gray-300 w-full p-2 rounded-lg">
                    <div>
                      <span className="font-medium text-sm pr-2">
                        Dian Purnama
                      </span>
                      <span className="text-color-text text-xs">2d ago</span>
                    </div>
                    <div className="">
                      <p className="text-color-text">
                        Super excited for this one — will there be any live
                        coding exercises?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-2">
                <div className="flex gap-2">
                  <div>
                    <img src="/images/pp-dina-rahayu.png" alt="" />
                  </div>
                  <div className="border border-gray-300 w-full p-2 rounded-lg">
                    <div>
                      <span className="font-medium text-sm pr-2">
                        Dian Purnama
                      </span>
                      <span className="text-color-text text-xs">2d ago</span>
                    </div>
                    <div className="">
                      <p className="text-color-text">
                        Super excited for this one — will there be any live
                        coding exercises?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-2">
                <div className="flex gap-2">
                  <div>
                    <img src="/images/pp-dina-rahayu.png" alt="" />
                  </div>
                  <div className="border border-gray-300 w-full p-2 rounded-lg">
                    <div>
                      <span className="font-medium text-sm pr-2">
                        Dian Purnama
                      </span>
                      <span className="text-color-text text-xs">2d ago</span>
                    </div>
                    <div className="">
                      <p className="text-color-text">
                        Super excited for this one — will there be any live
                        coding exercises?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <div>
                  <img src="/images/pp-dina-rahayu.png" alt="" />
                </div>
                <div className="relative w-full">
                  <input
                    className="w-full rounded-2xl px-4 py-2 border border-gray-300 pr-10 focus:outline-none text-color-text"
                    type="text"
                    name="discussion"
                    id="discussion"
                    placeholder="add to the discussion"
                  />
                  <LuSendHorizontal
                    className="absolute top-1/2 -translate-y-1/2 right-4"
                    color="amber"
                    size={18}
                  />
                </div>
              </div>
            </article>
          </div>
          <div className="">
            <div className="py-4">
              <h3 className="font-medium text-xl">You might also like</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4">
              <article className="border-gray-300 rounded-lg overflow-hidden border shadow-lg">
                <div className="w-full">
                  <img src="/images/image1.png" alt="" />
                </div>
                <div className="p-2">
                  <p className="font-medium">Frontend Craft Conference</p>
                  <p className="text-color-text">Oct 12, 2026</p>
                </div>
              </article>
              <article className="border-gray-300 rounded-lg overflow-hidden border shadow-lg">
                <div className="w-full">
                  <img src="/images/image1.png" alt="" />
                </div>
                <div className="p-2">
                  <p className="font-medium">Frontend Craft Conference</p>
                  <p className="text-color-text">Oct 12, 2026</p>
                </div>
              </article>
              <article className="border-gray-300 rounded-lg overflow-hidden border shadow-lg">
                <div className="w-full">
                  <img src="/images/image1.png" alt="" />
                </div>
                <div className="p-2">
                  <p className="font-medium">Frontend Craft Conference</p>
                  <p className="text-color-text">Oct 12, 2026</p>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section className="">
          <article className="p-4 border border-gray-300 rounded-lg shadow-md">
            <div>
              <span>Event Info</span>
              <span className="flex gap-1 items-center text-color-text">
                <LuCalendar />
                Aug 22, 2026
              </span>
              <span className="flex gap-1 items-center text-color-text">
                <LuClock />
                09:00 – 17:00 WIB
              </span>
              <span className="flex gap-1 items-center text-color-text">
                <LuMapPin />
                Bandung
              </span>
              <div>
                <FiUsers />
                <span>48% full · 52 spots left</span>
              </div>
            </div>
            <div className="flex gap-1.5 items-center text-color-text justify-between flex-col">
              <div className="w-full flex justify-between">
                <span>48 attendees</span>
                <span>100 capacity</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: "48%" }}
                ></div>
              </div>
            </div>
            <div className="w-full py-4">
              <button className="w-full bg-primary px-3 py-1.5 text-white rounded-lg cursor-pointer">
                Join Event
              </button>
            </div>
            <div className="flex gap-2 items-center">
              <button className="px-3 py-1.5 border border-gray-300 w-full text-color-text rounded-lg flex items-center gap-2 justify-center cursor-pointer">
                {" "}
                <LuBookmark /> Save
              </button>
              <button className="px-3 py-1.5 border border-gray-300 w-full text-color-text rounded-lg flex items-center gap-2 justify-center cursor-pointer">
                <BsShare /> Share
              </button>
            </div>
          </article>

          <article className="p-4 border border-gray-300 rounded-lg shadow-md">
            <p className="text-color-text font-medium">ORGANIZED BY</p>
            <div className="flex items-center gap-3 py-1">
              <img src="/images/pp-dina-rahayu.png" alt="" />
              <div className="">
              <p className="font-medium">
                Rizky Pratama
              </p>
              <p className="text-blue-500">
                Bandung Go Community
              </p>
              </div>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}

export default EventDetailPage;
