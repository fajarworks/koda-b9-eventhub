import { useDispatch, useSelector } from "react-redux";
import CommunityItemCard from "../../components/CommunityItemCard";
import { FiSearch } from "react-icons/fi";
import { useSearchParams } from "react-router";
import React from "react";
import { getCategoriesThunk } from "../../redux/slices/categoriesSlices";
import { getCommunitiesThunk } from "../../redux/slices/communitySlices";

function CommunitiesPage() {
  const { items, meta, isPending, page} = useSelector(
    (state) => state.communities.listCommunities,
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "";
  const { categories } = useSelector((state) => state.categories);
  const requestRef = React.useRef(null);

  const selectCategory = (id) => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      if (id) params.set("category", id);
      else params.delete("category");
      return params;
    });
  };
  React.useEffect(() => {
    dispatch(getCategoriesThunk());
  }, [dispatch]);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      requestRef.current = dispatch(
        getCommunitiesThunk({
          page: 1,
          limit: 8,
          search,
          category,
        }),
      );
    }, 300);
    return () => {
      clearTimeout(timer);
      requestRef.current?.abort();
    };
  }, [dispatch, search, category]);

  const hasMore = meta ? items.length < meta.total_data : false;

  const handleLoadMore = (e) => {
    e.stopPropagation();
    requestRef.current = dispatch(
      getCommunitiesThunk({
        page: page + 1,
        limit: 8,
        search,
        category,
      }),
    );
  };

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
          <button
            onClick={() => selectCategory("")}
            className={`rounded-lg px-3 py-0.5 border cursor-pointer transition-colors ${
              category === ""
                ? "text-white bg-orange-500 border-orange-500"
                : "text-color-text border-gray-500"
            }`}
          >
            All
          </button>

          {categories?.data.map((item) => {
            const isActive = category === String(item.id);

            return (
              <button
                key={item.id}
                onClick={() => selectCategory(item.id)}
                className={`rounded-lg px-3 py-0.5 border cursor-pointer transition-colors ${
                  isActive
                    ? "text-white bg-orange-500 border-orange-500"
                    : "text-color-text border-gray-500"
                }`}
              >
                {item.name}
              </button>
            );
          })}
        </div>
      </div>
      <div className="px-6">
        <p>
          <span className="font-semibold">{meta?.total_data ?? 0}</span>{" "}
          Communities
        </p>
      </div>
      <section className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
          {items.map((community) => (
            <CommunityItemCard key={community.id} communities={community} />
          ))}
        </div>
      </section>
      {hasMore && (
        <div className="flex justify-center p-6">
          <button
            onClick={handleLoadMore}
            disabled={isPending}
            className="border border-gray-500 text-color-text rounded-lg px-3 py-1 cursor-pointer disabled:opacity-50"
          >
            {isPending ? "Loading..." : "Load more communities"}
          </button>
        </div>
      )}
    </main>
  );
}

export default CommunitiesPage;
