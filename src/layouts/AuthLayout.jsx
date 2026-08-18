// AuthLayout.jsx
import { Navigate, Outlet } from "react-router";
import SidePanel from "../components/SidePanel";
import useLocalStorage from "../hooks/useLocalStorage";

function AuthLayout() {
  const [userActive] = useLocalStorage("userActive", null)
  if (userActive) {
    return <Navigate to={"/explore"} replace/>
  }
  return (
    <main className="h-screen overflow-hidden grid grid-cols-1 lg:grid-cols-[35%_65%]">
      <section className="bg-radial from-orange-900 from-5% to-black hidden lg:block h-full overflow-hidden">
        <SidePanel />
      </section>
      <section className=" w-full flex items-center px-3 sm:px-6 lg:px-10">
        <Outlet />
      </section>
    </main>
  );
}

export default AuthLayout;
