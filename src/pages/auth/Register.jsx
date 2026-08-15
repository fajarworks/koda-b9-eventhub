// Register.jsx
import { FiEye } from "react-icons/fi";
import { Link } from "react-router";
import Logo from "../../components/Logo";

function Register() {
  return (
    <div className="w-full max-w-md mx-auto h-full flex flex-col justify-center">
      <div className="lg:hidden">
        <Logo className="text-black" />
      </div>
      <div className="w-full">
        <div className="flex flex-col gap-1 sm:gap-2">
          <h1 className="font-semibold text-lg sm:text-2xl lg:text-3xl">
            Create your account
          </h1>

          <p className="text-color-text text-xs sm:text-sm lg:text-base">
            Already have an account?{" "}
            <Link
              to="/auth/login"
              className="text-primary font-medium hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>

        <div className="flex w-full gap-2 sm:gap-3 text-color-text pt-3 sm:pt-6">
          <button
            type="button"
            className="w-full border border-gray-300 rounded-lg bg-white px-2 sm:px-4 py-1.5 sm:py-2.5 text-xs sm:text-base hover:bg-gray-50 transition"
          >
            Google
          </button>
          <button
            type="button"
            className="w-full border border-gray-300 rounded-lg bg-white px-2 sm:px-4 py-1.5 sm:py-2.5 text-xs sm:text-base hover:bg-gray-50 transition"
          >
            Github
          </button>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 my-3 sm:my-5">
          <div className="flex-1 border-t border-gray-300" />

          <span className="text-gray-400 text-[10px] sm:text-xs whitespace-nowrap">
            or continue with email
          </span>
          <div className="flex-1 border-t border-gray-300" />
        </div>
        <form className="flex flex-col gap-2 sm:gap-4">
          <div className="flex flex-col gap-1 sm:gap-2">
            <label
              htmlFor="fullname"
              className="text-xs sm:text-sm font-medium"
            >
              Full Name
            </label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              className="text-color-text border border-gray-300 w-full px-3 py-1.5 sm:py-2.5 text-sm sm:text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>
          <div className="flex flex-col gap-1 sm:gap-2">
            <label htmlFor="email" className="text-xs sm:text-sm font-medium">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="text-color-text border border-gray-300 w-full px-3 py-1.5 sm:py-2.5 text-sm sm:text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>
          <div className="flex flex-col gap-1 sm:gap-2">
            <label
              htmlFor="password"
              className="text-xs sm:text-sm font-medium"
            >
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                name="password"
                id="password"
                className="text-color-text border border-gray-300 w-full px-3 py-1.5 sm:py-2.5 pr-8 sm:pr-10 text-sm sm:text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
              <FiEye className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 cursor-pointer text-gray-500 w-4 sm:w-5 h-4 sm:h-5" />
            </div>
          </div>
          <div className="flex flex-col gap-1 sm:gap-2">
            <label
              htmlFor="confirmPassword"
              className="text-xs sm:text-sm font-medium"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className="text-color-text border border-gray-300 w-full px-3 py-1.5 sm:py-2.5 pr-8 sm:pr-10 text-sm sm:text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
              <button>
                <FiEye className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 cursor-pointer text-gray-500 w-4 sm:w-5 h-4 sm:h-5" />
              </button>
            </div>
          </div>
          <div className="text-color-text flex gap-2 py-2">
            <input type="checkbox" id="terms" name="terms" />
            <label htmlFor="terms">
              I agree to the{" "}
              <Link className="text-primary">Terms of Service </Link>and{" "}
              <Link className="text-primary">Privacy and Policy</Link>
            </label>
          </div>
          <button
            type="submit"
            className="w-full px-3 py-1.5 sm:py-2.5 bg-primary rounded-lg text-white cursor-pointer hover:opacity-90 transition text-sm sm:text-base mt-1"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
