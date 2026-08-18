// import Ticket from "../assets/ticket.svg";
import { LuTicketX, LuX } from "react-icons/lu";
import { useNavigate } from "react-router";

function ModalLoginALert({ show, setShow }) {
  const navigate = useNavigate();

  if (!show) {
    return null;
  }

  const handleLogin = () => {
    setShow(false);
    navigate("/auth/login");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex h-screen w-screen justify-center bg-black/50"
      onClick={() => setShow(false)}
    >
      <div
        className="mt-30 mb-auto w-full max-w-118 rounded-2xl bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-center border-b-2 border-gray-300 p-5">
          <div className="font-semibold">Sign in to continue</div>

          <button
            className="ml-auto cursor-pointer hover:text-red-500"
            onClick={() => setShow(false)}
          >
            <LuX/>
          </button>
        </div>
        <div className="my-center flex flex-col gap-4 p-5">
          <div className="rounded-2xl bg-orange-100 text-orange-500 p-2">
           <LuTicketX/>
          </div>
          <div className="veryCenter text-center">
            Create a free account to register for events, save favourites, join
            communities, and get personalised recommendations.
          </div>
        </div>
        <div className="ml-auto flex w-fit gap-3 p-5">
          <button
            className="border rounded-lg  px-3 py-1"
            onClick={() => setShow(false)}
          >
            Keep browsing
          </button>

          <button
            className="cursor-pointer px-3 py-1 rounded-lg bg-primary text-white"
            onClick={handleLogin}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalLoginALert;
