import { FiArrowRight, FiSearch } from "react-icons/fi";
import events from "../../data/events.json";
import communities from "../../data/communities.json";
import EventItemCard from "../../components/EventItemCard";
import CommunityItemCard from "../../components/CommunityItemCard";
import { Link } from "react-router";

function ExplorePage() {
  return (
    <>
      <main className="min-h-screen w-full">
        <section className=" bg-radial from-orange-900 from-5% to-black mx-auto px-4 pt-4 py-10 flex justify-center">
          <div className="max-w-7xl w-full">
            <div className="flex my-center mb-4">
              <span className="bg-white/10 text-primary  backdrop-blur-3xl rounded-xl border border-white/20 shadow-lg px-3 py-0.5">
                Discover · Connect · Participate
              </span>
            </div>
            <div className="flex my-center text-center pb-8">
              <h1 className="font-bold text-white text-4xl">
                Find events <br/> that{" "}
                <span className="text-primary">actually matter</span> to you
              </h1>
            </div>
            <div className="pt-4">
              <p className="text-gray-500 text-center ">
                Join workshops, conferences, and meetups in Indonesia's best
                tech communities - or create your own.
              </p>
            </div>
            <form className="flex my-center pt-10 w-full">
              <div className="relative w-full">
                <FiSearch className="absolute left-3 text-gray-400 text-lg pointer-events-none self-center" />
                <input
                  className="w-full bg-white rounded-lg py-3.5 pl-10 pr-24 border border-gray-200 focus:outline-none text-color-text"
                  placeholder="Search events, topics, or locations..."
                  type="text"
                  id="search"
                />
                <button className="absolute right-1.5 self-center bg-primary text-white rounded-md py-2 px-4">
                  Search
                </button>
              </div>
            </form>
            <div className="flex flex-wrap justify-center gap-1 pt-5">
              <span className="text-gray-300 boder border-color-text bg-white/10 backdrobackdrop-blur-3xl rounded-xl px-3 py-1 ">
                Technology
              </span>
              <span className="text-gray-300 boder border-color-text bg-white/10 backdrobackdrop-blur-3xl rounded-xl px-3 py-1 ">
                AI
              </span>
              <span className="text-gray-300 boder border-color-text bg-white/10 backdrobackdrop-blur-3xl rounded-xl px-3 py-1 ">
                Design
              </span>
              <span className="text-gray-300 boder border-color-text bg-white/10 backdrobackdrop-blur-3xl rounded-xl px-3 py-1 ">
                Business
              </span>
              <span className="text-gray-300 boder border-color-text bg-white/10 backdrobackdrop-blur-3xl rounded-xl px-3 py-1 ">
                Programming
              </span>
              <span className="text-gray-300 boder border-color-text bg-white/10 backdrobackdrop-blur-3xl rounded-xl px-3 py-1 ">
                Music
              </span>
            </div>
          </div>
        </section>
        <section className="flex my-center flex-col p-5">
          <div className=" max-w-7xl flex justify-between items w-full p-5">
            <h2 className="font-semibold text-wrap text-2xl">
              Discover events that interest you
            </h2>
            <button className="flex my-center text-color-text cursor-pointer">
              See all <FiArrowRight />
            </button>
          </div>
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-3">
            {events.map((event) => (
              <EventItemCard key={event.id} event={event} />
            ))}
          </div>
        </section>

        <section className="flex my-center flex-col p-5">
          <div className=" max-w-7xl flex justify-between w-full p-5">
            <h2 className="font-semibold text-wrap text-2xl">
              Popular Communities
            </h2>
            <button className="flex my-center text-color-text cursor-pointer">
              See all <FiArrowRight />
            </button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
            {communities.map((community) => (
              <CommunityItemCard key={community.id} communities={community} />
            ))}
          </div>
        </section>
        <section className="p-5">
          <div className="p-5">
            <h1>What community says</h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
            <article>
              <div className="p-6 border border-gray-300 rounded-lg bg-white shadow-md">
                <p className="text-primary text-2xl px-2">"</p>
                <p className="text-color-text p-4">
                  EventHub completely changed how I network. I met my current
                  co-founder at a Jakarta AI meetup I found here. The community
                  pages make it so easy to find people who are into the same
                  things.
                </p>
                <div className="flex items-center  gap-2">
                  <div className="flex my-center w-7 h-7 rounded-full bg-blue-700 text-white font-semibold">
                    <p>RN</p>
                  </div>
                  <div>
                    <p className="font-semibold">Raisa Nurdiana</p>
                    <span className="text-color-text">
                      Frontend Engineer · Cakrawala Digital
                    </span>
                  </div>
                </div>
              </div>
            </article>
            <article>
              <div className="p-5 border border-gray-300 rounded-lg bg-white shadow-md">
                <p className="text-primary text-2xl px-2">"</p>
                <p className="text-color-text p-4">
                  We used to manage event registrations over WhatsApp groups.
                  Switching to EventHub as our organizer platform cut our admin
                  overhead in half and attendance actually went up.
                </p>
                <div className="flex items-center  gap-2">
                  <div className="flex my-center w-7 h-7 rounded-full bg-green-700 text-white font-semibold">
                    <p>BH</p>
                  </div>
                  <div>
                    <p className="font-semibold">Bimo Hartanto</p>
                    <span className="text-color-text">
                      Product Manager · Nusantara Labs
                    </span>
                  </div>
                </div>
              </div>
            </article>
            <article>
              <div className="p-6 border border-gray-300 rounded-lg bg-white shadow-md">
                <p className="text-primary text-2xl px-2">"</p>
                <p className="text-color-text p-4">
                  I love that I can filter by city and category in one place.
                  Found a design sprint workshop in Bandung I never would have
                  discovered otherwise — ended up being one of the best events
                  I've attended.
                </p>
                <div className="flex items-center  gap-2">
                  <div className="flex my-center w-7 h-7 rounded-full bg-blue-700 text-white font-semibold">
                    <p>IK</p>
                  </div>
                  <div>
                    <p className="font-semibold">Indira Kusuma</p>
                    <span className="text-color-text">
                      UX Designer · Aruna Kreasi Studio
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
        <footer className="p-6">
          <div className="bg-black flex flex-col my-center rounded-lg  p-8 min-w-sm">
            <div className="flex  my-center gap-2">
              <span className="px-2 py-0.5 rounded-xl bg-blue-400/10 backdrop-blur-3xl  text-blue-500 shadow-sm">
                Techonology
              </span>
              <span className="px-2 py-0.5 rounded-xl bg-blue-400/10 backdrop-blur-3xl text-blue-300">AI</span>
              <span className="px-2 py-0.5 rounded-xl bg-purple-500/10 backdrop-blur-2xl text-purple-500">Design</span>
            </div>
            <h1 className="text-white text-2xl font-bold text-center text-wrap pt-4">
              Ready to find your community?
            </h1>
            <p className="text-color-text text-center pt-3">
              Join thousands of developers, designers, and makers in Indonesia's
              most active tech communities.
            </p>
            <div className="flex gap-2 lg:flex-col pt-6">
              <Link className="bg-primary text-white px-6 py-3 rounded-lg text-center cursor-pointer max-w-sm">
                Explore Event
              </Link>
              <Link className="border border-white text-white px-6 py-3 rounded-lg text-center cursor-pointer max-w-sm">
                Browse Communities
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

export default ExplorePage;
