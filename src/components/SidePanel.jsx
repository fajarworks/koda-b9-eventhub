import Logo from "./Logo";

function SidePanel() {
  return (
    <div className=" justify-between min-h-screen bg-red-950 p-10 relative flex flex-col">
      <div className="">
        <Logo className= "text-white"/>
      </div>
      <div className=" flex flex-1 flex-col justify-center">
        <div className="max-w-md pt-5">
          <h1 className="text-white font-bold text-2xl">
            Discover events that shape careers.
          </h1>
        </div>
        <p className="text-gray-400 pt-3">
          Workshops, conferences, and community meetups from Indonesia's most
          active tech communities — all in one place.
        </p>

        <div className="bg-white/10 backdrop-blur-3xl rounded-xl border border-white/20 shadow-lg px-2.5 py-4 my-2">
          <p className="text-white text-xs">
            "Found my last three workshops here. The community is fantastic."
          </p>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 flex overflow-hidden">
              <img
                src="/images/pp-dina-rahayu.png"
                alt="photo profile"
                className="object-cover"
              />
            </div>
            <div className="flex gap-0.5 flex-col">
              <p className="text-white font-semibold text-xs">Dina Rahayu</p>
              <p className="text-gray-500 text-xs">
                Backend Lead, Cakrawala Digital
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-3xl rounded-xl border border-white/20 shadow-lg px-2.5 py-4 my-2">
          <p className="text-white text-xs">
            "Found my last three workshops here. The community is fantastic."
          </p>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 flex overflow-hidden">
              <img
                src="/images/pp-dina-rahayu.png"
                alt="photo profile"
                className="object-cover"
              />
            </div>
            <div className="flex gap-0.5 flex-col">
              <p className="text-white font-semibold text-xs">Dina Rahayu</p>
              <p className="text-gray-500 text-xs">
                Backend Lead, Cakrawala Digital
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-2 py-4">
          <div>
            <p className="text-xl font-bold text-white">12k+</p>
            <p className="text-gray-500 text-xs">Members</p>
          </div>
          <div>
            <p className="text-xl font-bold text-white">200+</p>
            <p className="text-gray-500 text-xs">Events/year</p>
          </div>
          <div>
            <p className="text-xl font-bold text-white">50+</p>
            <p className="text-gray-500 text-xs">Communities</p>
          </div>
        </div>
      </div>
      <div className="">
        <p className="text-white/50 text-xs">© 2026 EventHub - Indonesia</p>
      </div>
    </div>
  );
}

export default SidePanel;
