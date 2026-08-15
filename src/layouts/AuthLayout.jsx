// AuthLayout.jsx
import { Outlet } from "react-router";
import SidePanel from "../components/SidePanel";

function AuthLayout() {
  return (
    <main className="h-screen overflow-hidden grid grid-cols-1 lg:grid-cols-[35%_65%]">
      <section className="hidden lg:block h-full overflow-hidden">
        <SidePanel />
      </section>
      <section className="w-full flex items-center justify-center px-3 sm:px-6 lg:px-10">
        <Outlet />
      </section>
    </main>
  );
}

export default AuthLayout;
