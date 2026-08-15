import { FiEye } from "react-icons/fi";
import { Link } from "react-router";

function Login() {
  return (
    <div className=" max-w-md w-full mx-auto">
      <div className="w-full">
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-2xl">Welcome Back</h1>
        <p className="text-color-text">
          Don't have an account? <Link className="text-primary">Sign Up</Link>
        </p>
      </div>
      <div className="flex w-full gap-2 text-color-text pt-7">
        <button className="w-full border border-gray-300 rounded-lg bg-white px-4 py-2.5">
          <Link>Google</Link>
        </button>
        <button className="w-full border border-gray-300 rounded-lg bg-white px-4 py-2.5">
          <Link>Github</Link>
        </button>
      </div>
      <div className="flex items-center gap-4 my-6">
        <div className="flex-1 border-t border-gray-300"></div>
        <span className="text-gray-400 text-sm whitespace-nowrap">
          or continue with email
        </span>
        <div className="flex-1 border-t border-gray-300"></div>
      </div>
      <form action="">
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            id="email"
            className="text-color-text border border-gray-300 w-full px-3 py-2.5 rounded-lg focus:outline-primary "
          />
        </div>
        <div className="flex flex-col gap-2 my-2">
          <div className="flex justify-between">
            <label htmlFor="password">Password </label>
            <Link className="text-primary">Forgot Password?</Link>
          </div>
          <div className="relative">
            <input
              type="password"
              name="password"
              id="password"
              className="text-color-text border border-gray-300 w-full px-3 py-2.5 pr-10 rounded-lg focus:outline-primary "
            />
            <FiEye className="absolute top-1/2 -translate-y-1/2 cursor-pointer right-4" />
          </div>
        </div>
        <button className="w-full px-3 py-2.5 bg-primary rounded-lg text-white cursor-pointer">
          Submit
        </button>
      </form>
      </div>
    </div>
  );
}

export default Login;
