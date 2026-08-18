// import React from 'react';
import communities from "../../data/communities.json";
import CommunityItemCard from "../../components/CommunityItemCard";
import { FiSearch } from "react-icons/fi";
function CommunitiesPage() {
  return (
    <main className="">
      <section className="bg-black px-4 py-10  flex my-center ">
        <div className="max-w-7xl">
          <h1 className="text-white font-bold text-center text-2xl pb-2">
            Explore Communities
          </h1>
          <p className="text-color-text text-center p-2">
            Join communities that match your interests and get personalized
            event recommendations.
          </p>
          <form action="">
            <div className="flex relative">
              <FiSearch className="text-color-text self-center absolute left-2 " />
              <input
                className="bg-white w-full px-3.5 py-3 pl-8 rounded-xl focus:outline-none"
                type="text"
                id="search"
                name="search"
                placeholder="Search communities..."
              />
            </div>
          </form>
        </div>
      </section>
      <div className="p-6 flex flex-col lg:flex-row gap-4">
        <div className="flex gap-2 flex-wrap">
          <button className="rounded-lg text-color-text px-3 py-0.5 border border-gray-500 cursor-pointer">
            All
          </button>
          <button className="rounded-lg text-color-text px-3 py-0.5 border border-gray-500 cursor-pointer">
            Joined
          </button>
          <button className="rounded-lg text-color-text px-3 py-0.5 border border-gray-500 cursor-pointer">
            Not Joined
          </button>
        </div>
        <div className="flex gap-2 flex-wrap items-center">
          <button className="rounded-lg text-color-text px-3 py-0.5 border border-gray-500 cursor-pointer">
            All Categories
          </button>
          <button className="rounded-lg text-color-text px-3 py-0.5 border border-gray-500 cursor-pointer">
            Technology
          </button>
          <button className="rounded-lg text-color-text px-3 py-0.5 border border-gray-500 cursor-pointer">
            AI
          </button>
          <button className="rounded-lg text-color-text px-3 py-0.5 border border-gray-500 cursor-pointer">
            Design
          </button>
          <button className="rounded-lg text-color-text px-3 py-0.5 border border-gray-500 cursor-pointer">
            Bussines
          </button>
          <button className="rounded-lg text-color-text px-3 py-0.5 border border-gray-500 cursor-pointer">
            Career
          </button>
          <button className="rounded-lg text-color-text px-3 py-0.5 border border-gray-500 cursor-pointer">
            Programming
          </button>
          <button className="rounded-lg text-color-text px-3 py-0.5 border border-gray-500 cursor-pointer">
            Music
          </button>
        </div>
      </div>
      <div className="px-6">
        <p>
          <span className="font-semibold">{communities.length}</span>{" "}
          Communities
        </p>
      </div>
      <section className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
          {communities.map((community) => (
            <CommunityItemCard key={community.id} communities={community} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default CommunitiesPage;
