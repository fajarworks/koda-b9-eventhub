import { useDispatch, useSelector } from "react-redux";
import CommunityItemCard from "../../components/CommunityItemCard";
import { FiSearch } from "react-icons/fi";
import { useSearchParams } from "react-router";
import React from "react";
import { getCategoriesThunk } from "../../redux/slices/categoriesSlices";
import { getCommunitiesThunk } from "../../redux/slices/communitySlices";

function CommunitiesPage() {
  const { communities } = useSelector((state) => state.communities);
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "";
  const page = Number(searchParams.get("page")) || 1;
  const { categories } = useSelector((state) => state.categories);

  React.useEffect(() => {
    dispatch(getCategoriesThunk());
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(
      getCommunitiesThunk({
        page,
        limit: 8,
        search,
        category,
      }),
    );
  }, [dispatch, search, category, page]);

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
                value={search}
                onChange={(e) => {
                  e.preventDefault();
                  setSearchParams((prev) => {
                    const params = new URLSearchParams(prev);
                    if (e.target.value) {
                      params.set("search", e.target.value);
                      return params;
                    }
                    params.delete("search");
                    return params;
                  });
                }}
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
      <div className="p-6 flex flex-col gap-4">
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
          {categories?.data.map((item) => {
            const isActive = category === String(item.id);

            return (
              <button
                key={item.id}
                className={`rounded-lg px-3 py-0.5 border cursor-pointer transition-colors ${
                  isActive
                    ? "text-white bg-orange-500 border-orange-500"
                    : "text-color-text border-gray-500"
                }`}
                onClick={() => {
                  setSearchParams((prev) => {
                    const params = new URLSearchParams(prev);

                    params.set("category", item.id);
                    params.delete("page");

                    return params;
                  });
                }}
              >
                {item.name}
              </button>
            );
          })}
        </div>
      </div>
      <div className="px-6">
        <p>
          <span className="font-semibold">{communities?.data?.length}</span>{" "}  
          Communities
        </p>
      </div>
      <section className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
          {communities?.data?.map((community) => (
            <CommunityItemCard key={community.id} communities={community} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default CommunitiesPage;
